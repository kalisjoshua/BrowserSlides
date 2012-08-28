
(function (global) {
    "use strict";

    var nl = "\n"
      , types = {"#":"ol","*":"ul"};

    function highlight(js) {
        return js
            .replace(/(\/\/[^$]*?$)|(\/\*[.\D]*?\*\/)/gm, '<span class="comment">$&</span>')
            .replace(/('.*?')/gm, '<span class="string">$1</span>')
            .replace(/((?=[\-+])(?:[\-+]?\d+(?:\.\d+)?)|(?:\b\d+(?:\.\d+)?))/gm, '<span class="number">$1</span>')
            .replace(/\bnew\s+(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
            .replace(/\breturn\b/, '<span class="init">return</span>')
            .replace(/\b(function|else|for|if|throw|while|var)\b/gm, '<span class="keyword">$1</span>');
    }

    function listType (leader) {
        return types[leader.slice(-1)];
    }

    function tagify (tag, content, attr) {
        return "<%1%3>%2</%1>"
            .replace(/%3/, attr || "")
            .replace(/%1/g, tag)
            .replace(/%2/, content);
    }

    function md (str) {
        return str
            // remove leading whitespace
            // .replace(/^\s*/, "")

            // remove blank lines
            // .replace(/\n+/gm, "\n")

            // remove trailing closing _
            .replace(/\n_\n*$/, "")

            // code blocks
            .replace(/(^-{3})\n+([^\1]*?)\n+\1/gm, function (match, garbage, code) {
                return tagify("pre", tagify("code", highlight(code).split(nl).join("~br~")));
            })

            // blockquote
            .replace(/^\s{4}((['"]).*\1)\s+~~\s*(.*)$/gm, tagify("blockquote", tagify("p", "$1") + tagify("footer", "$3")))

            // lists
            .replace(/^(?:([#\*]+)\s*[^$\n]+[\n\W\D])+/gm, function (list, leader) {
                var previous = ""
                  , stack = [];

                list = (list + (list.slice(-1) === nl ? "" : nl) +"*")
                    .replace(/^([#\*]+)\s*(.*)(?=[\n\W\D]([#\*]+)\s*(.*))$/gm, function (match, leader, text, _leader, _text) {
                        var temp = "";

                        if (leader.length > previous.length) {
                            // open a new list and list item
                            stack.push(listType(leader));
                            temp += "<%1>".replace("%1", listType(leader));
                        } else if (leader.length < previous.length) {
                            // close the previous list item and list
                            temp += "</li></%1></li>".replace("%1", stack.pop());
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
                list = list.split(nl);
                list.pop();
                list = list.join("");

                return list + nl;
            })

            // title (h1-6) tags
            .replace(/^(=+)\s+(.*)/gm, function (match, p1, p2) {
                return tagify("h" + p1.length, p2);
            })

            // paragraphs
            .replace(/^([^#\*<].+)$/gm, function (match, content) {
                content = content.replace(/(?:^\s*)|(?:\s*$)/, "");
                return (/^</).test(content) ? content : tagify("p", content);
            })

            .replace(/~br~/gm, "\n")

            // links
            .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, tagify("a", "$1", " href=\"" + "$2" + "\""));
    }

    global.ssmd = function (txt) {
        
        return md(txt)

            // split on slide terminator
            .split("\n_\n")
            // wrap slides
            .map(function (item, indx, slides) {
                var footer = tagify("footer", indx + " of " + slides.length);
                return tagify("div", nl + item + nl + footer + nl);
            })
            // join into one string
            .join(nl);
    };

    global.ssmd.md = md;

}((function () {
    "use strict";
    try {
        return exports;
    } catch (e) {
        return window;
    }
}())));
