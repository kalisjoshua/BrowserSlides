/*jshint*/
/*globals jQuery*/
(function ($) {
    "use strict";
            
    var slideCount, theme, vector;

    theme = $("<kbd>");

    function hashvalue () {
        return ~~window.location.hash.slice(1) || 0;
    }

    function nav (event) {
        if ((/(?:click|keydown)/i).test(event.type)) {
            vector = event.keyCode
                ? event.keyCode - 38
                : (event.pageX > Math.floor(document.width / 2))
                    ? 1
                    : -1;
            var next = hashvalue() + vector;

            if (next >= 0 && next < slideCount - 1) {
                event.preventDefault();
                window.location.hash = next;
            }
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
                    .find(".footer")
                    .css({"background-color": color})
                    .wrapInner("<span>");
            });

        theme
            .html(([]).join.call(slides.first().children().slice(0,2).map(function (i, n) {return n.innerHTML.match(/\b\w/g);}), ""))
            .appendTo(slides);


        slideCount = slides.length;

        $(window).hashchange(function () {
            var hash = hashvalue();
            
            slides
                .stop(true, true)
                .eq(hash - vector)
                .animate({"left": (vector > 0 ? "-100%" : "100%")})
                .end()
                .eq(hash)
                .animate({"left": 0});
        });
    
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
        
        // initialize the window with the slides where they need to be
        (function (i) {
            (!window.location.hash || i < 0 || i > slideCount)
                ? (window.location.hash = i)
                : $(window).hashchange();

            slides
                .slice(0, i)
                .css("left", "-100%");
        }(hashvalue()));

        return this;
    };
}(jQuery));
