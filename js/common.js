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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //pop-up
    $('.main-topSearch a, .searchBasket-basket').magnificPopup({
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
        $('.Lside').toggleClass('active');
        $('.wrapper').toggleClass('bg-active');

    });

    $('.account').click(function () {
        $(this).toggleClass('active');
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

    $('.changeTable a').click(function (event) {
        event.preventDefault();
        $(this).parents('tr').find('input').focus();
    });


    $('.profile-edit input').on('select',function (event) {
        console.log('hi');
        event.preventDefault();
    });

    $('.orders-info').click(function () {
        $(this).next().slideToggle();
        $(this).children('.orders-right').toggleClass('active');
    });


});

