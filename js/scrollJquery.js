$(document).ready(function()
{
	$(".top_menu_right li").click(function(event) 
	{
		// event.preventDefault(); 

		var defaultAnchorOffset = 0;
		var offsetNavHeight = 25;

		var anchor = $(this).data('value');
		var anchorOffset = $("header.top_header").height();

		if (!anchorOffset)
		{
		   anchorOffset = defaultAnchorOffset; 
		}

		$('html,body').animate({ 
		   scrollTop: $('#'+anchor).offset().top - anchorOffset
		}, 500);        
   	});

	$('nav li').on('click', function(){
	    $('nav li.active').removeClass('active');
	    $(this).addClass('active');
	});

	$('.top_header img.navbar').on('click', function(){
		if ($(".top_header .top_menu_right").hasClass("opened"))
		{
			$('.top_header .top_menu_right').removeClass('opened');
			$('.top_header .top_menu_right').addClass('dnone');
		}
		else
		{
		    $('.top_header .top_menu_right').removeClass('dnone');
		    $('.top_header .top_menu_right').addClass('opened');
		}
	});

	$('.top_header .top_menu_right a').on('click', function(){
		$('.top_header .top_menu_right').removeClass('opened');
		$('.top_header .top_menu_right').addClass('dnone');
	});
	
});