/**
 * 최상단 광고배너 스와이퍼
 */
const headerSwiper = new Swiper ('.banner-box .swiper',{
    effect : 'fade',
    loop: true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    }
})

/**
 * 메인 스와이퍼
 */
const mainSwiper = new Swiper ('.sc-visual .swiper',{
    effect : 'fade',
    loop: true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },pagination:{
        el:'.pagination'
    }
})

/**
 * 제품 스와이퍼
 */
const productSwiper = new Swiper ('.sc-pdc .swiper',{
    slidesPerView:2.2,
    spaceBetween: 10,
    freeMode:true,
  });

/**
 * 메뉴창 클릭시 side-nav 오픈 / 배경 어둡게처리
 */
$('.header .btn-menu').click(function(e){
    e.preventDefault();
    $('.side-nav').addClass('on');
    $('body').addClass('hidden');
})

/**
 * gnb 메뉴에서 상단 X누르면 gnb 메뉴창 종료
 */
$('.side-nav .close-btn').click(function(e){
    e.preventDefault();
    $('.side-nav').removeClass('on');
    $('body').removeClass('hidden');
})

/**
 * gnb 메뉴에서 밖을 누르면 gnb 메뉴창 종료
 */
$(document).click(function(e){
    if ($('.header').has(e.target).length === 0) {
        $('.side-nav').removeClass('on');
        $('body').removeClass('hidden');
    }
})

/**
 * gnb 메뉴 리스트들 토글슬라이드
 */
$('.group-list .title-btn').click(function(){

    $(this).toggleClass('on').siblings('.list').slideToggle();

    // if($(this).siblings('.list').hasClass('on')){
    //     $(this).siblings('.list').removeClass('on')
    //     }else{
    //     $(this).siblings('.list').addClass('on');
    // }

    // if($(this).siblings('.list').hasClass('on')){
    //     $(this).siblings('.list').removeClass('on')
    //     }else{
    //         $('.group-list .list').removeClass('on')
    //         $(this).siblings('.list').addClass('on');
    // }
})

/**
 * 상단 서브메뉴 스크롤시 등장!
 */
$(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr > 0) {
        $('.header-inner').addClass('fixed');
    } else {
        $('.header-inner').removeClass('fixed');
        
    }
})
$(window).trigger('scroll');


/**
 * gnb 전체보기 버튼 클릭시 서브메뉴 등장
 */
$('#btnAll').click(function(){
    $('.gnb').toggleClass('on')
    $('.gnb .group-all').stop().slideToggle()
})

/**
 * 탭메뉴 클릭시 탭 변환!
 */
$('.sc-best .lnb a').click(function(e){
    e.preventDefault();

    tabName=$(this).data('tab');
    $(this).parent().addClass('on').siblings().removeClass('on')
    $(tabName).addClass('active').siblings().removeClass('active');
})

/**
 * 상단 서브메뉴 리스트 전체보기 버튼!
 */
// $('.bottom-flex .more-btn').click(function(){
//     $(this).siblings('.sub').slideToggle();
// })
 
// $(window).on('mousewheel',function(delta){
//     if(delta > 0){
//         $('.side-btn').fadeOut();
//     }else{
//         $('.wrapper .side-btn').fadeIn();
//     }
// })

/**
 * 애로우버튼 등장 및 사라지기(기존)
 */

// $(window).scroll(function(){
//     curr= $(this).scrollTop();
//     if(curr > 10){
//         $('.side-btn').addClass('show');
//     }else{
//         $('.side-btn').removeClass('show');
//     }
// })

// $(window).on("wheel", function (event){    
//     curr= $(this).scrollTop();
//     if (event.originalEvent.deltaY < 0 && curr > 10) {
//         $('.side-btn').addClass('show');
//         // wheel up
//     }
//     else {
//         $('.side-btn').removeClass('show');
//         // wheel down
//     }
//   });

// $('.a').click(function(){
    
// })
// $('.a').on({
//     click: function(){
//         // 클릭 이벤트 핸들러
//         // 원하는 동작을 여기에 작성합니다.
//     },
//     mouseenter: function(){
//         // 호버(마우스 오버) 이벤트 핸들러
//         // 원하는 동작을 여기에 작성합니다.
//     }
// });

let lastScroll=0;
$(window).scroll(function(){
    curr= $(this).scrollTop();
    if(curr > 0){
        if (curr > lastScroll) {
            $('.side-btn').removeClass('show');
        } else {
            $('.side-btn').addClass('show');
        }
    }else{
        $('.side-btn').removeClass('show');
    }
    lastScroll=curr;
})

$('.side-btn .arrow-btn').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0, behavior:"smooth"})
})