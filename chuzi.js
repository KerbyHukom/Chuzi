$(window).scroll (function () {
  var div = $(this);
  if(div.scrollTop() >= 200)
       {
    //$('header.home-header.sticky-header.fxd').css('position', 'fixed');
    $('.home-header.sticky-header').css('background-color', 'white');
    $('.home-header.sticky-header').css('opacity', '0.98');
    $('.home-header.sticky-header').css('display', 'block');
    $('#test').css('color', 'black');
    //$('#logo').attr("src", 'http://www.chuzi.com/wp-content/uploads/2015/01/chuzi_plain.png');
  }
  else 
  {
    $('.home-header.sticky-header').css('display', 'none');
  }

});

  $(window).load(function(){
var div = $(this);
  if(div.scrollTop() >= 200)
       {
    //$('header.home-header.sticky-header.fxd').css('position', 'fixed');
    $('.home-header.sticky-header').css('background-color', 'white');
    $('.home-header.sticky-header').css('opacity', '0.98');
    $('.home-header.sticky-header').css('display', 'block');
    $('#test').css('color', 'black');
    //$('#logo').attr("src", 'http://www.chuzi.com/wp-content/uploads/2015/01/chuzi_plain.png');
  }
  else 
  {
    $('.home-header.sticky-header').css('display', 'none');
  }
        function fixFooter(){
            var windowHeight = $(window).height();
            var bodyHeight = $('body').height();
            var footerBottom = $('#footer').position().top + $('#footer').outerHeight(true);

            if(footerBottom < windowHeight){
                // slam the footer to the bottom
                $('#footer').css("position", "absolute");
                $('#footer').css("left", 0);
                $('#footer').css("right", 0);
                $('#footer').css("bottom", 0); 
            }
        }

        fixFooter();

        $(window).resize(function(){
            fixFooter();
        });

    });
$(function(e) {
  /* $( window ).resize(function() { 
  $('#navbar3').css('margin-top',$(document).height() - 
  ($('#section1').height() + $('.indexbottom').height()  ) -
  $('#navbar3').height());
  
  navbarHeight = $(document).height() - 
  ($('#section1').height() + $('.indexbottom').height()  ) -
  $('#navbar3').height();
  $('#navbar3').css('margin-top',navbarHeight);
  console.log($(document).height);
  }); */

// Window load event used just in case window height is dependant upon images


$("#ToggleNavScript").click(function() {
    $('.navbar-collapse').collapse('toggle');

});

    function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-triangle-bottom glyphicon-triangle-right');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

	(function ($, window, delay) {
  // http://jsfiddle.net/AndreasPizsa/NzvKC/
  var theTimer = 0;
  var theElement = null;
    var theLastPosition = {x:0,y:0};
  $('[data-toggle]')
    .closest('li')
    .on('mouseenter', function (inEvent) {
    if (theElement) theElement.removeClass('open');
    window.clearTimeout(theTimer);
    theElement = $(this);

    theTimer = window.setTimeout(function () {
      theElement.addClass('open');
    }, delay);
  })
    .on('mousemove', function (inEvent) {
        if(Math.abs(theLastPosition.x - inEvent.ScreenX) > 4 || 
           Math.abs(theLastPosition.y - inEvent.ScreenY) > 4)
        {
            theLastPosition.x = inEvent.ScreenX;
            theLastPosition.y = inEvent.ScreenY;
            return;
        }
        
    if (theElement.hasClass('open')) return;
    window.clearTimeout(theTimer);
    theTimer = window.setTimeout(function () {
      theElement.addClass('open');
    }, delay);
  })
    .on('mouseleave', function (inEvent) {
    window.clearTimeout(theTimer);
    theElement = $(this);
    theTimer = window.setTimeout(function () {
      theElement.removeClass('open');
    }, delay);
  });
})(jQuery, window, 200); // 200 is the delay in milliseconds



});


