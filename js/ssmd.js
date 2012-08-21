
(function () {
    "use strict";

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
            // lists
            .replace(/^(?:([#\*]+)\s*[^$\n]+[\n\W\D])+/gm, function (list, leader) {
                var previous = ""
                  , stack = [];

                list = (list + (list.slice(-1) === "\n" ? "" : "\n") +"*")
                    .replace(/^([#\*]+)\s*(.*)(?=[\n\W\D]([#\*]+)\s*(.*))$/gm, function (match, leader, text, _leader, _text) {
                        var temp = "";

                        if (leader.length > previous.length) {
                            // open a new list and list item
                            stack.push(listType(leader));
                            temp += "<%1>".replace("%1", listType(leader));
                        } else if (leader.length < previous.length) {
                            // close the previous list item and list
                            temp += "</li></%1>".replace("%1", stack.pop());
                        } else if (leader.length === previous.length) {
                            // just close the previous list item
                            temp += "</li>";
                        }

                        temp += "<li>" + text;

                        // close all open lists
                        if (!_text.length) {
                            while (stack.length) {
                                temp += "</li></%1>".replace("%1", stack.pop());
                            }
                        }

                        previous = leader;
                        return temp;
                    });

                // clean up the additional list item we added above so that we can see the end of the list
                list = list.split("\n");
                list.pop();
                list = list.join("\n");

                return list;
            })
            // links
            .replace(/\[([^\]]+)\]\(([^\(]+)\)/g, function (match, link, href) {
                return tagify("a", link, " href=\"" + href + "\"");
            });

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
