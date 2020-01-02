$(function() {
	//取消a标签的默认行为
	$("a").click(function(e) {
		$("a").css("text-decoration", "none")
		//		e.preventDefault()
	})
	$(".one,.tow").click(function(e) {
		e.preventDefault()
	})
	//二维码显示
	$(".myapp").hover(function() {
		$(".ema").show()
	}, function() {
		$(".ema").hide()
	})
	//	搜索按钮显示和隐藏
	$(".seach-bar input").click(function() {
		$(".btns").fadeOut()
	}).blur(function() {
		$(".btns").fadeIn()
	})
	//	固定导航条
	$(document).scroll(function() {
		if($(window).scrollTop() >= 100) {
			$(".fixednav").css({
				"position": "fixed",
				"top": "0px"
			}).css("border-bottom", "1px solid #e1e1e1")
			$(".seach-bar").hide()
			$(".userhide").show()
		} else if($(window).scrollTop() <= 100) {
			$(".fixednav").css({
				"position": "relative"
			})
			$(".seach-bar").show()
			$(".userhide").hide()
		}
		//		$(".fixedul li").off("mouseenter")
	})
	//	显示导航详情商品
	$(".fixedul li").mouseenter(function() {
		$(".myhover").stop().slideDown()
		$(this).parent().parent().next(".myhover").children().eq($(this).index()).show().siblings().hide();
	})
	$(".fixednav").mouseleave(function() {
		$(this).children(".myhover").stop().slideUp()
	})
	//	banner轮播	
	var m = 0,
		speed = 3000;
	var timer;

	function move() {
		if(m > 2)
			m = 0
		control(m)
		m++
	}
	timer = setInterval(move, speed)

	function control(n) {
		$(".banner .imglist li").removeClass("active").eq(n).addClass("active");
		$(".btnlist li").removeClass("actives").eq(n).addClass("actives")
	}
	$(".banner").mouseenter(function() {
		clearInterval(timer)
	}).mouseleave(function() {
		timer = setInterval(move, speed)
	})
	$(".btnlist li").click(function() {
		control($(this).index())
		m = $(this).index() + 1
	})
	//  热门商品tab切换
	var reg = /[^0-9\-,]/g;
	$(".goods .header-top .one").click(function() {
		$(".goods-father").css("transform", "translate(0px, 0px)")
		$(this).addClass("disableds").attr("disabled", "disabled")
		$(".goods .header-top .tow").removeClass("disableds").removeAttr("disabled")
	})
	$(".goods .header-top .tow").click(function() {
		$(".goods-father").css("transform", "translate(-1133px, 0px)")
		$(this).addClass("disableds").attr("disabled", "disabled")
		$(".goods .header-top .one").removeClass("disableds").removeAttr("disabled")
	})
	//	显示查看详情 1 2 5
	$(".goods-father>div").mouseenter(function() {
		$(this).children().children(".goodsname").children("h5").show()
		$(this).children().children(".goodsname").children("h6").hide()

	}).mouseleave(function() {
		$(this).children().children(".goodsname").children("h6").show()
		$(this).children().children(".goodsname").children("h5").hide()
	})
	$(".goods-father>div:eq(0),.goods-father>div:eq(1),.goods-father>div:eq(2),.goods-father>div:eq(4)").mouseenter(function() {
		$(this).children().children(".goodsname").children("h6").show()
	})
	//	跟换手机颜色
	$(".goodsbtns ul li div").mouseenter(function() {
		$(this).toggleClass("myactive").parent().siblings().children().removeClass("myactive")
	})
	$(".myphones ul li").mouseenter(function() {
		$(this).parent().parent().siblings(".goodsname").children("img").eq($(this).index()).addClass("show-block").siblings("img").removeClass("show-block")
		$(this).parent().parent().siblings(".monery").children("span").eq($(this).index()).addClass("show-block").siblings("span").removeClass("show-block")
	})
	//跟换箱包颜色
	$(".package-btn ul li").mouseenter(function() {
		$(this).parent().parent().siblings(".my-package").children("img").eq($(this).index()).addClass("show-block").siblings("img").removeClass("show-block")
		$(this).parent().parent().siblings(".monery").children("div").eq($(this).index()).addClass("show-block").siblings("div").removeClass("show-block")
	})
	//论坛详情
//	$.ajax({
//		type: "GET",
//		url: "luntan.json",
//		async: false,
//		success: function(data) {
//			for(var i in data) {
//				$(".for-content").append('<div class="col-md-3"><a href="javascript:void(0)"><img src="' + data[i].img + '"/><h3>' + data[i].h3 + '</h3><p>' + data[i].p1 + '</p><p>阅读全文 > </p></a></div>')
//			}
//		}
//	})
		
	
	//第二个页面  加入我们
	$(".j-down").click(function() {
		$(this).children().children(".job-down").toggleClass("rotate");
		$(this).parent().siblings(".details").toggle().parent(".jone").siblings().children(".details").slideUp("fast")
		$(this).siblings(".end0").children().toggleClass("active3")
	})
	//app 切换language
	$(".appNav .pull-right").hover(function() {
		$(this).children(".language").show()
	}, function() {
		$(this).children(".language").hide()
	})
	var cav = document.getElementById("cav");
	init()

	function init() {
		cav.width = 200;
		cav.height = 100;
		var ctx = cav.getContext("2d")
		product()
		drap(ctx)
		drapStroke(ctx)
	}
	//	    		随机数值
	function product() {
		var arr = ["100元", "谢谢惠顾", "150元", "谢谢惠顾", "谢谢惠顾", "100元", "200元"];
		var texts = arr[randomInt(0, arr.length - 1)];
		$(".ggk span").text(texts)
	}

	function randomInt(form, to) {
		return parseInt(Math.random() * (to - form + 1) + form)
	}
	// canvas画布
	function drap(ctx) {
		ctx.save()
		ctx.fillStyle = "rgb(100,100,100)";
		ctx.fillRect(0, 0, 200, 100);
		ctx.restore()
	}

	function drapStroke(ctx) {
		$("#cav").mousedown(function(e) {
			var downX = e.offsetX;
			var downY = e.offsetY;
			ctx.beginPath();
			ctx.globalCompositeOperation = "destination-out"
			ctx.lineWidth = 15;
			ctx.moveTo(downX, downY)
			$("#cav").mousemove(function(e) {
				var x = e.offsetX;
				var y = e.offsetY;
				ctx.lineTo(x, y);
				ctx.stroke();
			})
		}).mouseup(function() {
			$(this).unbind("mousemove")
		})
	}
	if($(".for-content").html().length <= 10) {
		$(".for-content").append("<h4>因为同源策略的原因,	json的数据无法传递，请用编辑器打开！</h4>")
	}
})
function getJson(data){
			for(var i in data.data) {
				$(".for-content").append('<div class="col-md-3"><a href="javascript:void(0)"><img src="' + data.data[i].img + '"/><h3>' + data.data[i].h3 + '</h3><p>' + data.data[i].p1 + '</p><p>阅读全文 > </p></a></div>')
			}
	}
