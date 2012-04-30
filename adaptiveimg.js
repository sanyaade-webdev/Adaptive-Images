/**
 * Adaptive Img JS
 * @author James Campbell
 * @version 1.0
 * Modified from Alexander Farkas's Link Media Query Plugin 
 */
(function($){
    $.arrayInString = function(str, arr){
        var ret = -1;
        $.each(arr, function(i, item){
			if (str.indexOf(item) != -1) {
                ret = i;
                return false;
            }
        });
        return ret;
    };
    $.enableMediaQuery = (function(){
        var imgs = [], imageLinks, date = new Date().getTime();
        function parseMedia(link){
            var medias = link.getAttribute('media'), 
				pMin = /\(\s*min-width\s*:\s*(\d+)px\s*\)/, 
				pMax = /\(\s*max-width\s*:\s*(\d+)px\s*\)/, 
				resMin, 
				resMax, 
				supportedMedia = ['handheld', 'all', 'screen', 'projection', 'tty', 'tv', 'print'], 
				curMedia, 
	            mediaString = [];
	            medias = (!medias) ? ['all'] : medias.split(',');
			
            for (var i = 0, len = medias.length; i < len; i++) {
				curMedia = $.arrayInString(medias[i], supportedMedia);
				
                if (curMedia != -1) {
					
                    curMedia = supportedMedia[curMedia];
                    if (!resMin) {
                        resMin = pMin.exec(medias[i]);
                        if (resMin) {
                            resMin = parseInt(resMin[1], 10);
                        }
                    }
                    if (!resMax) {
                        resMax = pMax.exec(medias[i]);
                        if (resMax) {
                            resMax = parseInt(resMax[1], 10);
                        }
                    }
                    mediaString.push(curMedia);
                }
            }
			if (resMin || resMax) {
				imgs.push({
					obj: link,
					min: resMin,
					max: resMax,
					medium: mediaString.join(','),
					used: false
				});
			}
        }
        return {
            init: function(){
                if (!imageLinks) {
					var resizeTimer;
                    imageLinks = $("img\\:adaptive").add("source").each(function(){
                        parseMedia(this);
                    });
                    $.enableMediaQuery.adjust();
                    $(window).bind('resize.mediaQueries', function(){
						clearTimeout(resizeTimer);
						resizeTimer = setTimeout( $.enableMediaQuery.adjust , 29);
					});
                }
            },
            adjust: function(){
                var width 		= $(window).width(),
					shouldUse,
					targetForNewImage,
					src,
					n,
					targetImage,
					i, len
				;
				
                for (i = 0, len = imgs.length; i < len; i++) {
					shouldUse = !imgs[i].obj.disabled && ((!(imgs[i].min && imgs[i].min > width) && !(imgs[i].max && imgs[i].max < width)) || (!imgs[i].max && !imgs[i].min));
                    if ( shouldUse ) {
                        n = imgs[i].obj;
                        src = $(n).attr("src");
                        if (n.tagName.toUpperCase() == "IMG:ADAPTIVE"){
                        	targetForNewImage = $(n);
                        } else if (n.tagName.toUpperCase() == "SOURCE"){
                        	targetForNewImage = $(n).parent();
                        }
                        targetImage = targetForNewImage.find("img");
						if (targetImage.attr("src") != src){
							targetImage.remove();
							targetForNewImage.append("<img src = '" + src + "'/>");
						}
                    }
                }
            }
        };
    })();
    $(function(){
        $.enableMediaQuery.init();
    });
})(jQuery);
