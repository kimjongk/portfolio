    
    /**
     * 언어선택
     */

    $('#langBtn').click(function(){
        url=$('#langList').val();
        window.open(url)
    })

    const mainSlide = new Swiper('.main-group .swiper',{
        autoplay:{
            delay:1000,
            disableOnInteraction: false, //컨트롤후 실행유무
        },
        loop:true,
        pagination:{
            el: '.pagination',
            type: "fraction",
        },
        navigation:{
            prevEl: '.prev',
            nextEl: '.next',
        },
    })

    $('.btn-area .btn').click(function(){
        idx=$(this).data('idx');
        $(this).addClass('on').siblings().removeClass('on');
        mainSlide.slideToLoop(idx)
    })

    $('.main-group .swiper .btn.auto').click(function(){
   
        if ($(this).hasClass('on')) {
            mainSlide.autoplay.start();
        } else {
            mainSlide.autoplay.stop();
        }

        $(this).toggleClass('on')
    })

    mainSlide.on('slideChange',function(){
        idx=this.realIndex;
        if(idx >= 5){
            $('.btn-citizen').addClass('on').siblings().removeClass('on')
        }else{
            $('.btn-news').addClass('on').siblings().removeClass('on')
        }
    })


    /**
     * arrob-btn 윈도우 반응 등장
     */
    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if (curr >= 10) {
            $('.arrob-btn').addClass('show')
        } else {
            $('.arrob-btn').removeClass('show')
        }
    })


const bannerSlide = new Swiper('.sc-banner .swiper',{
    slidesPerView: 3,
    spaceBetween: 43,
    autoplay: {
        delay:1000,
        disableOnInteraction: false,
    },
    loop:true,
    pagination:{
        el: '.pagination',
        type: "fraction",
    },
    navigation:{
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
    },
})

    $('.sc-banner .swiper .btn-auto').click(function(){
    
        if ($(this).hasClass('on')) {
            bannerSlide.autoplay.start();
        } else {
            bannerSlide.autoplay.stop();
        }

        $(this).toggleClass('on')
    })

    $('.sc-related .link').click(function(){
        if ($(this).hasClass('on')) {
            $('.sc-related .link').removeClass('on');
            $('.sc-related .sub').stop().slideUp();

        } else {
            $('.sc-related .link').removeClass('on')
            $(this).addClass('on')

            $('.sc-related .sub').stop().slideUp();
            $(this).siblings('.sub').stop().slideDown();
        }
    })


    $('.sc-related .sub li:first-child').keydown(function(e){
        key = e.keyCode;
        if (key === 9 && e.shiftKey) { //시프트탭
            $('.sc-related .link').removeClass('on');
            $('.sc-related .sub').stop().slideUp();
        }
    })

    $('.sc-related .sub li:last-child').keydown(function(e){
        key = e.keyCode;
        if (key === 9 && !e.shiftKey) { //시프트탭
            $('.sc-related .link').removeClass('on');
            $('.sc-related .sub').stop().slideUp();
        }
    })

    $(document).click(function(e){
        if ($('.sc-related').has(e.target).length === 0) {
            $('.sc-related .link').removeClass('on');
            $('.sc-related .sub').stop().slideUp();
        }
    })


    $('.arrob-btn').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:"smooth"})
    })

