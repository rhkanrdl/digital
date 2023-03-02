

$(function () {

  $('button.all-menu').on('click', function () {
    $('nav#main-menu').toggleClass('on');
  });


  $("nav#main-menu h2 a").on("click", function (e) {

    $("nav#main-menu h2").removeClass("on");

    if ($(this).parent().parent().find("ul").length) {
        $("nav#main-menu h2").removeClass("on");
        $(this).parent().addClass("on");
        e.preventDefault();
    }
});

});
