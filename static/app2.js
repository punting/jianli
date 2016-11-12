/**
 * Created by xiejinjun on 16-11-11.
 * souvenir book ver1.0.1.
 * @description main module for app.
 */

 WeixinApi.ready(function(Api) {
    var linkUrl = window.location.href;
    // 微信分享的数据
    var data = {"imgUrl":"web-1.png","link": linkUrl,"title":"谢进军","desc":"个人简历"},
        data2 = {"imgUrl":"web-1.png","link": linkUrl,"title":"谢进军","desc":"个人简历"};
    
    // 分享到朋友圈
    var wxCallbacks = {
                // 分享操作开始之前
                ready : function() {

                },
                // 分享被用户自动取消
                cancel : function(resp) {
                        
                },
                // 分享失败了
                fail : function(resp) {
                        
                },
                // 分享成功
                confirm : function(resp) {
                        location.href = linkUrl;
                },
                // 整个分享过程结束
                all : function(resp) {
                        
                }
    };
    // 分享给朋友
    var wxCallbacks2 = {
                // 分享操作开始之前
                ready : function() {

                },
                // 分享被用户自动取消
                cancel : function(resp) {
                        
                },
                // 分享失败了
                fail : function(resp) {
                        
                },
                // 分享成功
                confirm : function(resp) {
                        
                },
                // 整个分享过程结束
                all : function(resp) {
                        
                }
    };
    // 分享到微博
    var wxCallbacks3 = {
                // 分享操作开始之前
                ready : function() {

                },
                // 分享被用户自动取消
                cancel : function(resp) {
                        
                },
                // 分享失败了
                fail : function(resp) {
                        
                },
                // 分享成功
                confirm : function(resp) {
                        
                },
                // 整个分享过程结束
                all : function(resp) {
                        
                }
    };
    Api.shareToTimeline(data2, wxCallbacks);
    Api.shareToFriend(data, wxCallbacks2);
    Api.shareToWeibo(data, wxCallbacks3);
    Api.showOptionMenu();
});

window.typer = null;
Util = {};
Util.random = function(min, max) {//生成制定区间的随机数
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};
Util.shuffle = function(obj) {//打乱数字
    var length = obj.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = this.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = obj[index];
    }
    return shuffled;
};
var ua = navigator.userAgent.toLowerCase();
function isQQorWeChat(){//微信浏览器或qq浏览器
if(/micromessenger/.test(ua) || /qq\//.test(ua)){
	return true;
}
	return false;
}
function openApp(){
	var ifr = document.createElement('iframe');
    ifr.src = '';
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
    setTimeout(function(){
    	document.body.removeChild(ifr);
    },3000);
}
$(function(){
	var flyUpInterval = null;
	var mp3;
	var hasTransiUp = false;
	var BG_MUSIC_URL = "static/redAlert.mp3";//"http://aliimg.changba.com/competition/79dbbdc2ba91857e4844ea04deed9933.mp3";
	// var BG_MUSIC_URL = "http://aliimg.changba.com/competition/00ad9de82ab409d166ba7d5017090932.mp3";//"http://aliimg.changba.com/competition/79dbbdc2ba91857e4844ea04deed9933.mp3";
	if(window.innerHeight < 480){
		$("body").css("zoom",0.85);
	}
	//首页文字打字效果
	App = {
	    PAGE_INDEX:0,
		init:function(){
			//纵性屏幕滑动
			var self = this;
			_swiper = $("#swiper").swiper({
				mode:"vertical",
				loop: false,
				noSwiping:true,
				noSwipingNext:true,
				noSwipingPrev:true,
				scrollContainer:false,
				momentumBounceRatio:2,
				paginaClickable:true,
				onSwiperCreated:function(){
					var se = $("#swiper .swiper-wrapper>.swiper-slide").eq(0);
					if($(".page-hdr", se).length > 0){
						$(".page-hdr", se).addClass("show");
					}
					var isErr = $("#loading .err-msg").text();
					if(isErr == ""){
						$("#loading").hide(300);	
					}
					setTimeout(function(){
						if(mp3 && mp3.play instanceof Function){
							mp3.pause();
							mp3.play();
						}
					},1000);
				},
			    onSlideChangeStart:function(){
			    	if( self.PAGE_INDEX != _swiper.activeIndex ){
						$(".arrow-cont").hide();
						self.PAGE_INDEX = _swiper.activeIndex;
						/*if(self.PAGE_INDEX != 2){
							$("#bg_music .party-music-icon").css("background","transparent");
							if(isIos()){
								if(mp3.src != BG_MUSIC_URL){
									mp3.src = BG_MUSIC_URL;
									if($("#bg_music").hasClass("rotate")){
										playmusic();
									}else{
										mp3.pause();
									}
								}
							}else{
								if($("#mp3").attr("src") != BG_MUSIC_URL){
									$("#mp3").attr("src", BG_MUSIC_URL);
									if($("#bg_music").hasClass("rotate")){
										playmusic();
									}else{
										document.getElementById("mp3").pause();
									}
								}
							}
						}*/
			    		if ( self.PAGE_INDEX == 0 )
			    		{
							$('html,body').css('background',"#ffbf5a");
			    		}else{
							$('html,body').css('background','#ee6b49');
						}
						var slide = $("#swiper .swiper-wrapper>.swiper-slide").eq(_swiper.activeIndex);
					    $(".page-hdr", slide).resetClass("show");
				    	switch ( _swiper.activeIndex )
				    	{
				    		case 0:
								$(".arrow-cont").show();
								typeWrite();
								$(".person").resetClass("page-1-btm");
								$(".person img").resetClass("popup");
				    			break;
				    		case 1:
								$(".arrow-cont").show();
                                $(".page-2 .address-text>p").resetClass('show');
								$(".page-2 #left_npc").resetClass("npc-anim");
								$(".page-2 #right_npc").resetClass("npc-anim");
								$(".page-2-scn .address-cont .location-icon").resetClass("bounce");
								$(".page-2-scn .address-text").resetClass("up");
				    			break;
				    		case 2:
								$(".arrow-cont").show();
				    			break;
				    		case 3:
								$(".arrow-cont").show();
								if(!hasTransiUp){
									$("#msg_cont .right-cont").transiUp("msg-line", 3000);
									hasTransiUp = true;
								}
				    			break;
				    		case 4:
								$(".arrow-cont").show();
								$(".page5-circle-cont .right").resetClass("rotate");
								$(".page5-circle-cont .left").resetClass("rotate");
								$(".page5-circle-cont .pie_right").resetClass("rotate");
								$(".page5-circle-cont .pie_left").resetClass("rotate");
								$(".page5-circle-cont .text-area").resetClass("rotate");
								$(".page-5-btm .page5-icon-3").resetClass("down");
								$(".page-5-btm #page5_down").resetClass("down");
				    			break;
				    		case 5:
				    			var arr = [0,1,2,3,4,5,6,7,8];
				    			var shuffledArr = Util.shuffle(arr);
							    $(".page-6-scn .person-head").each(function(ix){
							    	var index = ix;
									var _this = $(this);
									setTimeout(function(){
										_this.find(">p").resetClass("show");
									},shuffledArr[index]*200);
								});
								//$(".page-6-scn .button-area>button").resetClass("show");
								$(".page-6-scn .head-cont-inner").flyUp(5000);
				    			break;
						}
			    	}
			    }
			});
			$("#up_arrow").click(function(){
				_swiper.swipeNext();
			});
		}
			
	};
	/*var elCont = new Array();
	for (i=0;i<$("#swiper>.swiper-wrapper>.swiper-slide").length;i++)
	{
		elCont[i] = $("#swiper>.swiper-wrapper>.swiper-slide").eq(i).html();
	}
	function remove()
	{
		$("#swiper>.swiper-wrapper>.swiper-slide:eq("+_swiper.previousIndex+")").html(elCont[_swiper.previousIndex]);
	}*/
	//初始化方法
	App.init(); 
	$.fn.typeWriter = function(typeText, delayTime, callback){
    	if(!typeText || typeText.length <=0) return;
    	var _el = $(this),ix = 0, delayTime = delayTime || 300;//每个文字之间的间隔时间，单位毫秒
    	typer = setInterval(function(){
    		if(ix >= typeText.length){
    			clearInterval(typer);
    			if(typeof callback == 'function'){
    				callback();
    			}
    		}
    		var addText = typeText.charAt(ix);
    		_el.text(_el.text() + addText);
    		ix++;
    	}, delayTime);
    }
    function typeWrite(){
		var $time_val = $("#time_val").val();
		$time_val = $time_val.split(',');
    	var typeText = ["姓名：谢进军", $time_val];
    	var delayTime = 150;
		if(!!typer){
			clearInterval(typer);
		}
		$("#date_area").empty(), $("#time_area").empty(),$('#data_mobile').empty();
		$('#data_age').empty(),$('#data_work').empty(),$('#data_emaill').empty();
        $('#data_git').empty(),$('#data_blog').empty();//先清空存放内容区域
    	$('#date_area').typeWriter(typeText[0], delayTime, function(){
    		$("#time_area").typeWriter(typeText[1][0], delayTime,function () {
				$('#data_mobile').typeWriter(typeText[1][1], delayTime,function () {
                    $('#data_age').typeWriter(typeText[1][2], delayTime,function () {
                        $('#data_work').typeWriter(typeText[1][3], delayTime,function () {
                            $('#data_emaill').typeWriter(typeText[1][4], delayTime,function () {
                                $('#data_git').typeWriter(typeText[1][5], delayTime,function () {
                                    $('#data_blog').typeWriter(typeText[1][6], delayTime)
                            })
                        })
                    })
				})
            });
    	});
    })
	}
	//项目 向上滚动的过度效果
	$.fn.transiUp = function(className, delay, callback){
		var el = $(this),delay = delay || 3000, tIx = 0;
		el.data("ht", "0"); //为当前元素设置属性
		var len = $('.' + className, el).length; //项目数
		var cotainerHeight = $(".page-4-scn .party-msg-cont").height();//总高度
		var transiInterval = setInterval(function(){
		var elHeight = -1*$('.' + className, el).eq(tIx).height() -20 ;
		var originHeight = el.data('ht');
		console.log(originHeight)
		if(!originHeight) originHeight = 0;
		var curHeight = elHeight + parseFloat(originHeight);

		if(cotainerHeight + Math.abs(originHeight) < el.height()){
			el.css("-webkit-transform", "translate3d(0," + curHeight + "px,0)").data("ht", curHeight);
		}else{
			clearInterval(transiInterval);
			el.css("-webkit-transform", "translate3d(0, 0,0)").data("ht","0");
			el.transiUp(className, delay);
		}
		tIx++;
		},delay*(tIx+1));
	}


	//push up
	$.fn.pushUp = function(className, delay, callback){
		var el = $(this),delay = delay || 3000;
		var len = $('.' + className, el).length;
		var cotainerHeight = $(".page-4-scn .party-msg-cont").height();
		var k = 0;
		$('.' + className, el).each(function(ix){
			var elHeight = -1*$(this).height();
			setTimeout(function(){
				var originHeight = el.data('ht');
				if(!originHeight) originHeight = 0;
				var curHeight = elHeight + originHeight;
				var setHeight = -20 * (k+1);
				if(cotainerHeight + Math.abs(originHeight) + 20*k < el.height()){
					$(".msg-line:gt(" + k + ")", el).css("-webkit-transform", "translate3d(0," + setHeight + "px,0)");
					var lastHeight = $("#page_4 .right-cont .vertical-line").height();
					$("#page_4 .right-cont .vertical-line").height(lastHeight - 20);
					setTimeout(function(){
						el.css("-webkit-transform", "translate3d(0," + curHeight + "px,0)").data("ht", curHeight);
					},800);
				}
				k++;
			},delay*(ix+1));
		});
	}
	//fly up
	/*$.fn.flyUp = function(delay){
		var el = $(this), delay = delay || 3000;
		var len = $(".person-head:not(empty)", el).length;
		var flyNum = Math.ceil(len / 3);
		var needNum = flyNum - 3;
		if(needNum > 0){
			var j = 1;
			for(var i = 0; i < needNum;i++){
				setTimeout(function(){
					var flyHeight = -85*j;
					el.css("-webkit-transform", "translate3d(0," + flyHeight +"px,0)");
					j++;
				},delay*(i+1));
			}
		}
	}*/
	$.fn.flyUp = function(delay){
		if(flyUpInterval){
			clearInterval(flyUpInterval);
		}
		var el = $(this), delay = delay || 3000;
		var len = $(".person-head:not(empty)", el).length;
		var flyNum = Math.ceil(len / 3);
		var needNum = flyNum - 3;
		if(needNum > 0){
			var j = 1;
			flyUpInterval = setInterval(function(){
				if(j > needNum){
					el.css({"transition":"none","-webkit-transform":"translate3d(0,0,0)"});
					clearInterval(flyUpInterval);
					el.flyUp(delay);
				}else{
					var flyHeight = -85*j;
					el.css({"transition":"-webkit-transform 0.3s ease-out 0s","-webkit-transform":"translate3d(0," + flyHeight +"px,0)"});
					j++;
				}
			},j*delay);
			/*for(var i = 0; i < needNum;i++){
				setTimeout(function(){
					var flyHeight = -85*j;
					el.css("-webkit-transform", "translate3d(0," + flyHeight +"px,0)");
					j++;
				},delay*(i+1));
			}*/
		}
	}
	//重新设置动画class
	$.fn.resetClass = function(className, callback){
		var el = $(this);
		el.removeClass(className);
		setTimeout(function(){
			el.addClass(className);
			if(typeof callback == "function") callback();
		},300);
	}
	setTimeout(typeWrite, 400);
	//点击歌曲播放
	$("#song_list .party-song").click(function(ev){
		var _this = $(this);
		if($('.tip-hand').is(':visible')){
			$('.tip-hand').hide();
		}
		_this.addClass("active");
		setTimeout(function(){
			_this.removeClass("active");
		},1500);
		var mp3Url = $(this).data("mp3");
		var hpUrl = $(this).data("hp");
		if(hpUrl == ""){
			hpUrl = "http://comp.changba.com/images/mysong/souvenirbook/hphoto-24-24.png";
		}
		var t_left = $("#bg_music").offset().left;
		var t_top = $("#bg_music").offset().top;
		var o_left = ev.pageX;
		var o_top = ev.pageY;
		var n_left = t_left - o_left;
		var n_top = t_top - o_top;
		$("#anim_tag_img").get(0).style.left = o_left + "px";
		$("#anim_tag_img").get(0).style.top = o_top - 70 - 12 + "px";
		$("#anim_tag_img").css({"background":"url(" + hpUrl + ") no-repeat","background-size":"100% 100%","display": "block"});
		setTimeout(function(){
			$("#anim_tag_img").css({"transition":"-webkit-transform 0.6s ease-in 0s","-webkit-transform":"translate3d(" + n_left + "px," + n_top + "px,0)" });
		},200);
		setTimeout(function(){
			$("#anim_tag_img").css({"transition":"none","-webkit-transform":"translate3d(0,0,0)","display":"none"});
			if(isIos()){
				mp3.src = mp3Url;
				mp3.loop = false;
				mp3.ended = function(){
					$("#bg_music .party-music-icon").css("background","transparent");
					mp3.src = BG_MUSIC_URL;
					mp3.loop = true;
					mp3.play();
				}
			}else{
				$("#mp3").attr("src", mp3Url);
				$("#mp3").removeAttr("loop");
				$("#mp3").bind("ended", function(){
					$("#bg_music .party-music-icon").css("background","transparent");
					$("#mp3").attr("src", BG_MUSIC_URL);
					$("#mp3").attr("loop","loop");
					document.getElementById("mp3").play();
				});
			}
			$("#bg_music .party-music-icon").css({"background":"url("+hpUrl+")","background-size":"100% 100%"});
			$("#bg_music").addClass("rotate");
		},800);
	});
	$("#bg_music").click(function(ev){
		ev.stopPropagation();
		if ($(this).hasClass("rotate"))
			{
				$(this).removeClass("rotate");
				//$("#music>span").addClass("zshow").html("关闭");
				//setTimeout(function(){$("#music>span").removeClass("zshow")},1000);
				if(isIos()){
					mp3.pause();
				}
				else
				{
					document.getElementById("mp3").pause();
				}
			}
			else
			{
				$(this).addClass("rotate");
				//$("#music>span").addClass("zshow").html("开启");
				//setTimeout(function(){$("#music>span").removeClass("zshow")},1000);
				if(isIos()){
					mp3.play();
				}
				else
				{
					document.getElementById("mp3").play();
				}
			}
	});
	//再看一遍
	$("#replay").click(function(){
		_swiper.swipeTo(0,300);
		_swiper.reInit();
	});
	function isIos(){  
        var userAgentInfo = window.navigator.userAgent;  
        var Agents = new Array("iPhone","iPad");  
        var flag = false;  
        for (var v = 0; v < Agents.length; v++) {  
        	if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }  
        }  
    	return flag;  
	}
	//微信分享提示
	$("#share").click(function(){
		//alert(222);
		if(isQQorWeChat()){
			//alert(333);
			$("#mask").show().bind("click", function(ev){
				ev.stopPropagation();
				$(this).hide();
			});
		}else{
			//alert(111);
			var originHref = "http://ktv.changba.com/m/sbook.php?party_id="+window.PARTY_ID;
			//alert(originHref);
			originHref = encodeURIComponent(originHref);
			var imgUrl = encodeURIComponent("http://comp.changba.com/images/mysong/souvenirbook/share-icon-2.png");
			if(isIos()){
				window.location.href="changba://?ac=addshare&content=" + window.CONTENT_TEXT + "&targeturl=" + originHref + "&title=个人简历&imgurl="+imgUrl;
			}else{
				window.location.href="changba://?ac=addshare&content=" + window.CONTENT_TEXT + "&targeturl=" + originHref + "&title=个人简历&imageurl="+imgUrl;
			}
		}
		_czc.push(["_trackEvent","按钮","点击","分享按钮","110","sharebtn"]);
	});
	//ios音乐播放
	function playmusic(){
			$("#bg_music").addClass("rotate");
			if(isIos()){
				//mp3.pause();
				mp3.play();
			}
			else
			{
				//document.getElementById("mp3").pause();
				document.getElementById("mp3").play();
			}
	}
	function iosAudio(){
		mp3 = new Audio();
		mp3.src = $("#mp3").attr("src");
		mp3.loop = true;
		mp3.autoplay = true;
		$("#mp3").remove();
	}
	if(isIos()){
		iosAudio();
	}
    playmusic();
    setTimeout(function(){
    	playmusic();
    },1000);
    $(document).on("touchstart click", function(){
    	if($("#bg_music").hasClass("rotate")){
    		playmusic();
    	}
    });
	//设置底部的文字剧中
	if(window.innerWidth < 480){
		var bottomFloorHeight = Math.floor(window.innerWidth / 480 * 50);
		$(".page6-btm-text").css({"height":bottomFloorHeight+"px", "line-height":bottomFloorHeight+"px"});
	}
	//设置聊天内容左边连线的高度
	var cutHeight = $("#page_4 .right-cont .msg-line:last").height();
	var originHeight = $("#page_4 .right-cont").height();
	// console.log("right-cont-height" + originHeight);
	$("#page_4 .right-cont .vertical-line").height(originHeight - cutHeight);
	setTimeout(function(){
		var cutHeight = $("#page_4 .right-cont .msg-line:last").height();
		var originHeight = $("#page_4 .right-cont").height();
		// console.log("right-cont-height2x" + originHeight);
		$("#page_4 .right-cont .vertical-line").height(originHeight - cutHeight);
	},3000);
});