//sect3 커스텀 스크롤 
$(".sect3-slide").mCustomScrollbar({
  axis: "x", // vertical and horizontal scrollbar
  theme: "dark-thin"
})

//sect3 buootn 클릭하면 연도별 슬라이드 표출되며 버튼 색 변경
$('.year-btn button').click(function(){
  $('.year-btn button').removeClass('on')
  $(this).addClass('on')

  var Ye = $(this).index()
  $('.sect3-slide ul').hide()
  $('.sect3-slide ul').eq(Ye).show()
})


