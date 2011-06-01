
(function () {
    var lists = {
            "#": "o",
            "*": "u"
        },
        markup = function (i, t, src) {
            src = src.
                    // replace(/^\s+|\s+$|\n{2,}/g, "").
                    replace(/^(=+)\s+(.*)/gm, function (match, p1, p2) {
                        return "<h" + p1.length + ">" + p2 + "</h" + p1.length + ">\n";
                    }).
                    replace(/(^-{2,})\n+([^\1]+?)\1/m, function (match, p1, p2) {
                        return "<pre><code>" + p2.split("\n").join("<br />") + "</code></pre>\n";
                    }).
                    replace(/^([^\*#<$\n]+)/gm, function (match, p1) {
                        return p1.length > 1 ? "<p>" + p1 + "</p>\n": match;
                    }).
                    split("\n");
            
            // all that's left to process are the lists...        
            var current = "",
                ind = 0,
                previous = "";
                
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
        };
    
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
        
        return deck;
    };
}());