/**
 * js网页雪花效果jquery插件 
 */
(function($){
	
	$.fn.snow = function(opts){
	
			var defaults		= {
									Container:'body',
									minSize		: 10,		//雪花的最小尺寸
									maxSize		: 20,		//雪花的最大尺寸
									newOn		: 1000,		//雪花出现的频率
									content:'',
									documentHeight :$(document).height(),
									documentWidth :$(document).width(),
									flakeColor	: "#ff2727"
									
								},
				options			= $.extend({}, defaults, opts);
				
				var $flake 			= $('<div id="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html(options.content),
				documentHeight 	= options.documentHeight,
				documentWidth	= options.documentWidth;
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake.clone().appendTo(options.Container).css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							width: sizeFlake+'px',
							height: sizeFlake+'px',
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
					);
					
			}, options.newOn);
	
	};


	
})(jQuery);