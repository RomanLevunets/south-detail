$(document).ready(function() {


    //slider
    $('.mainSlider').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        // autoplay: true,
        // autoplaySpeed: 4000,
    });
    $('.goods-wrap').slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
    });

    //pop-up
    $('.menu li a').magnificPopup({
        removalDelay: 250,
        mainClass: 'mfp-fade'
    });


    //height service-top block====
    function item(){
        $('.services-top').each(function () {
            var ths = $(this),
                thsh = ths.find('.services-top-txt').outerHeight();
            ths.find('.services-top-img').css('min-height', thsh);
        });
    }item();

    //header menu active
    $('.lk-tabs li ').click(function() {
        if (!$(this).hasClass('active')) {
            $('.lk-tabs li').removeClass('active');
            $(this).addClass('active');
        }
    });

    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.menu').toggleClass('open');
        $('.wrapper').toggleClass('bg-active');

    });

    //Спинер
    $(".spin-up").click(function() {
        var value = parseInt($(this).closest(".spinner").find("input").val());
        if (value != 99){
            $(this).closest(".spinner").find("input").val(value + 1);
        }
    });

    $(".spin-down").click(function() {
        var value = parseInt($(this).closest(".spinner").find("input").val());
        if (value != 1)	{
            $(this).closest(".spinner").find("input").val(value - 1);
        }
    });

});

