(function () {
    $(".digitformat").replaceWith(function () {
        return $(this).text().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    });
}());
