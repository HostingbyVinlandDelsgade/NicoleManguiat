$(document).ready(function() {
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + $(window).height() - 50) {
                $(this).addClass("slide");
            }
        });
    });
});


$(document).ready(function () {
    $(".btn, .navbar a, footer a[href='#myPage']").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          900,
          function () {
            window.location.hash = hash;
          }
        );
      } 
    });
});