$(function() {
	var $ = jQuery = jquery_3_1_0;

	$(".nav li").hover(
	function() {
		$(this).children("ul").stop().slideDown(350);
	}, 
	function() {
		$(this).children("ul").stop().slideUp(500);
	})
})

$(function() {
    var $ = jQuery = jquery_3_1_0;

	$('.nav a').hover(
	function() {
		$(this).stop().animate({color:"#000", backgroundColor:"#ace3cf"}, 350);
	}, 
	function() {
		$(this).stop().animate({color:"#fff", backgroundColor:"#1f4238"}, 500);
	})
})