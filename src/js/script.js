$(document).ready(function(){
    $('.carousel__inner').slick({
        // infinite: true,
        // slidesToShow: 2,
        // slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next.png" alt=""></button>'
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eg(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eg(i).toggleClass('catalog-item__list_active')
        })
    });
    $('.catalog-item__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eg(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eg(i).toggleClass('catalog-item__list_active')
        })
    });
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn()
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut()
    });
    $('.btn_mini').on('click', function () {
        $('.overlay, #order')
    });
    $(function(){
        $("#phone").mask("888(999) 999-999");
    });
    $(window).scroll(function () {
        if($(this).scrollTop() > 1000){
         $('.pageup').fadeIn()
        }else
            $('.pageup').fadeOut()
    })
});







// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// });