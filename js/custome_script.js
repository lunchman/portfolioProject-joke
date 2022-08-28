


// var mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop >500 || document.documentElement.scrollTop > 500) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
   



$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).hide() && $('.fa-times').show();
    });
    $('.fa-times').click(function(){
        $(this).hide() && $('.fa-bars').show();
    });
});

$(window).on('scroll', function () {
    var menu_area = $('.navbar');
    if ($(window).scrollTop() > 70) {
        menu_area.addClass('sticky_navigation');
        // $('.mainlogo').css("width","auto");
    } else {
        menu_area.removeClass('sticky_navigation');
        // $('.mainlogo').css("width","auto");

    }
});



$('body').scrollspy({ target: '.navbar' });
$('.navbar-nav>li>a').on('click', function(){
$('.navbar-collapse').collapse('hide');
$('.fa-times').hide() && $('.fa-bars').show();

});