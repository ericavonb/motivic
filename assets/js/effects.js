$(document).ready(function() {
 	var nav = $('nav');
	var w_win = $(window).width();
	var logo_h = $('.logo').outerHeight();
	var n_pad =  (w_win - $('nav ul').outerWidth()) * .5;

    $('.main-content').height($(window).height() - 30);

    $('.inbox').height($(window).height() - 95);

    $(window).resize(function() {
	$('.main-content').height($(window).height() - 30);
	$('.inbox').height($(window).height() - 95);
    });
    

$('.emailPreview').dblclick(function() {
    this.trigger("click");
});
    
/*    if ($(window).scrollTop() == 0) {
	$('header').show();

	nav.css("padding-left", n_pad).css("top", logo_h) ;
	$('.up').hide();
    };*/
//

    var h_0 = 90;
    var h_1 = $('header').outerHeight();

    function navMove(h) {
        var w_n = n_pad * (1 - (h / h_1));
	var h_n = h_0 * (1 - (h / h_1));
	nav.animate({top: h_n, paddingLeft: w_n}, 1);
    };

 /*   $(window).scroll(function(event) {
	var h = $(window).scrollTop();
	if (h >= h_1) {
	    event.preventDefault();
	} else {
	    navMove(h);
	};
    });
*/

    $(window).one("scroll", function(event) {
	event.preventDefault;
	var w = $(window).scrollTop();
	if (w < h_1) {
	    goDown(1);
	};
    });

    function goDown(t) {
	    $(".logo").fadeOut(t / 3);
	    $('header').slideUp(t);
	    nav.animate({paddingLeft: 0, top: 0, marginLeft: 0}, t);
            $(".up").fadeIn(t);
	    $(".downButton").fadeOut((t / 3));
    };

    function goUp(t) {
	$('header').slideDown(t);
        $(".logo").delay(1000).fadeIn(t / 3);
	nav.animate({paddingLeft: n_pad, top: 170}, t);
        $(".up").fadeOut(t);
	$(".downButton").delay((2 * t / 3)).fadeIn((t /3));
    };

    $(".down").click(function() {goDown(1500);});


    $(".page").click(function(e) {
	e.preventDefault();
	$(".down").trigger('click');
    });

    $(".up").click(function() {goUp(1500)});






});


//	var h = Math.min($(window).scrollTop(), h_1);
