/**
 * 메인비쥬얼 스와이퍼
 */
const visualSwiper = new Swiper ('.sc-visual .swiper',{
    loop: true,
    autoplay: {
        delay:3000,
    },
    navigation:{
        prevEl:'.control-box .prev-btn',
        nextEl:'.control-box .next-btn',
    },
    pagination:{
        el:'.pagination',
    }
}) 

/**
 * sc-pairing 스와이퍼
 */
const pairSwiper = new Swiper ('.sc-pairing .swiper',{
    slidesPerView:"auto",
    spaceBetween: 4,
}) 

let a=0;
pairSwiper.on("slideChange",function(){
    const w=$('.sc-pairing .time-flex .swiper-slide a').outerWidth();
    if (pairSwiper.swipeDirection == 'next') {
        result = a+=(w*-1);
    } else {
        result = a+=w;
    }
    gsap.to('.live-clip',0.3,{x:result})
})

pairSwiper.on("touchMove",function(){
    gsap.set('.live-clip',{left:this.translate,
    })
})
pairSwiper.on("touchEnd",function(){
    gsap.to('.live-clip',0.3,{left:0})
})



/**
 * header 서치버튼시 및 클로즈 버튼 이벤트
 */
$('.header .search-btn').click(function(){
    $('.header .search-wrap').addClass('on');
    $('body').addClass('hidden');
})

$('.header .menu-btn').click(function(){
    $(this).parent().siblings('.snb').toggleClass('on');
    $('body').addClass('hidden');
})

$('.header .close-btn').click(function(){
    $(this).closest('.on').removeClass('on');
    $('body').removeClass('hidden');
})
$('.header .snb-bottom .item-wrap a').click(function(e){
    e.preventDefault();
    $(this).parent().siblings('.sub-box').addClass('on');
})
$('.header .sub-box .back-btn').click(function(){
    $(this).parents('.sub-box').removeClass('on');
})
$('.header .gnb .item').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')){
        $(this).removeClass('on');
    }else{
        $('.header .gnb .item').removeClass('on');
        $(this).addClass('on');
    }
})


let lastScroll=0;
$(window).scroll(function(){
    let curr = $(this).scrollTop();
    let visualTop = $('.sc-visual img').offset().top;

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


fetch('https://kimjongk.github.io/portfolio/tvN/asset/data/newData.json')
.then(res=>res.json())
.then(json=>{
    data=json.items;

    let html=`<div class="grid-sizer"></div>`;
    data.forEach(element => {
        html+=`<li class="grid-item">
            <a href="">
                <div class="img-wrap">
                    <img src="${element.thumb}" alt="${element.title}">
                </div>
                <div class="text-wrap">
                    <p class="memo">${element.memo}</p>
                    <p class="title">${element.title}</p>
                </div>
            </a>
        </li>`;
    });

    $('#newList').html(html);


    /**
     * sc-new 이미지 자동배열
     */
    $('.sc-new .grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    })

})


/**
 * 하단 이미지들 슬라이드 스와이퍼
 */
const currSwiper = new Swiper ('.sc-curr .swiper',{
    slidesPerView:"auto",
}) 
const clipSwiper = new Swiper ('.sc-clip .swiper',{
    slidesPerView:"auto",
}) 
const eventSwiper = new Swiper ('.sc-event .swiper',{
    slidesPerView:"auto",
}) 


/**
 * 푸터 링크 슬라이드 클릭
 */
$('.footer .link-flex .link-btn').click(function(){
    if($(this).siblings('.list').hasClass('on')){
        $(this).siblings('.list').removeClass('on');
    }else{
        $('.footer .link-group .list').removeClass('on')
        $(this).siblings('.list').addClass('on');
    }
})

$(document).click(function(e){
    if ($('.footer .link-group').has(e.target).length === 0) {
        $('.footer .link-group .list').removeClass('on');
    }
})