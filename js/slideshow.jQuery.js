/*jshint*/
/*globals jQuery*/
(function ($) {
    "use strict";
            
    var presentation, slideCount, theme, vector;

    theme = $("<kbd>");

    function cleanup (slides, hashvalue) {
        var hash = hashvalue();

        slides
            .stop(true, true)
            .slice(0, hash - vector)
            .css("left", "-100%")
        .end()
            .slice(hash + 1)
            .css("left", "100%")
        .end()
            .eq(hash)
            .animate({"left": 0});

        vector !== 0 && slides
            .eq(hash - vector)
            .animate({"left": (vector > 0 ? "-100%" : "100%")});
    }

    function hashvalue (value) {
        if (!value && arguments.length !== 1) {
            return (window.location.hash.match(/\d+/) || [])[0] || 0;
        } else {
            window.location.hash = presentation + "-" + value;
        }
    }

    function nav (event) {
        if ((/(?:click|keydown)/i).test(event.type)) {
            vector = event.keyCode
                ? event.keyCode - 38
                : (event.pageX > Math.floor(document.width / 2))
                    ? 1
                    : -1;
            var next = ~~hashvalue().match(/\d+/)[0] + vector;

            if (Math.abs(vector) === 1 && (next >= 0 && next < slideCount)) {
                event.preventDefault();
                hashvalue(next);
            }
        }

        if (Math.abs(event.keyCode - 39) === 1 && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            hashvalue({"38": 0, "40": (slideCount - 1)}[event.keyCode]);
            // cleanup();
        }
    }

    $.fn.slideshow = function (slides) {
        slides = this
            .html(slides)
            .find("div")
            .each(function () {
                var color = "#" + Math.random().toString(16).slice(2, 8);
                $(this)
                    .css("border-color", color)
                    .children("footer")
                    .css({"background-color": color})
                    .wrapInner("<span>");
            });

        theme
            .html(([]).join.call(slides.first().children().slice(0,2).map(function (i, n) {return n.innerHTML.match(/\b\w/g);}), ""))
            .appendTo(slides);


        cleanup = cleanup.bind(null, slides, hashvalue);
        slideCount = slides.length;

        $(window).hashchange(cleanup);
    
        // setup navigation for desktop and mobile
        $(document).keydown(nav);

        $("#help a")
            .click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                $(this)
                    .closest("p")
                    .children("span")
                    .remove();
                $(document).click(nav);
            });

        presentation = window.location.hash.match(/[^#\-]+/)[0];
        
        // initialize the window with the slides where they need to be
        (function (i) {
            (!i || i < 0 || i > slideCount)
                ? hashvalue(0)
                : $(window).hashchange();

            slides
                .slice(0, i)
                .css("left", "-100%");
        }(hashvalue()));

        return this;
    };
}(jQuery));
