$(document).on("ready", inicio);

function inicio () {
     $("img.lazy").lazyload({
        event : "scrollstop"
    });
    // Cierra el menu responsive al evento click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    $('.vr-logo-skills .nodejs').tooltip();
    $('.vr-logo-skills .angularjs').tooltip();
	$('.vr-logo-skills .mongodb').tooltip();
    fs();
	callprettyPhoto();
//    btn_hover_social();
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    var top = Math.round($(window).height()/100 * 35) - 80;

    $('.share-buttons-group').affix({
        offset: {
            top: top,
            bottom: 200
        }
    });
    maplace();
}
//function btn_hover_social() {
//    // interesante cambio - verificar por que no se hizo en css
//	$('.btn-default').hover(function(){
//			$(this).find('.vr-web-social-github').css("background-position","0 -32px");
//            $(this).find('.vr-web-social-twitter').css("background-position","-32px -32px");
//	},
//		function(){
//			$(this).find('.vr-web-social-github').css("background-position","0 0");
//            $(this).find('.vr-web-social-twitter').css("background-position","-32px 0");
//	});
//};
//jQuery is required to run this code


function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

function mapa_sin_maplace() {
    //Google Map Skin - Get more at http://snazzymaps.com/
    var misOpciones = {
        zoom: 7,
        center: new google.maps.LatLng(-0.2195114,-78.513751),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#9dbecb"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#96becd"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.business","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"color":"#ffc540"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#2d7488"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#9fdbea"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7da4b3"},{"saturation":"0"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#b5cfd9"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fbffcb"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#c9dbff"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#beddff"}]},{"featureType":"transit.station.bus","elementType":"geometry.fill","stylers":[{"color":"#c0dff4"}]},{"featureType":"transit.station.rail","elementType":"geometry.fill","stylers":[{"color":"#00708b"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#f8f8f8"}]}]
    };
    var map = new google.maps.Map(document.getElementById('map'), misOpciones);
     var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-0.2195114,-78.513751),
    map: map
    });
};

function maplace() {
    var data = [{
        lat: -1.75,
        lon: -78.535547,
        title: 'Quito',
        zoom: 6,
        show_infowindow: true
        //icon: 'http://img4.uploadhouse.com/fileuploads/21419/21419864b17f94926d92d1a55761b3f5506d7373.png',
        //animation: google.maps.Animation.DROP
    }];
    new Maplace({
        show_markers: false,
        locations: data,
        map_div: "#map",
        generate_controls: false,
        styles: {
          'Greyscale': [{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#98b9c5"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#9dbecb"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#96becd"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.business","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#fff7dc"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"color":"#ffc540"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#2d7488"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#9fdbea"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7da4b3"},{"saturation":"0"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#b5cfd9"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fbffcb"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#c9dbff"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#beddff"}]},{"featureType":"transit.station.bus","elementType":"geometry.fill","stylers":[{"color":"#c0dff4"}]},{"featureType":"transit.station.rail","elementType":"geometry.fill","stylers":[{"color":"#00708b"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#f8f8f8"}]}]
        },
        map_options: {
            disableDefaultUI: true,
            scrollwheel: false
        }
    }).Load();
};
//maplace


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
     if ($(".navbar").offset().top > 50)     {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
////////// Regresar para arriba //////////
$(function tt() {
	$(document).scroll(function() {
		if($(this).scrollTop() !== 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({
            scrollTop:0
        }, 800);
	});
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/////flexslider
function fs() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        slideshowSpeed: 4000,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
};

//PrettyPhoto
function callprettyPhoto() {
    //para el html validador
	$('.thumbnail a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	///* light_rounded / dark_rounded / light_square / dark_square / facebook */
	$(".thumbnail a[rel^='prettyPhoto']").prettyPhoto({
        allow_expand: false,
        theme: 'facebook',
        social_tools:false,
        deeplinking: false });
    $(".list-group a[data-rel]").each(
        function() {
            $(this).attr('rel', $(this).data('rel'));
        }
    );
    $(".list-group a[rel^='prettyPhoto']").prettyPhoto({
        allow_expand: false,
        theme: 'facebook',
        social_tools:false,
        deeplinking: false });
};
