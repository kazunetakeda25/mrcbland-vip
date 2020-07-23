/**** Isotope Plugin ****/
jQuery(document).ready(function(){
    
    "use strict";
    
	var container = jQuery('#portfolio-grid');	
	container.isotope({
		animationEngine : 'best-available',
		animationOptions: {
			duration: 200,
			queue: false
		},
		layoutMode: 'fitRows'
	});	
	
	// filter items when filter link is clicked
	jQuery('#portfolio-filters a').click(function(){
		jQuery('#portfolio-filters a').removeClass('active');
		jQuery(this).addClass('active');
		var selector = jQuery(this).attr('data-filter');
		container.isotope({ filter: selector });
		loadProjects();		
		return false;
	});
	
	function splitColumns() { 
		var winWidth = jQuery(window).width(), 
			columnNumb = 1;
		if (winWidth > 1200) { columnNumb = 5; }
        else if (winWidth > 900) { columnNumb = 4; }
        else if (winWidth > 600) { columnNumb = 3; }
        else if (winWidth > 300) { columnNumb = 1; }
		return columnNumb;
	}		
	
	function setColumns() { 
		var winWidth = jQuery(window).width(), 
			columnNumb = splitColumns(), 
			postWidth = Math.floor(winWidth / columnNumb);
		container.find('.portolio-item').each(function () { 
			jQuery(this).css( { width : postWidth + 'px' });	
		});
	}
			
	function loadProjects() { 
		setColumns();
		container.isotope('reLayout');
	}			
	
	function loadIsotope(){
	   container.imagesLoaded(function () {
           loadProjects()
       });
	   loadProjects();
	}
    
    loadIsotope();
	
});





/****  Ajax Portfolio Content ****/
var $activeProj= null;
var obert=false;
jQuery(".project-expander").click(function() {
		obre(jQuery(this).attr('id'));
		$activeProj=jQuery(this);
});
jQuery("#").click(function() {
		jQuery(".project-window").slideUp("slow");
		obert=false;
});

obre('projects/portfolio-1.html',1);
		
function obre(quin, dummy){
$.ajax({
	url: quin,
	success: function(data) {					
		jQuery('.project-content').html(data);
		jQuery(".project-content").hide(0)
		jQuery('.project-window').hide(0)	
		projClose();
		projNav();
        fitIframes();
        projectSlider();
        projectGallery();
		
		
		if(dummy!=1){
            
				jQuery("html, body").animate({ scrollTop: jQuery('#portfolio-filters').offset().top - 10 }, 1200, "easeInOutExpo", function(){
					jQuery('.project-window').show(0);
					jQuery(".project-window").slideDown(800, "easeInOutExpo", function() {
						jQuery(".project-content").slideDown(800, "easeInOutExpo");
					});				
				});
		}
	}
});
}


function projClose(){
	jQuery(".btn-close").click(function() {
		jQuery(".project-window").slideUp(800, "easeInOutExpo");
		jQuery("html, body").animate({ scrollTop: jQuery('#register').offset().top }, 1200, "easeInOutExpo");
		obert=false;
	});
}


function nxtNav(){
	if($activeProj.next().hasClass('final-nav')){
		$activeProj=jQuery(jQuery('.start-nav').next());
	}else{
		$activeProj=jQuery($activeProj.next());
	}
	if($activeProj.hasClass('isotope-hidden')){
		nxtNav();
	}else{
		obre($activeProj.attr('id'));
	}
}


function prvNav(){
	if($activeProj.prev().hasClass('start-nav')){
		$activeProj=jQuery(jQuery('.final-nav').prev());
	}else{
		$activeProj=jQuery($activeProj.prev());
	}

	if($activeProj.hasClass('isotope-hidden')){
		PrvNav();
	}else{
		obre($activeProj.attr('id'));
	}
}


function projNav(){
	jQuery('.btn-next').click(function() {
		nxtNav();
		jQuery("html, body").animate({ scrollTop: jQuery('#register').offset().top }, 1200, "easeInOutExpo");
	});
	jQuery('.btn-prev').click(function() {
		prvNav();
		jQuery("html, body").animate({ scrollTop: jQuery('#register').offset().top }, 1200, "easeInOutExpo");
	});
}


function fitIframes(){
    jQuery('.fitvid').each(function() {
        jQuery(this).fitVids();
    });
}


function projectSlider(){
    jQuery('.project-slider').each(function(){
        var owl = jQuery(this);
        owl.owlCarousel({
            slideSpeed : 800,
            stopOnHover: true,
            autoPlay: 3500,
            navigation : false,
            pagination: true,
            lazyLoad : true,
            singleItem: true,
            autoHeight : true,
            transitionStyle : "fadeUp",
        });
    });
}


function projectGallery(){
    jQuery('.project-gallery').each(function(){
        var sync1 = jQuery(".gallery-top"),
            sync2 = jQuery(".gallery-bottom");
        
        sync1.owlCarousel({
            singleItem: true,
            slideSpeed: 800,
            navigation: false,
            pagination: false,
            lazyLoad : true,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
            transitionStyle: "fadeUp",
        });
        
        sync2.owlCarousel({
            items: 6,
            itemsDesktop: [1199,6],
            itemsDesktopSmall: [979,5],
            itemsTablet: [768,4],
            itemsMobile: [479,3],
            navigation: false,
            pagination: false,
            lazyLoad : true,
            responsiveRefreshRate: 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("active");
            }
        });
        
        function syncPosition(el){
            var current = this.currentItem;
            jQuery(".gallery-bottom")
            .find(".owl-item")
            .removeClass("active")
            .eq(current)
            .addClass("active")
            if(jQuery(".gallery-bottom").data("owlCarousel") !== undefined){
                center(current)
            }
        }
        
        jQuery(".gallery-bottom").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = jQuery(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });
        
        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }
            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }
        }
    });
}