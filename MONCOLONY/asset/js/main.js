const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})



history.scrollRestoration = "manual"

$('.snb .sub-btn').click(function(){
    $(this).addClass('off').parent().siblings().addClass('on');
    lenis.stop();
})

$('.snb .list-flex .close-btn').click(function(){
    $(this).parents('.list-flex').removeClass('on').siblings().find('.sub-btn').removeClass('off');
    lenis.start();
})

/**
 * work 버튼 클릭시 상태 변경 및 리스트 변경
 */
$('.sc-works .pc-works .department-group .btn').click(function(){
    if($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on').parent().siblings().find('.btn').removeClass('on');
    }
    let tabName = $(this).data('depart');
    $(tabName).addClass('on').find('p').addClass('on');
    $(tabName).siblings().removeClass('on');
});


/**
 * line scrollTrigger사용 width 변경
 */
gsap.set('.sc-clients .line, .sc-service .line', { width: 0 });

$('.line').each(function(i,el){
    gsap.to(el,3,{
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
        },
        width:'100%',
        ease: "power4.out",
    })
})


/**
 * commu scrollTrigger사용 width 변경
 */
gsap.set('.sc-commu .sidebg .leftbg', {width:'20vw'});
gsap.set('.sc-commu .sidebg .rightbg', {width:'20vw'});

sideBgTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-commu',
        start:"0% 90%",
        end:"50% 80%",
        scrub:0,
    },
})
sideBgTl
.addLabel('a')
.to('.sc-commu .sidebg .leftbg',{ width:'0vw', },'a')
.to('.sc-commu .sidebg .rightbg',{ width:'0vw', },'a')



/**
 * clients, service 우측 이미지 스크럽효과
 */

gsap.set('.sc-clients .text-group .img-wrap , .sc-service .text-group .img-wrap', { top:150 });

$('.text-group .img-wrap').each(function(i,el){
    gsap.to(el,{
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            scrub: 1,
        },
        top:-100,
    })
})


/**
 * 텍스트/이미지들 슬라이드
 */
gsap.set('[data-up]',{
    opacity:0,
    yPercent:100,
})
$('[data-up]').each(function(i,el){
    start = $(this).data('up');
    startVal =(start)?start:"0% 80%";
    gsap.to($(this),{
        scrollTrigger:{
            trigger:$(this),
            start:startVal,
            end:"100% 0%",
            // markers:true,
        },
        opacity:1,
        yPercent:0,
    })
})

/**
 * gnb헤더 스크롤시 등장/숨김
 */

let lastScroll = 0;
$(window).scroll(function() {
    let winHeight = $(this).height();
    let scrollTop = $(this).scrollTop(); 

    const gnb = $('.header .gnb');
    
    setTimeout(function() {
        if (scrollTop > lastScroll) {
            gnb.addClass('hide');
        } else {
            gnb.removeClass('hide');
        }
        lastScroll = scrollTop; 
    }, 400);

}); 


/**
 * mo-works 슬라이드 토글 리스트
 */
$('.sc-works .mo-works .item .btn').click(function(){
    let textBox = $('.sc-works .mo-works .item .text-box');
    if($(this).hasClass('on')){
        $(this).removeClass('on');
        $(this).siblings().slideUp();
    }else{
        $('.sc-works .mo-works .item .btn').removeClass('on');
        $(this).addClass('on');
        $('.sc-works .mo-works .item .text-box').slideUp();
        $(this).siblings().slideDown();
    }
});

/**
 * 세계시간 구하기
 */

// console.log('KST (한국 표준시):<br />',       getWorldTime(+9), '<br /><br />');
// console.log('PST (태평양 표준시):<br />',     getWorldTime(-8), '<br /><br />');
// console.log('PDT (태평양 표준시 DST):<br />', getWorldTime(-7), '<br /><br />');
// console.log('EST (뉴욕 시간):<br />',         getWorldTime(-5), '<br /><br />');
// console.log('EST (LA 시간):<br />',         getWorldTime(-7), '<br /><br />');
// console.log('EST (브라질 시간):<br />',         getWorldTime(+9), '<br /><br />');
// console.log('EDT (뉴욕 시간 DST):<br />',     getWorldTime(-4), '<br /><br />');
// console.log('CET (파리 시간):<br />',         getWorldTime(+1), '<br /><br />');
// console.log('CEST (파리 시간 DST):<br />',    getWorldTime(+2), '<br /><br />');
// console.log('CST (중국 표준시):<br />',       getWorldTime(+8), '<br /><br />');
// console.log('UTC (세계 표준시):<br />',       getWorldTime(0),  '<br /><br />');
// 

getWorldTime(-8,'.us-time')
getWorldTime(-3,'.br-time')
getWorldTime(0,'.uk-time')
getWorldTime(+8,'.ch-time')


function getWorldTime(tzOffset, frame) {
    var now = new Date();
    var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
    now.setTime(tz);
  
    var hours = now.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    var s =
      leadingZeros(hours, 2) + ':' +
      leadingZeros(now.getMinutes(), 2) + ' ' + ampm;
  
    $(frame).html(s);
  }
  
  function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
  
    if (n.length < digits) {
      for (var i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
  }
  
  /**
   * 1초마다 업데이트
   */
  setInterval(function () {
    var tzOffset = arguments[0]; // 필요한 값을 대체
    var frameSelector = arguments[1]; // 필요한 값을 대체
    var frameElement = document.querySelector(frameSelector);
    getWorldTime(tzOffset, frameElement);
  }.bind(null, -8, '.us-time'), 1000);
  
  setInterval(function () {
    var tzOffset = arguments[0]; // 필요한 값을 대체
    var frameSelector = arguments[1]; // 필요한 값을 대체
    var frameElement = document.querySelector(frameSelector);
    getWorldTime(tzOffset, frameElement);
  }.bind(null, -3, '.br-time'), 1000);
  
  setInterval(function () {
    var tzOffset = arguments[0]; // 필요한 값을 대체
    var frameSelector = arguments[1]; // 필요한 값을 대체
    var frameElement = document.querySelector(frameSelector);
    getWorldTime(tzOffset, frameElement);
  }.bind(null, 0, '.uk-time'), 1000);
  
  setInterval(function () {
    var tzOffset = arguments[0]; // 필요한 값을 대체
    var frameSelector = arguments[1]; // 필요한 값을 대체
    var frameElement = document.querySelector(frameSelector);
    getWorldTime(tzOffset, frameElement);
  }.bind(null, 8, '.ch-time'), 1000);

  
  
  