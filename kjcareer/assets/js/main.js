const mainSlide = new Swiper('.sc-visual .swiper', {
    slidesPerView : '1', 
    spaceBetween : 5, 
    loopAdditionalSlides : 1, 
    autoplay : {  
      delay : 5000,
    },
  
    pagination : false, // pager 여부
    navigation: {   // 버튼 사용자 지정
        nextEl: '.sc-visual .next-btn',
        prevEl: '.sc-visual .prev-btn',
    },
})
const workSlide = new Swiper('.sc-work .swiper', {
    slidesPerView : '2', 
    spaceBetween : 20, 
    loopAdditionalSlides : 1,   
    pagination : false, // pager 여부
    navigation: {   // 버튼 사용자 지정
        nextEl: '.sc-work .next-btn',
        prevEl: '.sc-work .prev-btn',
    },
})
const newsSlide = new Swiper('.sc-news .swiper', {
    slidesPerView : '2', 
    spaceBetween : 20, 
    loopAdditionalSlides : 1,   
    pagination : false, // pager 여부
    navigation: {   // 버튼 사용자 지정
        nextEl: '.sc-news .next-btn',
        prevEl: '.sc-news .prev-btn',
    },
})

$('.header .util-area .menu-btn').click(function(){
    if($('body').hasClass('hidden')){
        $('body').removeClass('hidden');
    }else{
        $('body').addClass('hidden');
    }
    

    if ($('.all-menu').hasClass('on')) {
        $('.all-menu').removeClass('on');
        $('.header .logo a').removeClass('logo');
        $('.header .gnb, .util-area a').animate({opacity: 1}, 300, function() {
            $(this).css({visibility: 'visible'});
        });
    } else {
        $('.all-menu').addClass('on');
        $('.header .logo a').addClass('logo');
        $('.header .gnb, .util-area a').css({visibility: 'hidden'}).animate({opacity: 0}, 0);
    }
    
    if($(this).hasClass('click')){
        $(this).removeClass('click');
    }else{
        $(this).addClass('click');
    }
})

$('.header-inner .item').hover(function(){
    $(this).find('.dep-list').stop().slideDown();
},function(){
    $(this).find('.dep-list').stop().slideUp();
})

$('.all-menu .item a').click(function(e){
    e.preventDefault();
    $('.all-menu .item a').removeClass('active');
    $(this).addClass('active');

    $('.all-menu .item .dep-list').removeClass('on');
    $(this).siblings('.dep-list').addClass('on');
})

$('.sc-map .map-flex>.list>.item').click(function(){
    let dataTab = $(this).data('area');

    $('.sc-map .map-flex .item').removeClass('active');
    $(this).addClass('active');
    $('.sc-map .area-wrap').removeClass('on');
    $(dataTab).addClass('on');
})

$('.sc-map .area-wrap .detail-btn').click(function(){
    $('.detail-pop').removeClass('on');
    $(this).parent().siblings('.detail-pop').addClass('on');
})

$('.detail-pop .close-btn').click(function(){
    $('.detail-pop').removeClass('on');
})

$('.up-btn .up').click(function(){
    scrollTo({top:0, behavior:'smooth'})
})



gsap.set('[data-up]',{
    opacity:0,
    yPercent:-100,
})
$('[data-up]').each(function(i,el){
    gsap.to($(this),{
        scrollTrigger:{
            trigger:el,
            start:"0% 60%",
            end:"100% 0%",
            // markers:true,
        },
        opacity:1,
        yPercent:0,
    })
})

let lastScroll=0;
$(window).scroll(function(){
    curr= $(this).scrollTop();
    if(curr > 300){
        $('.up-btn').addClass('show');
    }else{
        $('.up-btn').removeClass('show');
    }
    lastScroll=curr;
})