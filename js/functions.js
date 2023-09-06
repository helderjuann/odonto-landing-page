$(function() {

    menuMobile();

    function menuMobile() {
        $('body').on('click','.menu-mobile p', function(e) {
            e.stopPropagation();
            $('.menu-mobile').find('ul').slideToggle();
        });

        $('body').on('click', function(e) {
            e.stopPropagation();
            $('.menu-mobile').find('ul').slideUp('open');
        });
    }

    disableTextS();

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }
});