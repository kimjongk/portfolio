history.scrollRestoration = "manual"

const packSwiper = new Swiper ('.sc-package .swiper',{
    slidesPerView: 3.5,
    spaceBetween: 10,
    navigation:{
        prevEl:'.prev-btn',
        nextEl:'.next-btn',
    }
})

const vibration = (target) => {
    $(target).addClass("vibration");
  
    setTimeout(function() {
      $(target).removeClass("vibration");
    }, 400);
  }


  marqeeTl =gsap.timeline({
    scrollTrigger:{
      trigger:".sc-visual", //기준
      start:"0% 100%", //트리거기준 //윈도으기준 둘이 만나면 실행
      end:"100% 0%",
      scrub:0,
      // markers:true, // 표시자
    }
  });

  marqeeTl
  .to('.sc-visual .marqee .list',{xPercent:-100})

$('.sc-page .bottom-group .content .img-wrap').hover(function(){
  $(this).siblings('.small-box').addClass('on');
},function(){
  $(this).siblings('.small-box').removeClass('on');
})

  bannerTl =gsap.timeline({
    scrollTrigger:{
      trigger:".sc-banner", //기준
      start:"0% 0%", //트리거기준 //윈도으기준 둘이 만나면 실행
      end:"100% 0%",
      scrub:0,
      // markers:true,
    }
  });
  bannerTl
  .to('.sc-banner .bottom-group .list', { transform: 'translate(-50%, -50%) rotate(29deg)' });
  


  Draggable.create(".sticker, .svg-sticker", {type:"x,y", edgeResistance:0.65, bounds:".container", inertia:true});


  $('.up-btn').click(function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // 'smooth' 옵션을 추가하여 부드럽게 스크롤합니다.
    });
});

gsap.set('.up-btn', {opacity: 0 });

ScrollTrigger.create({
  trigger: '.sc-visual',
  start: "50% 0%", // 수정된 스타트 값
  // markers: true,
  onEnter: () => {
    gsap.to('.up-btn', { opacity: 1 });
  },
  onLeaveBack: () => {
    gsap.to('.up-btn', { opacity: 0 });
  },
});

$('.sc-ui .img-wrap').mousemove(function (e) {
  const width = $(this).outerWidth() / 2;
  const x = (e.clientX - $(this).offset().left - width) / 5; // 분모를 10으로 변경
  gsap.to('.sc-ui .img-wrap img', { x: x });
});



