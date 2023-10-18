history.scrollRestoration = "manual"


const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

lenis.stop();

const varSwiper = new Swiper ('.sc-with .swiper',{
    slidesPerView: 1.1,
    spaceBetween: 10,
    freeMode: true,
    breakpoints: {
        
      768: {
        slidesPerView: 2.5,  //브라우저가 768보다 클 때
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3.5,  //브라우저가 1024보다 클 때
        spaceBetween: 50,
      },
    },
})

// /**
//  * 로딩시 대기화면 효과
//  */

$(document).ready(function() {
  let progress = $('.progress'); // progress 요소 선택
  let inputs = $(".progress-container").find("label");
  inputs.each(function(index) {
    let time = (inputs.length - index) * 100;
    $(this).css("-webkit-animation", "anim 3s " + time + "ms infinite ease-in-out");
    $(this).css("animation", "anim 3s " + time + "ms infinite ease-in-out");
    // $('body').css('overflow', 'hidden');
  });
  setTimeout(function() {
    progress.slideUp(500, function() {
      setTimeout(animateOnLoad, 500);
      // $('body').css('overflow', 'auto');
      lenis.start();
    });
  }, 3100); 
});

function animateOnLoad() {
  gsap.set('.sc-visual .content .top-group .desc span', { yPercent: 100 ,opacity: 0});
  gsap.to('.sc-visual .content .top-group .desc span', { yPercent: 0, opacity: 1 });
  gsap.set('.sc-visual .content .top-group .title span', {yPercent: 110,opacity: 0});
  gsap.to('.sc-visual .content .top-group .title span', {yPercent: 0,opacity: 1});
}

/**
 * header nav에 마우스 호버시 효과
*/
gsap.set('.header .nav-wrap .contact-box',{opacity:0});


$('.header .nav-wrap .contact-btn').hover(function(){
  gsap.to($(this),{ height: "250px",width: "200px",  borderRadius: '20px' });
  gsap.to('.header .nav-wrap .contact-box',{opacity:1});
},function(){
  gsap.to($(this),{ height: "40px",width: "100px", borderRadius: '50px'});
  gsap.to('.header .nav-wrap .contact-box',{opacity:0});
})


let lastScroll=0;
$(window).scroll(function(){
    let curr = $(this).scrollTop();
    let visualTop = $('.sc-visual').offset().top;

    if(curr > visualTop){

        if (curr > lastScroll) {
            $('.header').addClass('off');
        } else {
            $('.header').removeClass('off');
        }

    }else{
        $('.header').removeClass('off');
    }

    lastScroll = curr;
})

/**
 * 마우스 위치감지
 */
const mouse = $(".mouse");
$(document).mousemove(function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mouse.css("left", mouseX + 'px');
    mouse.css("top", mouseY + 'px');
});

/**
 * about me 텍스트 호버시 다른 텍스트 출연
 */
$('.sc-who .left-group .text').hover(
  function() {
    $(this).find('i').stop().animate({ opacity: 0 });
    $(this).siblings('.hide-text').addClass('on').css('color', 'rgba(255, 255, 255, 1)');
  },
  function() {
    $(this).find('i').stop().animate({ opacity: 1 });
    $(this).siblings('.hide-text').removeClass('on').css('color', '');
  }
);

/**
 * 마우스 포인터가 해당 태그에 호버시 포인터 변화
 */
  $('.footer .bottom-group').hover(function(){
  mouse.toggleClass('contact');
})

  $('.footer .bottom-group a').on('mouseenter', function() {
    $(this).css('cursor', 'none');
}).on('mouseleave', function() {
    $(this).css('cursor', 'default');
});

/**
 * 프로젝트 호버시 각 항목에 맞는 영상 출력
 */
$('.sc-project .text-wrap').hover(function(){
  var videoName = $(this).data('pro');
  $(videoName).addClass('on');
  $(this).find('i').addClass('on');
},function(){
  var videoList = $('.sc-project .video-list .item');
  videoList.removeClass('on');
  $(this).find('i').removeClass('on');
})

/**
 * 해당 위치 등장 시 
 */
$('.sc-project .text-wrap').hover(function(){
  var videoName = $(this).data('pro');
  $(videoName).addClass('on');
  $(this).find('i').addClass('on');
},function(){
  var videoList = $('.sc-project .video-list .item');
  videoList.removeClass('on');
  $(this).find('i').removeClass('on');
})
  
/**
 * with 항목 선택시 텍스트 및 이미지 연결/변경
 */
$('.sc-service .top-area .item').click(function(){
  var rightImg = $('.sc-service .right-group');
  var imgName = $(this).data('img');

  if($(this).hasClass('on')){
    // $(this).removeClass('on');
  } else {
    $('.sc-service .top-area .item').removeClass('on');
    $(this).addClass('on');
  }

  $(imgName).addClass('on').siblings().removeClass('on');
  rightImg.find(imgName).addClass('on').siblings().removeClass('on');
})

/**
 * footer work 버튼 누르면 프로젝트 란으로 이동
 */
$('.footer .btn-wrap .btn-work').click(function() {
  let projectTop = $('.sc-project').offset().top;
  let offset = -100; // 원하는 만큼의 추가 간격 (픽셀 단위)

  window.scrollTo({
    top: projectTop + offset, 
    behavior: 'smooth' 
  });
});
/**
 * footer purpose 버튼 누르면 프로젝트 란으로 이동
 */
$('.footer .btn-wrap .btn-purpo').click(function() {
  let serviceTop = $('.sc-service').offset().top;
  let offset = -100; // 원하는 만큼의 추가 간격 (픽셀 단위)

  window.scrollTo({
    top: serviceTop + offset, 
    behavior: 'smooth' 
  });
});

/**
 * 해당 구간 도착시 슬라이드 업 
 */
gsap.set('[data-up]',{
  opacity:0,
  yPercent:100,
})

$('[data-up]').each(function(i,el){
  start = $(this).data('up');
  startVal =(start)?start:"0% 100%";
  gsap.to($(this),{
      scrollTrigger:{
          trigger:$(this),
          start:startVal,
          end:"100% 0%",
          markers:true,
      },
      opacity:1,
      yPercent:0,
  })
})

/**
 * 해당 구간 도착시 line 가로 슬라이드
 */
gsap.set('.line',{
  opacity:0,
  width:0,
})

$('.line').each(function(i,el){
  gsap.to($(this),{
      scrollTrigger:{
          trigger:$(this),
          start: "-=150px 50%",
          end:"100% 0%",
          // markers:true,
      },
      opacity:1,
      width:'100%',
  })
})


serTl = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-service',
    start:'0% 100%',
    end:'100% 0%',
    scrub:2,
    // markers:true,
  }
})

serTl
.to('.sc-service .right-group .img-wrap img',{yPercent:-30});



