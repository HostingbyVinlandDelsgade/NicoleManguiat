$(document).ready(function() {
  // Scroll to the top of the page when the document is ready
  $(window).scrollTop(0);

  $(window).scroll(function() {
      $(".slideanim").each(function() {
          var pos = $(this).offset().top;
          var winTop = $(window).scrollTop();
          if (pos < winTop + $(window).height() - 50) {
              $(this).addClass("slide");
          }
      });
  });

  $(".navbar a, footer a[href='#myPage']").on("click", function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate({
              scrollTop: $(hash).offset().top
          }, 900, function() {
              window.location.hash = hash;
          });
      }
  });
});
