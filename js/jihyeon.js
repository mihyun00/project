var swiper = new Swiper('.sect4_swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$(document).scroll(function(){
  var scrT = $(this).scrollTop()
  // console.log(scrT)
  if(scrT>=5200){
    $('.sect5 h2').animate({'opacity':'1'},600)
    $('.sect5 .title_bg').animate({'opacity':'1'},600)
    $('.comm_content:nth-child(1)').delay(300).animate({'opacity':'1','margin-top':'0'},600)
    $('.comm_content:nth-child(2)').delay(600).animate({'opacity':'1','margin-top':'0'},600)
    $('.comm_content:nth-child(3)').delay(900).animate({'opacity':'1','margin-top':'0'},600)
    $('.comm_content:nth-child(4)').delay(1200).animate({'opacity':'1','margin-top':'0'},600)
    // $('.sect5 .more_btn').delay(1700).animate({'opacity':'1'},200)
  }
})
$('.preview div').click(function(){
  var idx = $(this).index()
  $('.main .content').stop().fadeOut()
  $('.main .content').eq(idx).stop().fadeIn()
  $('.preview div').removeClass('on')
  $(this).addClass('on')
})
$('.wave_text').on({
  mouseenter:function(){
    clearInterval(timer)
  },
  mouseleave:function(){
    timer=setInterval(move,40)
  }
})// 상동
function move(){
  mleft -= 1
  console.log(mleft)
  $('.wave_text').css({'marginLeft':mleft})

  if(mleft == -2453){
    $('.wave_text>span').first().appendTo('.wave_text')
  }else if(mleft <= -4904){
    mleft = 2452
  }
}