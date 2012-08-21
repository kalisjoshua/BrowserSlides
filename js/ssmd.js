
(function () {
    "use strict";

    // var lists = {
    //         "#": "ol",
    //         "*": "ul"
    //     };

    function listType (leader) {
        return {"#":"ol","*":"ul"}[leader.slice(-1)];
    }

    function markup (indx, total, src) {
        var
            previous = ""
          , stack = [];

        src = src
            // title (h1-6) tags
            .replace(/^(=+)\s+(.*)/gm, function (match, p1, p2) {
                return tagify("h" + p1.length, p2);
            })
            // code blocks
            .replace(/(^-{3})\n+([^\1]+?)\1/gm, function (match, p1, p2) {
                return tagify("pre", tagify("code", p2.split("\n").join("<br />")));
            })
            // blockquote
            .replace(/^\s{4}((['"]).*\1)\s*~~\s*(.*)$/m, function (match, quote, garbage, footer) {
                return tagify("blockquote", tagify("p", quote) + tagify("footer", footer));
            })
            // paragraphs
            .replace(/^([^\*#<$\n]+)/gm, tagify("p", "$1"))
            // links
            .replace(/\[([^\]]+)\]\(([^\(]+)\)/g, function (match, link, href) {
                return tagify("a", link, " href=\"" + href + "\"");
            })
            // lists
            .replace(/^([#\*]+)\s*(.*)\n{2}$/gm, function (match, leader, text) {
                var temp = "";

                if (leader.length > previous.length) {
                    stack.push(listType(leader));
                    temp += "<%1>".replace("%1", listType(leader));
                } else if (leader.length < previous.length) {
                    temp += "</li></%1>".replace("%1", stack.pop());
                }
                temp += "<li>" + text;
                console.log(arguments)

                previous = leader;
                return temp;
            });

        // close all open lists
        while (stack.length) {
            src += "</%1>".replace("%1", stack.pop());
        }
        
        // all thats left to process are the lists...
        // var
        //     current  = ""
        //   , ind      = 0
        //   , previous = "";
            
        // while (ind < src.length) {
        //     if (current = src[ind].match(/^[#\*]+/)) {
        //         current = current[0];
        //         src[ind] = src[ind].replace(/^[#\*]+\s+/, "<li>");
        //         if (current.length > previous.length) {
        //             src = src.slice(0, ind).concat("<" + lists[current.slice(-1)]+ "l>", src.slice(ind));
        //             ind++;
        //         }
                
        //         if (current.length < previous.length) {
        //             src = src.slice(0, ind).concat("</" + lists[previous.slice(-1)]+ "l>", src.slice(ind));
        //             ind++;
        //         }
                
        //         if (!/^[#\*]/.test(src[ind + 1])) {
        //             current = current.split("");
                    
        //             while (current.length) {
        //                 src = src.slice(0, ind + 1).concat("</" + lists[current.pop()]+ "l>", src.slice(ind + 1));
        //                 ind++;
        //             }
        //         } else {
        //             previous = current;
        //         }
        //     }
            
        //     ind++;
        // }

        return tagify("div", src + tagify("span", indx + " of " + total, " class=\"footer\""), " class=\"slide\"");
    }

    function tagify (tag, content, attr) {
        return "<%1%3>%2</%1>\n"
            .replace(/%3/, attr || "")
            .replace(/%1/g, tag)
            .replace(/%2/, content.replace(/^\s*|\s*$/g, ""));
    }
    
    window.ssmd = function (src) {
        src = src.split("\n_\n");
        
        var deck = [],
            total = src.length - 1;
        
        document.title = src[0].
            replace(/\n+/g, "").
            replace(/^=\s*/, "").
            replace("==", " -");
                
        while (src.length) {
            deck.push(markup(deck.length, total, src.shift()));
        }
        
        return deck.join("");
    };
}());
