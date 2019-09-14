$(document).ready(function() {
  buttonClick('#redBlack');
})

function buttonClick(string) {
  $(string).find(".button").click(function() {
    if (!$(this).hasClass('active')) {
      $(string + ' .active').removeClass('active');
      $(this).addClass('active');
    }
  })
}

function buttonClickPN(string) {
  $(string).find(".button").click(function() {
    if (!$(this).hasClass('active')) {
      $(string + ' .active').removeClass('active');
      $(string + ' .prev').removeClass('prev');
      $(string + ' .next').removeClass('next');
      $(this).addClass('active');
      $(this).prev().addClass('prev');
      $(this).next().addClass('next');
    }
  })
}