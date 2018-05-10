$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $('.topnav').addClass('navbar-fixed');
        } else {
            $('.topnav').removeClass('navbar-fixed');
        }
    });
});
