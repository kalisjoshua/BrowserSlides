/*jshint*/
/*globals jQuery*/
(function ($) {
    "use strict";

    $.fn.slideshow = function (slides) {
        slides = this
            .html(slides)
            .find("div");
            
        var slideCount = slides.length
            ,vector;

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
        
        $(document)
            .click(nav)
            .keydown(nav);
        
        // initialize the window with the slides where they need to be
        (function (i) {
            (i < 0 || i > slideCount)
                ? (window.location.hash = 0)
                : $(window).hashchange();

            slides
                .slice(0, hashvalue())
                .css("left", "-100%");
        }(hashvalue()));

        return this;
    };
}(jQuery));
