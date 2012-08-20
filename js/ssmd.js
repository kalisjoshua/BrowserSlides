
(function () {
    "use strict";

    var lists = {
            "#": "o",
            "*": "u"
        };

    function markup (i, t, src) {
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
            .replace(/^\s{4}((['"]).*\1)\s*~~\s*\[([^\]]+)\]\(([^\(]+)\).*$/m, function (match, quote, garbage, link, href) {
                return tagify("blockquote", tagify("p", quote) + tagify("footer", tagify("a", link, " href=\"%1\"".replace(/%1/, href))));
            })
            // paragraphs
            .replace(/^([^\*#<$\n]+)/gm, tagify("p", "$1"))
            .split("\n");
        
        // all that's left to process are the lists...
        var
            current  = ""
          , ind      = 0
          , previous = "";
            
        while (ind < src.length) {
            if (current = src[ind].match(/^[#\*]+/)) {
                current = current[0];
                src[ind] = src[ind].replace(/^[#\*]+\s+/, "<li>");
                if (current.length > previous.length) {
                    src = src.slice(0, ind).concat("<" + lists[current.slice(-1)]+ "l>", src.slice(ind));
                    ind++;
                }
                
                if (current.length < previous.length) {
                    src = src.slice(0, ind).concat("</" + lists[previous.slice(-1)]+ "l>", src.slice(ind));
                    ind++;
                }
                
                if (!/^[#\*]/.test(src[ind + 1])) {
                    current = current.split("");
                    
                    while (current.length) {
                        src = src.slice(0, ind + 1).concat("</" + lists[current.pop()]+ "l>", src.slice(ind + 1));
                        ind++;
                    }
                } else {
                    previous = current;
                }
            }
            
            ind++;
        }
        
        return "<div class=\"slide\" id=\"slide-" + i + "\">" +
            src.join("") + "<span class=\"footer\">" + i + " of " + t + "</span>" + "</div>\n\n";
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
