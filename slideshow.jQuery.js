(function ($) {
    $.fn.slideshow = function (slides) {
        slides = this.html(slides).find("div");
            
        var current = 0,
            
            slideCount = slides.length,
            
            mv = function (delta) {
                delta = delta || 0;
                if (current + delta < slideCount && current + delta > -1) {
                    slides.
                        stop(true, true).
                        eq(current).
                            animate({
                                left: (delta > 0 ? "-100%" : "100%")
                            });
                    slides.
                        eq(current += delta).
                            animate({
                                left: 0
                            });
                    // window.location.hash = "slide-" + current;
                }
            };
        
        $(document).keydown(function (event) {
            switch(event.keyCode) {
                case 37: // left arrow
                // case 38: // up arrow
                    mv(-1);
                    event.preventDefault();
                    break;
                case 39: // right arrow
                // case 40: // down arrow
                    mv(1);
                    event.preventDefault();
                    break;
                
            }
        });
        
        mv();
        return this;
    };
}(jQuery));