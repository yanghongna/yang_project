require(["js/config"],function(){
	require(["jquery","top"],function($,re){	
		$(function(){
			//加载头部
			$("#loadhead").load("http://localhost:8080/dev/html/top.html",function(){
				re();				
			});
						
			//轮播图
			//鼠标停在轮播图上，就停止轮播
			var ismouseover = false;
			$(".banner").mouseover(function(){
				ismouseover = true;
			})
			$(".banner").mouseleave(function(){
				ismouseover = false;
			})
			//3s切换一次banner图
			var $bannerlist = $("#bannerlist").children() ;		
			var $bannerDotted = $(".bannerDotted").children();
			var $bannerbtnleft = $(".btnleft");
			var $bannerbtnright = $(".btnright");
			var i = 0;
			var timer = setInterval(function(){		
				if(!ismouseover){
					changeBanner();			
				}
				
			},3000);
			
			function changeBanner(){
				i++;
				if(i==$bannerlist.length){
					i = 0;
				}				
				$bannerlist.eq(i).fadeIn(500).siblings().css({"display":"none"});	
				$bannerDotted.eq(i).addClass("bar").siblings().removeClass("bar");
				
			}
			//点切换图片
			$bannerDotted.click(function(){
				var index = $(this).index();
				$(this).addClass("bar").siblings().removeClass("bar");
				$bannerlist.eq(index).fadeIn(500).siblings().css({"display":"none"});	
				i = index;
			});
			
			
			//前后切换
			$bannerbtnleft.click(function(){					
				if(i==0){
					i=$bannerlist.length;
				}
				i--;
				$bannerlist.eq(i).fadeIn(500).siblings().css({"display":"none"});
				$bannerDotted.eq(i).addClass("bar").siblings().removeClass("bar");
				
			});
			$bannerbtnright.click(function(){
				i++;
				if(i==$bannerlist.length){
					i = 0;
				}				
				$bannerlist.eq(i).fadeIn(500).siblings().css({"display":"none"});
				$bannerDotted.eq(i).addClass("bar").siblings().removeClass("bar");
			});
			
			//商品页切换
			$(".shopsSlide_btn .btnl").click(function(){
				$(".shopsrollone")
				.css({"display":"none"})
				.animate({"left":-1210},300)
				.siblings()
				.css({"display":"block"})
				.animate({"left":0},300);
				$(this).css({
					"cursor":"not-allowed",
					"opacity":.5
				});
				$(this).siblings().css({
					"cursor":"pointer",
					"opacity":1
				})
			})
			$(".shopsSlide_btn .btnr").click(function(){
				$(".shopsrollone")
				.animate({"left":0},300)
				.css({"display":"block"});
				
				$(".shopsrolltwo")
				.animate({"left":1210},300)
				.css({"display":"none"});
				$(this).css({
					"cursor":"not-allowed",
					"opacity":.5
				});
				$(this).siblings().css({
					"cursor":"pointer",
					"opacity":1
				});
			})
			
			//加载底部
			$("#loadbottom").load("http://localhost:8080/dev/html/bottom.html");
		
			
		})
	})
})
