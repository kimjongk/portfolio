const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

visualTl=gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-visual',
        start:'0% 0%',
        end:'100% 0%',
        scrub:0,
    },
    ease:'none'
})
visualTl
.to('.sc-appeal .content .bg',{ height:'0%', },'a')
.to('.sc-visual .title',{ opacity:0,transform: 'translate(-50%, -30%)'},'a')
.to('.sc-visual .img-wrap img',{ yPercent:-10,scale:1.05},'a')



appealTl=gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-appeal',
        start:'0% 0%',
        end:'100% 100%',
        scrub:1,
    },
    ease:"none"
})
appealTTl=gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-appeal',
        start:'10% 100%',
        end:'80% 100%',
        scrub:1,
    },
    ease:"none"
})

appealTTl
  .to('.sc-appeal .content .text-area .text-box.text1 .title', { yPercent: -10, opacity: 0 }, 'b')
  .to('.sc-appeal .content .text-area .text-box.text2 .title', { yPercent: -10, opacity: 0 }, 'c')
  .to('.sc-appeal .content .text-area .text-box.text2 .desc', { yPercent: -40, opacity: 0 }, 'c')
  .to('.sc-appeal .content .text-area .text-box.text1 .desc', { yPercent: -40, opacity: 0 }, 'b')
  .to('.sc-appeal .content .text-area .text-box.text2 .icon', { yPercent: -90, opacity: 0 }, 'c')
  .to('.sc-appeal .content .text-area .text-box.text1 .icon', { yPercent: -90, opacity: 0 }, 'b');

appealTl
.to('.sc-appeal .content .img-area .img-box.img1',{ height:'0vh', },'b')
.to('.sc-appeal .content .img-area .img-box.img2',{ height:'0vh', },'c')
.to('.sc-appeal .content .img-area .img-box.img1 img',{scale:1.1, },'b')
.to('.sc-appeal .content .img-area .img-box.img2 img',{scale:1.1, },'b')
.to('.sc-appeal .content .img-area .img-box.img3 img',{scale:1.1, },'c')
.to('.sc-appeal .content .text-area .text-box.text2',{ height:'0vh', },'c')
.to('.sc-appeal .content .text-area .text-box.text1',{ height:'00vh', },'b')


$('.header .buy-btn, .container .side-buy').click(function(e){
    e.preventDefault();
    let buy = $('.header .buy-group .buy-flex');
    $(buy).addClass('on');
    $('body').addClass('hidden');
    $('html').addClass('lenis-stopped')
    lenis.stop();
})
/**
 * menu 카테고리 클릭시 해당장소로 이동
 */
$('.header .header-menu .menu-group .item a').click(function(e){
    e.preventDefault();
    var linkName = $(this).data('link');
    $('html, body').animate({
        scrollTop: $(linkName).offset().top
    },10);
    $(this).closest('.snb').removeClass('on');
    $('.header .buy-group .btn-box').removeClass('on');
    lenis.start();
});

/**
 * buy 버튼 close버튼 클릭시 화면이동
 */
$('.buy-flex .close-btn').click(function(){
    let buy = $('.buy-flex');
    $(buy).removeClass('on');
    $('body').removeClass('hidden');
    lenis.start();
})

/**
 * buy-flex 내부 list 토글
 */
$('.buy-flex .content-wrap .country-btn').click(function(){
    $(this).toggleClass('on').siblings().toggleClass('on');
})
$(document).click(function(e){
    if ($('.header .content-wrap').has(e.target).length === 0) {
        $('.header .content-wrap .list').removeClass('on');
        $('.buy-flex .content-wrap .country-btn').removeClass('on');
    }
})
/**
 * menu창 누를시 x표시로 전환 및 메뉴창 생성
 */
$('.header .buy-group .btn-box').click(function(){
    let menu = $('.menu-group .snb');
    if($(this).hasClass('on')){
        $(this).removeClass('on');
        $(menu).removeClass('on');
        lenis.start();
    }else{
        $(this).addClass('on');
        $(menu).addClass('on');
        lenis.stop();
    }

})


/**
 * review 스와이퍼
 */
const reviewSwiper = new Swiper ('.sc-review .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 400, 
    centeredSlides: true, 
    speed:500,
    navigation:{
        prevEl:'.prev-btn',
        nextEl:'.next-btn',
    }
  });

/**
 * detail 호버시 설명 슬라이드
 */

$('.sc-details .item .num').hover(function(){
    $(this).addClass('on').siblings().addClass('on');
},function(){
    $(this).removeClass('on').siblings().removeClass('on');
})

/**
 * side-buy 해당구역 진입시 등장
 * 
 */

const sideBuy = $('.side-buy a');
gsap.set($(sideBuy),{yPercent:100, opacity: 0, visibility: 'hidden'});

sideTl=gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-appeal',
        start:'100% 30%',
        end:'100% 0%',
        scrub:1,
    }
})

sideTl
.addLabel('c')
.to($(sideBuy),.5,{yPercent:0,opacity:1, visibility: 'visible'},'c')

// review 버튼 클릭 이벤트 핸들러를 등록

gsap.set('.sc-review .text-wrap .item', { yPercent: 100, opacity: 0 });
gsap.set('.sc-review .text-wrap .item.on', { yPercent: 0, opacity: 1 });


$('.sc-review .control-box button').click(function(){
    const imgName = $('.sc-review .swiper-slide.swiper-slide-active').data('img');

    if ($('.sc-review .text-wrap .item').hasClass('on')) {
        $('.sc-review .text-wrap .item.on').removeClass('on');
    }

    $(imgName).addClass('on');

    gsap.to('.sc-review .text-wrap .item', { yPercent: 100, opacity: 0 });
    gsap.to('.sc-review .text-wrap .item.on', { yPercent: 0, opacity: 1 })
});



// setup bottom-group 카드 설명 토글

gsap.set('.sc-setup .bottom-group .card-wrap .slide-text', { yPercent: 100, opacity: 0 });

$('.sc-setup .bottom-group .card-wrap').click(function (e) {
    e.preventDefault();
    
    const slideText = $(this).find('.slide-text');
    $(this).toggleClass('on');
    
    if ($(this).hasClass('on')) {
        gsap.to(slideText, { yPercent: 0, opacity: 1 });
    } else {
        gsap.to(slideText, { opacity: 0 ,onComplete:function(){
            gsap.set(slideText, { yPercent: 100 });
        }})
    }
});




$('.sc-withU .card-flex .card-box').each(function(i,el){


    gsap.to($(this).find('.item'), { 

        scrollTrigger: {
            trigger: el,
            start: '0% 0%',
            end: '100% 0%',
            scrub: 1,
        },
        scale:0.9,
        background:'#2f3f4c'
    });

})



gsap.set('.sc-subvisual .contents .img-wrap img',{scale:1.2})

gsap.to('.sc-subvisual .contents .img-wrap img',{
    scrollTrigger: {
        trigger:'.sc-subvisual',
        start: '0% 100%',
        end: '0% 0%',
        scrub: 1,
    },
    ease:'none',
    objectPosition: '0% 70%',
    scale:1,
})

gsap.set('.sc-subvisual .contents .img-wrap img',{objectPosition: '0% 70%',})
gsap.to('.sc-subvisual .contents .img-wrap img',{
    scrollTrigger: {
        trigger:'.sc-subvisual',
        start: '0% 0%',
        end: '100% 0%',
        scrub: 1,
    },
    ease:'none',
    objectPosition: '0% 0%',
})

gsap.to('.sc-subvisual .content .top-group .marqee',{
    scrollTrigger: {
        trigger:'.sc-subvisual',
        start: '0% 100%',
        end: '100% 0%',
        scrub: 1,
    },
    xPercent:-100,
})



gsap.set('.sc-effect .bottom-content .mid-flex .img-wrap', { yPercent: 40 });

gsap.to('.sc-effect .bottom-content .mid-flex .img-wrap', {
    scrollTrigger: {
        trigger: '.sc-effect .bottom-group',
        start: '0% 90%', 
        end: '100% 0%', 
        scrub: 1, 
    },
    yPercent: 5,
});

gsap.to('.sc-effect .caption-area',{
    scrollTrigger: {
        trigger:'.sc-effect .bottom-group',
        start: '100% 95%',
        end: '100% 0%',
        scrub: 1,
        pin:true,
    },
    yPercent:-100
})

gsap.to('.sc-effect .caption-area .img-wrap img',{
    scrollTrigger: {
        trigger:'.sc-effect .caption-area',
        start: '0% 95%',
        end: '100% 0%',
        scrub: 1,
    },
    yPercent:-50
})

gsap.to('.sc-using .bg-wrap .circle-slide .list',{
    scrollTrigger: {
        trigger:'.sc-using',
        start: '0% 0%',
        end: '100% 0%',
        scrub: 1,
    },
    transform: 'translate(-50%, -50%) rotate(-20deg)'
})
 
ani3 = gsap.timeline();

ScrollTrigger.create({
    animation: ani3,
    trigger: ".sc-subvisual",
    start: "top top",
    end: "100% 70%",
});


ani6 = gsap.timeline();

ScrollTrigger.create({
    animation: ani6,
    trigger: ".sc-setup",
    start: "top top",
    end: "100% 80%",
});

setupTl =gsap.timeline({
    scrollTrigger:{
        trigger:".sc-setup", 
        start:"0% 90%", 
        end:"100% 50%",
        scrub:1,
    }
});

setupTl
.addLabel('a')
.from(".sc-setup .left-title", {xPercent:-100},'a')
.from(".sc-setup .right-title", {xPercent:100},'a')
.from(".sc-setup .img-desc", {yPercent:80, opacity:0})
.to(".sc-setup .img-desc", {yPercent:0,opacity:1});


// /**
//  * 비디오 시퀀스
//  */
const vid1 = $('.sc-setup .img-wrap').find('video')[0];
ScrollTrigger.create({
    trigger: '.sc-setup',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 1,
    onEnter: function (e) {
        setInterval(function () {
            vid1.currentTime = e.progress.toFixed(3) * 5.5;
        }, 270);
    },
});

/**
 * sc-setup 카드랩 등장
 */
gsap.set('.sc-setup .bottom-group .card-flex', { yPercent: 200 });

gsap.to('.sc-setup .bottom-group .card-flex', {
    scrollTrigger: {
        trigger: '.sc-setup .bottom-group .card-wrap',
        start: '1615% 90%', 
        end: '100% 0%', 
        // markers: true, 
    },
    yPercent: 0,
});

/**
 * 비디오 클릭시 비디오 팝업창 생성
 */
$('.sc-video .play-box').click(function(){
    $(this).parent().siblings('.pop-video').addClass('on');
    $('body').addClass('hidden');
    $('.header, .side-buy').css({
        'visibility': 'hidden',
        'opacity': '0'
    });
    lenis.stop();
});

$('.sc-video .pop-video .video-wrapper .close').click(function(){
    // 비디오를 찾아서 currentTime을 0으로 설정하여 처음부터 재생
    let videoElement = $(this).closest('.pop-video').find('video')[0];
    if (videoElement) {
        videoElement.currentTime = 0;
    }
    
    $('.sc-video .pop-video').removeClass('on');
    $('.header, .side-buy').css({
        'visibility': 'visible',
        'opacity': '1'
    });
    lenis.start();
});



