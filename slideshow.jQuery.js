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

        function keydown (event) {
            vector = event.keyCode - 38;
            var next = hashvalue() + vector;

            if ((/(?:37|39)/).test(event.keyCode) && next >=0 && next < slideCount - 1) {
                event.preventDefault();
                window.location.hash = next;
            }
        }
            
        // function mv () {
        //     var delta = event.keyCode - 38;

        //     if (current + delta < slideCount && current + delta > -1) {
        //         event.preventDefault && event.preventDefault();

        //         slides.
        //             stop(true, true).
        //             eq(current).
        //                 animate({
        //                     left: (delta > 0 ? "-100%" : "100%")
        //                 });
        //         slides.
        //             eq(current += delta).
        //                 animate({
        //                     left: 0
        //                 });
        //         // window.location.hash = "slide-" + current;
        //     }
        // }

        $(window).hashchange(function () {
            var hash = hashvalue();
            slides
                .stop(true, true)
                .eq(hash + -vector)
                .animate({"left": (vector ? "-100%" : "100%")})
                .eq(hash)
                .animate({"left": 0});
        });
        
        $(document)
            // .click(function (event) {
            //     mv({keyCode: (event.pageX > Math.floor(document.width / 2)) ? 39 : 37});
            // })
            .keydown(keydown);
        
        (function (i) {(i < 0 || i > slideCount) ? (window.location.hash = 0) : $(window).hashchange();}(hashvalue()));

        return this;
    };
}(jQuery));
