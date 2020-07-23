//---------- Blog Masonry JS
jQuery(document).ready(function(){
	
	var $container = jQuery('.posts')

    jQuery('.masonry').each(function(){
        
		var $cols = 3;
		var $element = $container;
        
		if($container.find('img').length == 0) $element = $('<img />');
        
		imagesLoaded($element,function(instance){
			$container.isotope({
			   itemSelector: '.post',
			   masonry: { columnWidth: $('.posts').width() / $cols }
			});
			setTimeout(function(){ $container.animate({'opacity': 1},1300); },200);
			jQuery(window).trigger('resize')
		});
		
		jQuery(window).resize(function(){
			if( jQuery('.no-sidebar').length == 1 ){
		   		var mediaQuerySize;
				var windowSize = jQuery(window).width();
				if(window.innerWidth >= 991){
					mediaQuerySize = 'three';
				} else if(window.innerWidth < 991 && window.innerWidth >= 479){
					mediaQuerySize = 'two';
				} else if(window.innerWidth < 479){
					mediaQuerySize = 'one';
				}
				switch (mediaQuerySize) {
					case 'three': $cols = 3;
					break;
                    case 'two': $cols = 2;
					break;
                    case 'one': $cols = 1;
					break;
				}
		   } else {
		   	   $cols = 3;
		   }
		});
		
		jQuery(window).smartresize(function(){
		   $container.isotope({
		      masonry: { columnWidth: $('.posts').width() / $cols}
		   });
		});
		
    });	
});




//---------- Sticky Header & FullScreen Home  JS
(function($) {
    
	"use strict";
    
    //---------- FullScreen Section JS
	function full_screen_section(){
		// jQuery('.fullscreen').each(function(){
		// 	var windowHeight = jQuery(window).height();
        //     var containerHeight = jQuery('.section-home .container').height();
        //     var containerPos = Math.ceil( (windowHeight / 2) - (containerHeight / 2) + 10 );
        //     jQuery('.fullscreen.section-home').css('height', windowHeight);
        //     jQuery('.fullscreen.section-home .container').css('margin-top', containerPos);
		// });
	};
    
    
    //---------- Sticky Header JS
    function sticky_header(){
        // jQuery(document).ready(function(){
        //     jQuery('#header').each(function() {
        //         var homeHeight = jQuery('#home').height() -1,
        //             pageHeaderHeight = jQuery('#page-header').height() -1;
        //         var headerHeight = jQuery('#header').height();
        //         jQuery(".header-2").each(function(){
        //             jQuery(this).after("<div id='hidden-header'></div>");
        //         });
        //         jQuery(window).scroll(function(){
        //             if (jQuery('#home').length == 1 ){
        //                 if (jQuery(window).scrollTop() > homeHeight) {
        //                     jQuery(".header-1").addClass("header-bg");
        //                     jQuery(".header-2").addClass("sticky");
        //                     jQuery(".header-2").each(function(){
        //                         jQuery("#hidden-header").css('height', headerHeight);
        //                     });
        //                 } else {
        //                     jQuery(".header-1").removeClass("header-bg");
        //                     jQuery(".header-2").removeClass("sticky");
        //                     jQuery(".header-2").each(function(){
        //                         jQuery("#hidden-header").css('height', 0);
        //                     });
        //                 }
        //             } else {
        //                 if (jQuery(window).scrollTop() > pageHeaderHeight) {
        //                     jQuery(".header-1").addClass("header-bg");
        //                     jQuery(".header-2").addClass("sticky");
        //                     jQuery(".header-2").each(function(){
        //                         jQuery("#hidden-header").css('height', headerHeight);
        //                     });
        //                 } else {
        //                     jQuery(".header-1").removeClass("header-bg");
        //                     jQuery(".header-2").removeClass("sticky");
        //                     jQuery(".header-2").each(function(){
        //                         jQuery("#hidden-header").css('height', 0);
        //                     });
        //                 }
        //             }
        //         });
        //     });
        // });
    };
    
    
    jQuery(document).ready(function(){
        full_screen_section();
        sticky_header();
    });

    jQuery(window).resize(function() {
		full_screen_section();
	});

    jQuery(window).load(function () {
        full_screen_section();
        sticky_header();
    });
    
    
})(jQuery);



jQuery(window).load(function() {
	jQuery(".loader-container").delay(600).fadeOut(600);
	jQuery("#pageloader").delay(1200).fadeOut(800);
});



jQuery(document).ready(function () {
    
    'use strict';
    
    //---- Nav Menu
    jQuery('.nav-menu').each(function(){
        jQuery(".nav-menu").onePageNav({
            scrollSpeed: 1200,
            currentClass: 'active',
            changeHash: true,
            easing: 'easeInOutExpo',
            filter: ':not(.external)'
        });
    });
    
    
    //---- Nav Menu Dropdown
    jQuery('.header-3').each(function(){
        jQuery('.nav-menu .drop').hover(function() {
          jQuery(this).find('.dropdown').slideDown( "slow" );
        });
        jQuery('.nav-menu .drop').mouseleave(function() {
          jQuery(this).find('.dropdown').slideUp( "slow" );
        });
    });
    
    
    //---------- Side Header JS
    jQuery('.header-3').each(function() {
        jQuery('#toggle-header').click(function(){
            if(jQuery('#toggle-header').hasClass('show-header')) {
                jQuery('.header-3').addClass('shown-header').animate({'left':0}, 800, "easeInOutExpo");
                jQuery('#toggle-header').removeClass('show-header').addClass('hide-header');
                jQuery('#toggle-header').find('i').removeClass('icon-menu2').addClass('icon-cancel3');
            }else if(jQuery('#toggle-header').hasClass('hide-header')) {
                jQuery('.header-3').removeClass('shown-header').animate({'left': '-235px'}, 800, "easeInOutExpo");
                jQuery('#toggle-header').removeClass('hide-header').addClass('show-header');
                jQuery('#toggle-header').find('i').removeClass('icon-cancel3').addClass('icon-menu2');
            }
        });
        jQuery('.header-3').bind( "clickoutside", function(){
            jQuery('.header-3').removeClass('shown-header').animate({'left': '-235px'}, 800, "easeInOutExpo");
            jQuery('#toggle-header').removeClass('hide-header').addClass('show-header');
            jQuery('#toggle-header').find('i').removeClass('icon-cancel3').addClass('icon-menu2');
        });
    });
    
    
	//---- Counter
    jQuery('.counter').each(function() {
        if(!jQuery(this).hasClass('appeared')){
            jQuery(this).addClass('appeared');
            jQuery(this).appear(function() {
                jQuery(this).css('opacity', '1');
                jQuery(this).find('.num-counter').absoluteCounter({
                    speed: 2000,
                    fadeInDelay: 1000
                });
            },{accX: 0, accY: -200});
        }
    });
    
    
    //---- CSS3 Animations
	jQuery('[data-animation]').each(function(){
        var $animationName = jQuery(this).attr('data-animation'),
            $animationDelay = "delay-"+jQuery(this).attr('data-animation-delay');
        jQuery(this).appear(function() {
            jQuery(this).addClass('animated').addClass($animationName);
            jQuery(this).addClass('animated').addClass($animationDelay);
        });
    });
    
    
    //---- Fit Video
    jQuery('.fitvid').each(function() {
        jQuery(this).fitVids();
    });
    
    
    //---- Fit Video
	jQuery('.re-tooltip').each(function() {
        jQuery('.re-tooltip').tooltip();
    });
    
    
    //---- Youtube Background
    jQuery('.yt-player-bg').each(function() {
        jQuery('.yt-player-bg').mb_YTPlayer();
    });
    
    
    //---- Youtube Background Controls
	jQuery('.video-controls').each(function(){
		jQuery('.video-controls a').on('click', function() {
			if(jQuery(this).hasClass('mute-video')){
				jQuery('.yt-player-bg').muteYTPVolume();
				jQuery(this).removeClass('mute-video');
				jQuery(this).addClass("volume-video");
				jQuery(this).find('i').removeClass('icon-volume-mute2').addClass('icon-volume-medium');
			} else if(jQuery(this).hasClass('volume-video')) {
				jQuery('.yt-player-bg').toggleVolume()
				jQuery(this).removeClass('volume-video');
				jQuery(this).addClass("mute-video");
				jQuery(this).find('i').removeClass('icon-volume-medium').addClass('icon-volume-mute2');
			} else if(jQuery(this).hasClass('play-video')) {
				jQuery('.yt-player-bg').playYTP();
				jQuery(this).removeClass('play-video');
				jQuery(this).addClass("pause-video");
				jQuery(this).find('i').removeClass('icon-play5').addClass('icon-pause4');
			} else if(jQuery(this).hasClass('pause-video')) {
				jQuery('.yt-player-bg').pauseYTP();
				jQuery(this).removeClass('pause-video');
				jQuery(this).addClass("play-video");
				jQuery(this).find('i').removeClass('icon-pause4').addClass('icon-play5');
			}
		});
	});
    
    
    //---- Scroll To Links
    jQuery('.scroll-to').on('click', function() {
        event.preventDefault();
        var target = jQuery(this).attr('href');
        jQuery('html, body').animate({ scrollTop: jQuery(target).offset().top }, 1000, "easeInOutExpo");
    });
    

    //---- Map Expander
	jQuery('#map').each(function(){
		jQuery('#map .section-overlay').on('click', function() {
			jQuery(this).animate({'opacity':0, 'visibility': 'hidden'}, 1000, "easeInOutExpo");
			jQuery('.hide-map').delay(600).animate({'opacity':1}, 1000, "easeInOutExpo");
			jQuery('#map').animate({'height':450}, 1000, "easeInOutExpo");
			jQuery('html, body').delay(600).animate({ scrollTop: jQuery("#map").offset().top-140}, 1000, "easeInOutExpo");
		});
		jQuery('#map .hide-map').on('click', function() {
			jQuery('#map .section-overlay').animate({'opacity':1, 'visibility': 'visible'}, 1000, "easeInOutExpo");
			jQuery('.hide-map').animate({'opacity':0}, 1000, "easeInOutExpo");
			jQuery('#map').delay(600).animate({'height':140}, 1000, "easeInOutExpo");
			jQuery('html, body').delay(600).animate({ scrollTop: jQuery("#map").offset().top}, 1000, "easeInOutExpo");
		});
	});
    
    
    //---- Twitter Feed
    jQuery(".twitter-feed").each(function(){
        jQuery(this).tweet({
            modpath:"twitter/",
            join_text:"auto",
            username:jQuery(".twitter-feed").attr('data-username'),
            count:3,
            template:"{time}{text}{reply_action}{retweet_action}{favorite_action}",
            loading_text:"loading tweets..."
        });
    });
    
    
    //---- Progress Bar Animation
	jQuery("[data-progress-animation]").each(function() {
		var $this = jQuery(this);
		$this.appear(function() {
			var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
			if(delay > 1) $this.css("animation-delay", delay + "ms");
			setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);
		}, {accX: 0, accY: -50});
	});
    
    
    //---- Home Text Slider
	jQuery(".text-slider").owlCarousel({
		navigation : false,
		pagination: false,
		slideSpeed : 900,
		singleItem: true,
		autoPlay: 3500,
		transitionStyle: "fade",
		mouseDrag: false,
		autoHeight: true,
	});
    
    
    //---- Home Slider BG
    jQuery('.home-slider-bg').each(function(){
		var owl = jQuery(this);
		owl.owlCarousel({
			autoPlay: 6000,
			navigation : false,
			pagination: false,
			singleItem: true,
			transitionStyle: "fade",
		});
	});
    
    
    //---- Home Slider Full
    jQuery('.home-slider').each(function(){
		var owl = jQuery(this);
		owl.owlCarousel({
			autoPlay: 6000,
            autoHeight: true,
			navigation : true,
			pagination: true,
			singleItem: true,
            mouseDrag: false,
            touchDrag: false,
			transitionStyle: "fade",
		});
	});
    
    
    //---- Testimonials Slider
    jQuery('.testimonials-carousel').each(function(){
		var owl = jQuery(this);
		owl.owlCarousel({
			stopOnHover: true,
			autoPlay: 6000,
			navigation : true,
			pagination: false,
			singleItem: true,
			transitionStyle: "fade",
			autoHeight: true,
		});
	});
    
    
    //---- Tweets Slider
    jQuery('.twitter-slider .tweet_list').each(function(){
		var owl = jQuery(this);
		owl.owlCarousel({
			stopOnHover: true,
			autoPlay: 6000,
			navigation : false,
			pagination: false,
			singleItem: true,
			transitionStyle: "fade",
			autoHeight: true,
		});
	});
    
    
    //---- Images Slider
    jQuery('.gallery-slider').each(function(){
		var owl = jQuery(this);
		owl.owlCarousel({
			stopOnHover: true,
			autoPlay: 6000,
			navigation : true,
			pagination: false,
			singleItem: true,
            lazyLoad : true,
			transitionStyle: "fade",
			autoHeight: true,
		});
	});
    
    
    //---- Custom Carousel
    jQuery('.custom-carousel').each(function(){
		var owl = jQuery(this),
			itemsNum = jQuery(this).attr('data-appeared-items'),
			sliderNavigation = jQuery(this).attr('data-navigation');
			
		if ( sliderNavigation == 'false' || sliderNavigation == '0' ) {
			var returnSliderNavigation = false
		}else {
			var returnSliderNavigation = true
		}
		if( itemsNum == 1) {
			var returndeskitemsNum = 1;
			var desksmallitemsNum = 1;
			var tabletitemsNum = 1;
		} 
		else if (itemsNum >= 2 && itemsNum < 4) {
			var deskitemsNum = itemsNum;
			var desksmallitemsNum = itemsNum - 1;
			var tabletitemsNum = itemsNum - 1;
		} 
		else if (itemsNum >= 4 && itemsNum < 8) {
			var deskitemsNum = itemsNum -1;
			var desksmallitemsNum = itemsNum - 2;
			var tabletitemsNum = itemsNum - 3;
		} 
		else {
			var deskitemsNum = itemsNum -3;
			var desksmallitemsNum = itemsNum - 6;
			var tabletitemsNum = itemsNum - 8;
		}
		owl.owlCarousel({
			stopOnHover: true,
			autoPlay: 6000,
			navigation : returnSliderNavigation,
			pagination: false,
			lazyLoad : true,
			items : itemsNum,
			itemsDesktop : [1000,deskitemsNum],
			itemsDesktopSmall : [900,desksmallitemsNum],
			itemsTablet: [600,tabletitemsNum],
			itemsMobile : [479,1],
			transitionStyle : "goDown",
			autoHeight: true,
		});
	});
    
    
    //---- Sliders Icons
    jQuery( "<i class='icon-twitter'></i>" ).insertBefore( ".twitter-slider .tweet_list" );
    jQuery( ".twitter-slider .tweet_list .tweet_reply" ).prepend( "<i class='icon-reply5'></i>" );
    jQuery( ".twitter-slider .tweet_list .tweet_retweet" ).prepend( "<i class='icon-retweet'></i>" );
    jQuery( ".twitter-slider .tweet_list .tweet_favorite" ).prepend( "<i class='icon-star8'></i>" );
    jQuery(".clients-carousel, .testimonials-carousel").find(".owl-prev").html("");
	jQuery(".clients-carousel, .testimonials-carousel").find(".owl-next").html("");
    jQuery(".gallery-slider").find(".owl-prev").html("<i class='icon-arrow-left11'></i>");
	jQuery(".gallery-slider").find(".owl-next").html("<i class='icon-arrow-right11'></i>");
    jQuery( ".widget-categories ul li" ).prepend( "<i class='icon-arrow-right11'></i>" );
    jQuery( ".masonry-layout .post-head q a" ).prepend( "<i class='icon-quote4'></i>" );
    jQuery( "blockquote" ).prepend( "<i class='icon-quote4'></i>" );
    jQuery( ".collapse-group .collapse-heading a" ).prepend( "<span class='toggle-icon'><i class='icon-plus9'></i></span>" );
		
});



//---- Home Parallax BG & Container
jQuery(document).ready(function(){
	function EasyPeasyParallax() {
		scrollPos = jQuery(this).scrollTop();
		jQuery('.section-home.parallax, #page-header.parallax-full').css({
            'background-position' : '50% ' + (-scrollPos/4)+"px"
		});
		jQuery('.section-home.parallax .container').css({
			'top': (scrollPos/4)+"px",
            'opacity': 1-(scrollPos/250)
		});
        jQuery('#page-header.parallax-full .container').css({
			'top': (scrollPos/4)+"px",
            'opacity': 1-(scrollPos/120)
		});
	}
	jQuery(document).ready(function(){
		jQuery(window).scroll(function() {
			EasyPeasyParallax();
		});
	});
});



//---- Parallax Backgrounds
(function($) {
    'use strict';
    jQuery(document).ready(function(){
        jQuery(window).bind('load', function () {
            parallaxInit();
        });
        function parallaxInit() {
            testMobile = isMobile.any();
            if (testMobile == null) {
                jQuery('.twitter-feed-section').parallax("50%", 0.4);
                jQuery('.clients-section').parallax("50%", 0.4);
                jQuery('.testimonials-section').parallax("50%", 0.4);
                jQuery('.facts-section').parallax("50%", 0.4);
                jQuery('#page-header.parallax-bg').parallax("50%", 0.4);
            }
        }	
        parallaxInit();	 
    });	
    var testMobile;
    var isMobile = {
        BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
        iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
        Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
        Android: function() { return navigator.userAgent.match(/Android/i); },
        any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    };
}(jQuery));




//---------- Google Map JS
var MapDiv = jQuery("#gmap"),
    mapAddress = jQuery('#gmap').data('address'),
    mapZoom = (jQuery('#gmap').data('map-zoom')) ? jQuery('#gmap').data('map-zoom') : 16;

var style1 = [];
var style2 = [ { "stylers": [ { "featureType": "all" }, { "saturation": -100 }, { "weight": 0.2 }, { "gamma": 1.2 }, {"lightness": 50 } ] } ];
var style3 = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}];
var style4 = [{"featureType":"poi","stylers":[{"visibility":"off"}]},{"stylers":[{"saturation":-70},{"lightness":37},{"gamma":1.15}]},{"elementType":"labels","stylers":[{"gamma":1},{"visibility":"on"}]},{"featureType":"road","stylers":[{"lightness":0},{"saturation":0},{"hue":"#ffffff"},{"gamma":0}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"lightness":50},{"saturation":0},{"hue":"#ffffff"}]},{"featureType":"administrative.province","stylers":[{"visibility":"on"},{"lightness":-50}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"lightness":20}]}];
var style5 = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]}];
var style6 = [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}];
var style7 = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#333739"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2ecc71"}]},{"featureType":"poi","stylers":[{"color":"#2ecc71"},{"lightness":-7}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"lightness":-28}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"visibility":"on"},{"lightness":-15}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"lightness":-18}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"lightness":-34}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#333739"},{"weight":0.8}]},{"featureType":"poi.park","stylers":[{"color":"#2ecc71"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#333739"},{"weight":0.3},{"lightness":10}]}];
var style8 = [{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}];
var style9 = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]}];
var style10 = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-77}]},{"featureType":"road"}];
var style11 = [ { "stylers": [ { "gamma": 1.58 }, { "saturation": 30 }, { "weight": 0.1 } ] } ];
var style12 = [{"stylers":[{"hue":"#FF9B06"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"visibility":"simplified"}]}];
	
jQuery(document).ready(function(){
    jQuery('#gmap').each(function(){
        MapDiv.initMap({
            center: mapAddress,
            markers : {
                marker_1: { 
                    position: mapAddress,
                    options : { icon: "images/icons/marker.png" },
                }
            },
            type: "roadmap",
            options: {
                    zoom: mapZoom,
                    zoomControl: false,
                    disableDoubleClickZoom: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    scrollwheel: false,
                    streetViewControl: false,
                    overviewMapControl: false,
                    overviewMapControlOptions: {
                    opened: true
            },
                styles: style3
            }
        });
     });
});