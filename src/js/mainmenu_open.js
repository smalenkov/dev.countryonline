(function () {

  $(".main-menu__elem").mouseenter(
    function () {
      $(this).children(".main-menu__subcats-box_open").css("display", "block");
      $(this).children(".main-menu__pointer").css("display", "block");
      $(this).children(".main-menu__pointer").animate({
        'opacity': '1'
      }, {
        duration: 100
      });

      $('.main-menu__elem_active').children(".main-menu__pointer").css("display", "none");
      $('.main-menu__elem_active').children(".main-menu__subcats-box_open").css("display", "none");

    });

  $(".main-menu__elem_active").mouseenter(
    function () {
      $(this).children(".main-menu__pointer").css("display", "block");
      $(this).children(".main-menu__subcats-box_open").css("display", "block");
      $(this).children(".main-menu__pointer").animate({
        'opacity': '1'
      }, {
        duration: 100
      });
    });

  $(".main-menu__elem").mouseleave(
    function () {
      $(this).children(".main-menu__pointer").css("opacity", "0");
      $(this).children(".main-menu__subcats-box_open").css("display", "none");
      $(this).children(".main-menu__pointer").css("display", "none");

      $(".main-menu__elem_active").mouseleave(
        function () {
          $(this).children(".main-menu__pointer").css("opacity", "1");
          $(".main-menu__elem_active").children(".main-menu__pointer").css("display", "block");
        }
      )
    });

  $(".main-menu").mouseleave(
    function () {
      $(this).children(".main-menu__pointer").css("opacity", "1");
      $(".main-menu__elem_active").children(".main-menu__pointer").css("display", "block");
      $(".main-menu__elem_active").children(".main-menu__subcats-box_open").css("display", "block");
    }
  )

})();