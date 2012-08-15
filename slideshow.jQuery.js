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
            // .click(function (event) {
            //     mv({keyCode: (event.pageX > Math.floor(document.width / 2)) ? 39 : 37});
            // })
            .keydown(function (event) {
                vector = event.keyCode - 38;
                var next = hashvalue() + vector;

                if ((/(?:37|39)/).test(event.keyCode) && next >= 0 && next < slideCount - 1) {
                    event.preventDefault();
                    window.location.hash = next;
                }
            });
        
        (function (i) {(i < 0 || i > slideCount) ? (window.location.hash = 0) : $(window).hashchange();}(hashvalue()));

        return this;
    };
}(jQuery));
