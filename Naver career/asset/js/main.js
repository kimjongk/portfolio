
/**
 * 메인 비쥬얼 스와이퍼
 * 
 */
const mainSwiper = new Swiper ('.sc-visual .swiper',{
    autoplay:{
        delay:5000,
    },
    loop :true,
    speed: 1000,
    simulateTouch: false, //마우스 드래그 막기
})

/**
 * people 스와이퍼
 * 
 */
const peopleSwiper = new Swiper ('.sc-cont.people .swiper' ,{
    slidesPerView: 1,
    spaceBetween: 30,
    navigation:{
        prevEl:'.prev-btn',
        nextEl:'.next-btn',
    },
    breakpoints:{
        768:{
            slidesPerView: 1.1,
        }
    },
});



/**
 * benefit 스와이퍼
 * 
 */
const benefitsSwiper = new Swiper('.sc-cont.benefits .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        prevEl: '.prev-btn',
        nextEl: '.next-btn',
    },
    breakpoints:{
        768:{
            slidesPerView: 2,
        },
        1025:{
            slidesPerView: 3,
        }
    }
    });


/**
 * gnb의 teea 리스트 호버시 등장
 * 
 *  */    
$('.header-inner .nav-item').hover(function(){

    if($(this).find('.sub-wrap').length){
        $('.header').addClass('on')
        $(this).find('.sub-wrap').addClass('on')
    }
},function(){
    $('.header').removeClass('on')
    $(this).find('.sub-wrap').removeClass('on')
})

$('.side-nav .teams').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on').siblings('.sub-wrap').toggleClass('on');
})

/**
 * 셀렉트 태그 클릭시 폰트 색상 변경
 */
$('.selectbox').change(function(){
    $(this).css('color','#000');
})
$('.selectbox option:disabled').siblings().css('color','#000');

/**
 * 미디어쿼리 - 사이드 매뉴 등장
 */
$('.header .btn-menu').click(function(){
    $(' .header .btn-menu, .header .side-nav').toggleClass('on')
})

/**
 * group-search2 누르면 팝업창 등장
 */
$('.sc-search .group-search2').click(function(){
    $(this).find('.pop-search').addClass('show');
})

/**
 * pop-search 닫는 버튼
 */
$('.pop-search .btn-close').click(function(){
    $('.pop-search').removeClass('show');
})

/**
 * 
 * group-search2의 메뉴 토글버튼
 */
$('.pop-search .item a').click(function(e){
    e.preventDefault();
    $(this).siblings('.sub').toggleClass('on');
})
$('.depth2 li>a').click(function(e){
    e.preventDefault();
    $(this).siblings('.depth3').toggleClass('on');
})



/**
 * 
 * footer 관련사이트 토글
 */
$('.relat-group').click(function(){
    $(this).find('.list').toggleClass('on').parent().toggleClass('on');
})


/**
 * 
 * 한영 버튼 등장 및 화살표 변환
 */
$('.util-list .lng-btn').click(function(){
    $(this).toggleClass('on').siblings('.lng-box').toggleClass('on');
})


/**
 * 체크박스 올 클리어 버튼
 */
$('.btn-clear').click(function () {
    $("input[type='checkbox']").prop("checked", false);
});

$('.depth-title label').click(function(){
    idVal=$(this).siblings('input').attr('id');
    if($(this).siblings('input').prop('checked') === true){
        $(`[data-parent="${idVal}"]`).find('input').prop('checked',false)
    }else{
        $(`[data-parent="${idVal}"]`).find('input').prop('checked',true)
    }
})

$('.depth3 .chk-wrap label').click(function(){
    parentName = $(this).parents('.depth2').data('parent');

    // 체크와동시에 개수를파악 0,1,2,
    // 체크와동시에 개수를파악 1,2,3,
    if($(this).siblings('input').is(':checked')){
        if($(`[data-parent="${parentName}"] input:checked`).length === 1){
            $(`#${parentName}`).prop('checked',false)
        }
    }
    
})


