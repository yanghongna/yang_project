define(["jquery"],function($){
	return function(){
		var $item = $(".item");	
		
		$item.on("mouseenter",function(){				
			$(this).find(".appear").stop().animate({
				top:40,
				opacity:'show'
			},500);			
			
		});
		
		$item.on("mouseleave",function(){
			$(this).find(".appear").stop().animate({
				top:60,
				opacity:'hide'
			},400)		
		});
		
		var $search = $(".search_input");
		var $searchHint = $(".search_hint");
		$search.on("click",function(){
			$searchHint.css({"display":"block"});
		});
		$search.on("blur",function(){
			$searchHint.css({"display":"none"});
		});
		
		//sidebar
		
		function back2top(){
			$(".backtop").click(function(){
				$("body").animate({scrollTop: 0},1000);
			})
		}
		back2top();			
		
		function scroll(){
			$(window).scroll(function(){
				var _scrolltop = $(this).scrollTop();
				var maxscroll = $("body").height()-$(".bottom_center").height()-$(".footer").height()
				var finalscroll = _scrolltop-maxscroll;
				if(_scrolltop>1200){
					$(".backtop").css({"display":"block"});
				}else{
					$(".backtop").css({"display":"none"});
				}
				
			})
		}
		scroll();
	
	
	
	
	
	}
	
	
})