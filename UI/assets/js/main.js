history.scrollRestoration = "manual"

gsap.set('[data-up]',{
    opacity:0,
    yPercent:100,
  })
  
  $('[data-up]').each(function(i,el){
    gsap.to($(this),{
        scrollTrigger:{
            trigger:$(this),
            start:"-100% 50%",
            end:"100% 0%",
            // markers:true,
        },
        opacity:1,
        yPercent:0,
    })
  })


gsap.set('.page1',{
    opacity:0,
    yPercent:100,
  })
  
window.onload = function() {
    gsap.to('.page1', {
      opacity: 1,
      yPercent: 0,
      ease: 'power2.inOut',
    });
  }