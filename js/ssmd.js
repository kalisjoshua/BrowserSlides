
(function () {
    "use strict";
    var nl = "\n";

    function listType (leader) {
        var types = {"#":"ol","*":"ul"};

        function listType (leader) {
            return types[leader.slice(-1)];
        }
        
        return listType(leader);
    }

    function tagify (tag, content, attr) {
        return "<%1%3>%2</%1>"
            .replace(/%3/, attr || "")
            .replace(/%1/g, tag)
            .replace(/%2/, content);
    }

    window.ssmd = function (txt) {
        
        return txt
            // remove leading whitespace
            .replace(/^\s*/, "")

            // remove blank lines
            .replace(/\n+/gm, "\n")

            // remove trailing closing _
            .replace(/\n_\n*$/, "")

            // title (h1-6) tags
            .replace(/^(=+)\s+(.*)/gm, function (match, p1, p2) {
                return tagify("h" + p1.length, p2);
            })

            // code blocks
            .replace(/(^-{3})\n+([^\1]*?)\n+\1/gm, function (match, garbage, code) {
                return tagify("pre", tagify("code", code.split("\n").join("<br/>")));
            })

            // blockquote
            .replace(/^\s{4}((['"]).*\1)\s*~~\s*(.*)$/gm, function (match, quote, garbage, footer) {
                return tagify("blockquote", tagify("p", quote) + tagify("footer", footer));
            })

            // paragraphs
            .replace(/^([^#\*<].+)$/gm, tagify("p", "$1"))

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
                list = list.join("");

                return list + nl;
            })

            // links
            .replace(/\[([^\]]+)\]\(([^\(]+)\)/g, function (match, link, href) {
                return tagify("a", link, " href=\"" + href + "\"");
            })

            // split on slide terminator
            .split("\n_\n")
            // wrap slides
            .map(function (item, indx, slides) {
                var footer = tagify("footer", indx + " of " + slides.length);
                return tagify("div", nl + item + nl + footer + nl);
            })
            // join into one string
            .join("\n");
    };
}());
