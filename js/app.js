/*jshint */
/*globals $ jQuery ssmd*/
$.fn.ready(function () {
  "use strict";
  $.ajax({
    success: function (data) {
      $("div#slideshow")
        .slideshow(ssmd(data));
    }
    ,url: window.location.hash.match(/[^#\-]+/)[0] + ".ssmd"
  });
});
