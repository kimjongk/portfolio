window.onload = function() {
    $('.sc-visual .title').addClass('on');
    $('.sc-visual .visual-bg').css({
        transform: 'scaleX(1.1) scaleY(1.1)'
    })
};

const solLeSwiper = new Swiper('.sc-solution .left-content .swiper', {
    slidesPerView: 1.6,
    spaceBetween : 10,
    navigation: {   // 버튼 사용자 지정
        nextEl: '.sc-solution .left-content .right-btn',
        prevEl: '.sc-solution .left-content .left-btn',
    },
    breakpoints: {
        1025: {
          slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
          },
      },
});
const solRiSwiper = new Swiper('.sc-solution .right-content .swiper', {
    slidesPerView: 1.6,
    spaceBetween : 10,
    navigation: {   // 버튼 사용자 지정
        nextEl: '.sc-solution .right-content .right-btn',
        prevEl: '.sc-solution .right-content .left-btn',
    },
    breakpoints: {
        1025: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
});

/**
 * header 언어선택
 */
$('.header .lang').click(function(){
    if($(this).hasClass('on')){
        $(this).removeClass('on');
        $(this).siblings().removeClass('on');
    }else{
        $(this).addClass('on');
        $(this).siblings().addClass('on');
    }
})

// /**
//  * header hover시 gnb 재정렬
//  */
$('.header-inner').hover(
    function(){
        let gnbItem = $('.gnb .item');
        let gnbLi = $('.gnb .sub-list');

        $(gnbItem).stop().animate({
            padding: '2vw 2.6vw'
        }, 'slow');

        $(gnbLi).stop().fadeIn(1000);
    },
    function(){
        let gnbItem = $('.gnb .item');
        let gnbLi = $('.gnb .sub-list');
        let hideLi = $('.gnb .sub-item .dep-list, .icon');

        
        $(gnbItem).stop().animate({
            padding: '1rem 1.2vw'
        }, 'slow');
        $(gnbLi).stop().hide();

        $(hideLi).removeClass('on');
    }
);

/**menu 버튼 클릭스 all-menu창 등장 */
$('.menu-btn').click(function(){
    let body = $('body');
    $('.all-menu, .close-btn').addClass('on');
    $('.gnb, .util-btn,.line').css({
        opacity: 0,
        visibility: 'hidden'
    });
    $('.header-inner').addClass('click');
    $('.finder').hide();
    $('#fp-nav').addClass('blind');
    $('body').css('overflow', 'hidden');
});

$('.close-btn').click(function(){
    let body = $('body');
    $('.all-menu, .close-btn').removeClass('on');
    $('.gnb, .util-btn,.line').css({
        opacity: 1,
        visibility: 'inherit'
    });
    $('.header-inner').removeClass('click');
    $('.finder').show();
    $('#fp-nav').removeClass('blind');
    $('body').css('overflow', 'auto');
});


$('.gnb .sub-item>.icon').click(function(e){
    e.preventDefault();

    if($(this).hasClass('on')){
        $(this).removeClass('on');
    }else{
        $(this).addClass('on');
        $(this).parent().siblings().find('.dep-list, .icon').removeClass('on');
        $(this).parents('.item').siblings().find('.dep-list, .icon').removeClass('on');
    }

    let depLi = $(this).siblings('.dep-list');
    if($(depLi).hasClass('on')){
        $(depLi).removeClass('on');
    }else{
        $(depLi).addClass('on');
    }
});



/**
 * fullpage.js 부분
 */
new fullpage('#fullpage', {
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    navigation: true,
    responsiveWidth: 1025,
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    autoHeight: false,

    afterRender: function () {
        var fpNav = document.querySelector('#fp-nav');

        // 앞에 추가
        if (fpNav) {
            fpNav.insertAdjacentHTML('afterbegin', '<div class="changeNum"><span>01</span></div>');
        }

        // 뒤에 추가
        if (fpNav) {
            fpNav.insertAdjacentHTML('beforeend', '<div class="fixNum"><span>06</span></div>');
        }
    },
    onLeave: function(origin, destination, direction){
        let currentIndex = destination.index + 1;

        updatePageIndex(currentIndex);

        // 현재 섹션이 마지막 섹션인 경우 #fp-nav 숨기기
        if (currentIndex === 7) { 
            $('#fp-nav, .header').hide();
            $('.sc-stage .up-btn').fadeIn(1000);
        } else {
            $('#fp-nav, .header').fadeIn();
            $('.sc-stage .up-btn').fadeOut();
        }
    }, 
    afterResponsive: function(isResponsive) {
        if (isResponsive) {
            $.fn.fullpage.setNavigation(false);
        } else {
            $.fn.fullpage.setNavigation(true);
        }
    }
});

// 페이지 인덱스를 업데이트하는 함수
function updatePageIndex(index) {
    var pageIndexElement = document.querySelector('#fp-nav .changeNum span');
    if (pageIndexElement) {
        pageIndexElement.textContent = ('0' + index).slice(-2); // 두 자리 숫자로 표시하도록 포맷팅
    }
}

// finder 다운로드 메뉴 슬라이드 버튼
$('.finder .left-area .dep1, .dep2').click(function(e){
    e.preventDefault();
    let tabName = $(this).data('tab');
    let def = $('.default');

    $(tabName).addClass('on').siblings().removeClass('on');
    $(def).hide();
}) 
  

/**
 * finder 슬라이드 및 백그라운드 어둡게
 */
$('.finder .top-btn').click(function(e){
    e.preventDefault();
    let finder = $('.finder');
    let body = $('body');

    if (finder.hasClass('on')) {
        body.removeClass('hidden');
        body.off('scroll.hidden touchmove.hidden mousewheel.hidden');
        finder.removeClass('on');
    } else {
        body.addClass('hidden');
        body.on('scroll.hidden touchmove.hidden mousewheel.hidden', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        finder.addClass('on');
    }
});


/**
 * fullpage.js를 사용한 상단 스크롤 무빙
 */
$('.up-btn').click(function(){
    fullpage_api.moveTo(1); // 1은 이동하고자 하는 섹션의 인덱스입니다.
});




// 미디어 쿼리 js적용
const mediaQueryString = '(max-width: 1024px)';
const mediaQueryList = window.matchMedia(mediaQueryString);

// 변경 감지 이벤트 등록
function handleMediaChange(mq) {
    const elements = $('.all-menu .top-group .item .sub-list .dep>a');
    let upBtn = $('.sc-stage .up-btn .up');
    let backBtn = $('.finder .right-area .back-btn');
    let hideWrap = $('.sc-diagnose .content-wrap .item .hide-wrap');

    if (mq.matches) {
        elements.on('click', function(e){
            e.preventDefault();
            $(this).siblings('.dep-list').stop().slideToggle();	
        });

        upBtn.click(function(){
            fullpage_api.moveTo(1);
        });

        backBtn.click(function(){
            $('.finder .right-area .list>.item').removeClass('on');
        });

        $('.finder .mo-btn-box .item.up').click(function(e){
            e.preventDefault()

            if($('.finder .content').hasClass('on')){
                $('.finder .content').removeClass('on');
                $('body').css('overflow', 'auto');
                $(this).removeClass('click');
            }else{
                $('.finder .content').addClass('on');
                $('body').css('overflow', 'hidden');
                $(this).addClass('click');
            }
        });

        $('.finder .content .left-area .item > .list .item a').click(function(e){
            e.preventDefault();
            
            $('.finder .content').css('overflow', 'hidden');
            $('body').css('overflow', 'hidden');
        });

        $('.finder .right-area .dep-item.mo-part .back-btn').click(function(e){
            e.preventDefault();
            
            $('.finder .content').css('overflow', 'auto');
        });
        
        $('.sc-diagnose .content-wrap .item .down-btn').click(function(){
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $(this).parent('.item').removeClass('on');
            }else{
                $(this).addClass('on');
                $(this).parent('.item').addClass('on');
            }
        })
    } else {
        elements.off('click');
    }
}

// 변경 감지 이벤트 리스너 추가
mediaQueryList.addListener(handleMediaChange);

// 초기 실행
handleMediaChange(mediaQueryList);



