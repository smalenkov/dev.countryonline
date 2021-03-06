(function () {

  $(".main-menu__elem").mouseenter(
    function () {
      $(this).children(".main-menu__subcats-box").css("display", "block");
      $(this).children(".main-menu__subcats-box").animate({
        'top': '100%'
      }, {
        duration: 100
      });
      $(this).children(".main-menu__pointer").css("display", "block");
      $(this).children(".main-menu__pointer").animate({
        'opacity': '1'
      }, {
        duration: 100
      });
    });

  $(".main-menu__elem").mouseleave(
    function () {
      $(this).children(".main-menu__subcats-box").css("top", "0");
      $(this).children(".main-menu__pointer").css("opacity", "0");
      $(this).children(".main-menu__subcats").css("opacity", "0");
      $(this).children(".main-menu__subcats-box").css("display", "none")
      $(this).children(".main-menu__pointer").css("display", "none");
    });

  $('#map-icon, #rub-icon').bind('inview', function (event, visible) {
    if (visible) {
      $(this).css('opacity', '1').addClass('animated flipInX');
    }
  });

  $(".digitformat").replaceWith(function () {
    return $(this).text().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  })

})();