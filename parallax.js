var isMobile = false;
// Identify if visitor on mobile with lame sniffing to remove parallaxing title
if( navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/)
){
  isMobile = true;
}

var windowScroll;
var $parallax;
var $nav;
jQuery(function($){
  // Global vars
  $parallax = $('.parallax_image');
  $nav = $('.parallax_image');  

  // Apply Fittext to article titles to make it scale responsively in a smooth fashion
  //$artTitle.fitText(1, { minFontSize: '34px' });
  // Identify if visitor has a large enough viewport for parallaxing title
  function isLargeViewport() {
	return ($nav.width() >= 765);	
  }

  // If large viewport and not mobile, parallax the title
  if(!isMobile) {
    $(window).scroll(function(){
      if(isLargeViewport()){
        slidingTitle();
      }
    });
  }

  // Window gets large enough, need to recalc all parallaxing title values
  $(window).resize(function() {
    if(isLargeViewport()) {
      slidingTitle();
    }
  });

  // Functional parallaxing calculations
  function slidingTitle(){	
	windowScroll = $(this).scrollTop();	//Get scroll position of window
	$parallax.css({
      'background-position' : '0 '+(windowScroll*0.3)+"px"
    }); //Slowly parallax the background of .art-header
  };

});
