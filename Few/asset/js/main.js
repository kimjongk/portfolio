/**
 * 마우스 포인터
 */
const mouse = $(".mouse");
$(document).mousemove(function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mouse.css("left", mouseX + 'px');
    mouse.css("top", mouseY + 'px');
});


$('.sc-video .cont-group').hover(function(){
  mouseHover.restart()
  $(".mouse").addClass('arrow')

},function(){
  mouseHover.reverse()
  $(".mouse").removeClass('arrow')
})


mouseHover=gsap.to('.mouse',0.3,{
  width: '8rem',
  height: '8rem',
  paused:true,
})

/**
 * 마우스 포인터가 각 태그에 호버시 포인터 변화
 */
 $('.menu-btn, .close').hover(function(){
  mouse.toggleClass('grow');
})
$('.sc-works .content').hover(function(){
  mouse.toggleClass('work');
})

/**
 * 새로고침 했을때 스크롤 맨 위로
 */
window.onload = function(){

  setTimeout(function(){
    scrollTo(0,0)
  },100);
}

/**
 * 파트너쉽 무한 스와이퍼
 */
const partnerSwiper = new Swiper('.sc-partner .swiper',{
  loop: true,
  slidesPerView: 7,
  autoplay: {
        delay: 0, //add
      },
      speed: 5000,
      loopAdditionalSlides: 1,
})

/**
 * 추천글 부분 스와이퍼
 */
const recommSwiper = new Swiper('.sc-recomm .swiper',{
    loop: true,
    autoplay: {
        delay: 5000, //add
      },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 500,
})



/**
 * 탑 메뉴 버튼 클릭시 효과
 */
$('.menu-btn').click(function(){
  $('.header-group .gnb a').toggleClass('off');
  $(this).toggleClass('active');
  if ($(this).hasClass('on')) {
    menuhideTl.restart()
  } else {
    menuTl.restart()
  }
  $(this).toggleClass('on');
})

/**
 * main 이미지 온로드시 
 */

 $(window).on('load',function(){
  mainTl.restart()
})

gsap.set('.sc-visual .bg-group > *' ,{opacity:0})
gsap.set('.sc-visual .visual-text .wrap > *',{ yPercent:100,rotate:10 })
gsap.set('.sc-visual .visual-btn',{ yPercent:200, opacity:0})

const mainTl = gsap.timeline({
  paused:true,
})

mainTl.to('.sc-visual .bg-group > *',{opacity:1, stagger:0.3})
mainTl.to('.sc-visual .visual-text .wrap > *',{ yPercent:0,rotate:0, stagger:0.1 })
mainTl.to('.sc-visual .visual-btn', 1,{ yPercent:0, opacity:1})


// 초기세팅

gsap.set('.snb .list .item a',{ yPercent:100,rotate:10 })
gsap.set('.side-nav .bg',{ xPercent:70 })
gsap.set('.snb .contact .wrap > *',{ yPercent:100 })
gsap.set('.side-nav .sidebg > *',{ opacity:0})


const menuTl = gsap.timeline({
  paused:true, //정지
})

menuTl
.to('.side-nav',{ visibility:'visible', opacity: 1 })
.to('.side-nav .bg',{ xPercent:-20 })
.to('.snb .list .item a',{ yPercent:0,rotate:0, stagger:0.1 })
.to('.snb .contact .wrap > *',{ yPercent:0, stagger:0.1 })
.to('.side-nav .sidebg > *',{opacity:1, stagger:1})



const menuhideTl = 
    gsap.to('.side-nav',1,{ opacity: 0 ,paused:true,
    onComplete:function(){
      gsap.set('.side-nav',{ visibility:'hidden',})
      gsap.set('.side-nav .sidebg > *',{opacity:0, stagger:0})
    }
  })

/**
 * 비디오 영상 링크 맞추기 
 */
let video = $('.video-wrap video');
let videoBlur = $('.video-wrap.blur video');

video.get(0).pause()
videoBlur.get(0).pause()

ScrollTrigger.create({
  trigger:".sc-video", //기준
  start:"0% 100%", //트리거기준 //윈도으기준 둘이 만나면 실행
  end:"100% 10%",

  onEnter:function(){ //도달시
    video.get(0).play()
    videoBlur.get(0).play()
  }
})

$('.sc-video .video-wrap').click(function() {
  const popVideo = $('.sc-video .pop-video');
  const video = popVideo.find('video').get(0);

  if (video.paused) {
    video.play();
  } else {
    video.currentTime = 0; // 재생 위치를 처음으로 되돌림
  }

  popVideo.addClass('on').addClass('hidden');
});

$('.sc-video .pop-video .close').click(function(){
  $('.sc-video .pop-video').removeClass('on');
})


/**
 * chat-btn 등장 및 스크롤 위치시 삭제
 */
$(document).ready(function () {
  // 페이지가 로드되면 실행될 코드
  $('.chat-btn a').addClass('btn-show');

  // 윈도우 스크롤 이벤트 리스너
  $(window).scroll(function () {
    let windowHeight = $(window).height();
    let scrollTop = $(this).scrollTop();
    let footerScroll = $('.footer').offset().top;

    if (footerScroll <= scrollTop + windowHeight) {
      $('.chat-btn a').removeClass('btn-show');
    }else{
      $('.chat-btn a').addClass('btn-show');
    }
  });


/**
 * team 텍스트 슬라이드
 */
gsap.set('.sc-team .wrap > *',{ yPercent:100 })
gsap.set('.sc-team .text-group .desc',{ xPercent:-100 }
)
weareTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-team", //기준
      start: "0% 60%", //트리거기준 //윈도우기준 둘이 만나면 실행
      end: "100% 10%",
  }
})

weareTl
  .to('.sc-team .wrap > *', {
    yPercent: 0,
    stagger: 0.1,
  })
  .to('.sc-team .text-group .desc', {
    xPercent: 0
  })

/**
 * marqee 마우스 반응형 스크럽
 */
 marqeeTl =gsap.timeline({
    scrollTrigger:{
      trigger:".marqee-wrapper", //기준
      start:"0% 100%", //트리거기준 //윈도으기준 둘이 만나면 실행
      end:"100% 0%",
      scrub:0,
    }
  });

  marqeeTl
  .addLabel('a')
  .to('.marqee-scrub.list1',{xPercent:-20},'a')
  .to('.marqee-scrub.list2',{xPercent:20},'a')


/**
 * recomm 텍스트 슬라이드
 */
gsap.set('.sc-recomm .wrap > *',{ yPercent:100 })

recommTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-recomm", //기준
      start: "0% 60%", //트리거기준 //윈도우기준 둘이 만나면 실행
      end: "100% 0%",
  }
})
recommTl
  .to('.sc-recomm .wrap > *', {
    yPercent: 0,
    stagger: 0.1,
  })


  $('.sc-works .list li').mousemove(function(e) {
    const circle = $(this).find('.circle');
    const x = e.offsetX - circle.width() / 2;
    const y = e.offsetY - circle.width() / 2;
  
    $(this).addClass('on').siblings().removeClass('on');
  
    gsap.to(circle, {
      x: x,
      y: y / 5,
    });
  });
  
  $('.sc-works .list li').mouseleave(function() {
    const circle = $(this).find('.circle');
    
    $(this).removeClass('on');
    
    gsap.to(circle, {
      x: 0,
      y: 0,
    });
  });

  gsap.set('.footer .header-box', { width: '100%' });

  const footTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: '0% 80%',
      end: '100% 0%%',
      scrub: 0,
    },
  });
  
  footTl.to('.footer .header-box',1,{
    width: '96%',
  });

$('.thumb-box').plate({
  inverse: true
});

}); 









