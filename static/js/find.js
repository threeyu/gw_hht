$(document).on("keydown", function(e) {
	if(e.keyCode == 13 && $(".index-seach-text").val() != "") {
		skip();
	}
})

$(".index-seach-btn").on("click", function() {
	skip();

});
//fnLoad();
function fnLoad() {

	var _name_result = location.href.substring(location.href.indexOf("?_s=") + 4, location.href.length);

	$.ajax({
		type: "post",
		url: "http://www.alilo.com.cn/gw/search/byName",
		data: {
			name: unescape(_name_result)
		},
		success: function(data) {

			var _data = typeof JSON == "undefined" ? eval("("+data+")") : JSON.parse(data);
			var _list__music = _data.content.musicList;
			var _list__animate = _data.content.animeInfoList;
			var _list_special = _data.content.specialList;

			$(".resResult-info-animate-pages>ul").empty();

			if(_list__music == "" && _list__animate == "" && _list_special == ""){
				$(".resResult-info-special-h3").css("display","block");
				$(".resResult-info-special-h3").text("未查询到相应资源");
			}else{
				if(_list_special != ""){
					$(".resResult-info-special-h3").css("display","block");
					$(".resResult-info-special").css("display","block");
					$(".resResult-info-special-pages").css("display","block");
					createSearchSpecialLi(_list_special,1);
				}
				if(_list__music !=""){
					$(".resResult-info-music-h3").css("display","block");
					$(".resResult-info-music").css("display","block");
					$(".resResult-info-music-pages").css("display","block");
					createSearchMusicLi(_list__music, 1);
				}
				if(_list__animate != ""){
					$(".resResult-info-animate-h3").css("display","block");
					$(".resResult-info-animate").css("display","block");
					$(".resResult-info-animate-pages").css("display","block");
					createSearchAnimateLi(_list__animate, 1);
				}
			}
			
			$(".resResult").css({
				height : ($(".resResult-info").height() + 330) + "px"
			});

		}
	});

}

function skip() {
	var _name = $(".index-seach-text").val();
	window.open("resResult.html?_s=" + escape(_name), "_self");
}

function createSearchSpecialLi(music_list, skipPages) {
	for(var j in music_list) {
		if(music_list[j].coverpath == undefined) {
			music_list.splice(j, 1);
		}
	}
	window.s_allPages = Math.ceil(music_list.length / 10);
	var numOfMax = music_list.length < 10 ? music_list.length : music_list.length - skipPages * 10 >= 0 ? skipPages * 10 : music_list.length;

	$(".resResult-info-special>ul").empty();
	$(".resResult-info-special-pages>ul").empty();

	for(var i = (skipPages - 1) * 10; i < numOfMax; i++) {
		$(".resResult-info-special>ul").append("<li><div style='width:230px;height:230px;overflow:hidden;'><img data-audio-src =" + music_list[i].name + " src= " + music_list[i].coverpath.substring(0, music_list[i].coverpath.length) + " width='230px' height = '230px'></img><img src='img/resources/cover_play.png' class='coverPlayer' data-audio-src =" + music_list[i].name + " /></div><p>" + music_list[i].name.substring(0, 10) + "</p><p style='margin-bottom:8px;'>共有 : " + music_list[i].musicCount + "首歌</p></li>");
	}

	formatS(music_list);

	$(".resResult-info-special>ul>li>div>img").bind("click", function() {
		window.open("sound.html?s_name=" + escape($(this).attr("data-audio-src")), "_self");
	});

	$(".resResult-info-special").css("height", $(".resResult-info-special>ul").height() + "px");
	$(".resResult-info-special-pages>ul").css("left", (1226 - $(".resResult-info-special-pages>ul").width()) / 2 + "px");
}

function createSearchMusicLi(music_list, skipPages) {
	for(var j in music_list) {
		if(music_list[j].coverpath == undefined) {
			music_list.splice(j, 1);
		}
	}
	window.allPages = Math.ceil(music_list.length / 10);
	var numOfMax = music_list.length < 10 ? music_list.length : music_list.length - skipPages * 10 >= 0 ? skipPages * 10 : music_list.length;

	$(".resResult-info-music>ul").empty();
	$(".resResult-info-music-pages>ul").empty();

	for(var i = (skipPages - 1) * 10; i < numOfMax; i++) {
		$(".resResult-info-music>ul").append("<li><div style='width:230px;height:230px;overflow:hidden;'><img data-audio-src =" + music_list[i].id + " src= " + music_list[i].coverpath.substring(0, music_list[i].coverpath.length) + " width='230px' height = '230px'></img><img src='img/resources/cover_play.png' class='coverPlayer' data-audio-src =" + music_list[i].id + " /></div><p>" + music_list[i].name.substring(0, 10) + "</p><p style='margin-bottom:8px;'>" + (music_list[i].specialname.length > 11 ? (music_list[i].specialname.substring(0, 10) + "...") : music_list[i].specialname) + "</p></li>");
	}

	format(music_list);

	$(".resResult-info-music>ul>li>div>img").bind("click", function() {
		window.open("sound.html?s_id=" + escape($(this).attr("data-audio-src")), "_self");
	});

	$(".resResult-info-music").css("height", $(".resResult-info-music>ul").height() + "px");
	$(".resResult-info-music-pages>ul").css("left", (1226 - $(".resResult-info-music-pages>ul").width()) / 2 + "px");
}

function createSearchAnimateLi(animate_list, skipPages) {

	var pages = Math.ceil(animate_list.length / 10);
	var numOfMax = animate_list.length < 10 ? animate_list.length : animate_list.length - skipPages * 10 >= 0 ? skipPages * 10 : animate_list.length;

	$(".resResult-info-animate>ul").empty();
	$(".resResult-info-animate-pages>ul").empty();
	for(var i = (skipPages - 1) * 10; i < numOfMax; i++) {
		$(".resResult-info-animate>ul").append("<li><div style='width:230px;height:345px;overflow:hidden;'><img data-video-src =" + animate_list[i].id + " src= " + animate_list[i].thumbnail + " width='230px' height = '345px'></img><img src='img/resources/cover_play.png' class='coverPlayer' data-video-src =" + animate_list[i].id + " /></div><p>" + animate_list[i].name.substring(0, 10) + "</p></li>");
	}
	$(".resResult-info-animate>ul>li>div>img").bind("click", function() {
		window.open("video.html?v_id=" + escape($(this).attr("data-video-src")) + "&episode=0", "_self");
	});
	$(".resResult-info-animate").css("height", $(".resResult-info-animate>ul").height() + "px");

}
var currentPages = 1;
var s_currentPages = 1;
function format(list) {
	
	$(".resResult-info-music-pages>ul").empty();
	var html = "<li style='width:78px' class = 'pages-up'>上一页</li>";
	if(allPages >= 8) {
		html += "<li data-pages='1'>1</li>";
		if(currentPages <= 4) {
			html += "<li data-pages='2'>2</li>";
			html += "<li data-pages='3'>3</li>";
			html += "<li data-pages='4'>4</li>";
			html += "<li data-pages='5'>5</li>";
			html += "<li data-pages='6'>6</li>";
			html += "<li data-pages='7'>7</li>";
			html += "<li class = 'pages-null'>...</li>";
		} else if(currentPages > 4 && currentPages <= allPages - 4) {
			html += "<li class = 'pages-null'>...</li>";
			html += "<li data-pages= " + (currentPages - 2) + ">" + (currentPages - 2) + "</li>";
			html += "<li data-pages= " + (currentPages - 1) + ">" + (currentPages - 1) + "</li>";
			html += "<li data-pages= " + currentPages + ">" + currentPages + "</li>";
			html += "<li data-pages= " + (currentPages + 1) + ">" + (currentPages + 1) + "</li>";
			html += "<li data-pages= " + (currentPages + 2) + ">" + (currentPages + 2) + "</li>";
			html += "<li class = 'pages-null'>...</li>";
		} else {
			html += "<li class = 'pages-null'>...</li>";
			for(var i = (allPages - 4); i < allPages; i++) {
				html += '<li data-pages="' + i + '">' + i + '</li>';
			}
		}
		html += "<li data-pages=" + allPages + ">" + allPages + "</li>";
	} else {
		for(var i = 0; i < allPages; i++) {
			html += "<li data-pages = " + (i + 1) + ">" + (i + 1) + "</li>";
		}
	}
	html += "<li style='width:78px' class = 'pages-down'>下一页</li>";
	$(".resResult-info-music-pages>ul").append(html);
	$(".resResult-info-music-pages>ul").css("left", (1226 - $(".resResult-info-music-pages>ul").width()) / 2 + "px");

	$(".resResult-info-music-pages>ul>li").removeClass("select");
	$(".resResult-info-music-pages>ul>li").each(function() {
		if($(this).attr("data-pages") == currentPages) {
			$(this).addClass("select");
		}
	})
	$(".resResult-info-music-pages>ul>li").on("click", function() {
		if($(this).hasClass("pages-null")) return;
		if($(this).hasClass("pages-up")) {
			if(currentPages > 1) {
				currentPages--;
			}
		} else if($(this).hasClass("pages-down")) {
			if(currentPages < allPages) {
				currentPages++;
			}
		} else {
			currentPages = parseInt($(".resResult-info-music-pages>ul>li").eq($(this).index()).attr("data-pages"));
		}
		format(list);
		//arguments.callee(list);
		createSearchMusicLi(list, currentPages);
	})

}
function formatS(list) {
	
	$(".resResult-info-special-pages>ul").empty();
	var html = "<li style='width:78px' class = 'pages-up'>上一页</li>";
	if(s_allPages >= 8) {
		html += "<li data-pages='1'>1</li>";
		if(s_currentPages <= 4) {
			html += "<li data-pages='2'>2</li>";
			html += "<li data-pages='3'>3</li>";
			html += "<li data-pages='4'>4</li>";
			html += "<li data-pages='5'>5</li>";
			html += "<li data-pages='6'>6</li>";
			html += "<li data-pages='7'>7</li>";
			html += "<li class = 'pages-null'>...</li>";
		} else if(s_currentPages > 4 && s_currentPages <= s_allPages - 4) {
			html += "<li class = 'pages-null'>...</li>";
			html += "<li data-pages= " + (s_currentPages - 2) + ">" + (s_currentPages - 2) + "</li>";
			html += "<li data-pages= " + (s_currentPages - 1) + ">" + (s_currentPages - 1) + "</li>";
			html += "<li data-pages= " + s_currentPages + ">" + s_currentPages + "</li>";
			html += "<li data-pages= " + (s_currentPages + 1) + ">" + (s_currentPages + 1) + "</li>";
			html += "<li data-pages= " + (s_currentPages + 2) + ">" + (s_currentPages + 2) + "</li>";
			html += "<li class = 'pages-null'>...</li>";
		} else {
			html += "<li class = 'pages-null'>...</li>";
			for(var i = (s_allPages - 4); i < s_allPages; i++) {
				html += '<li data-pages="' + i + '">' + i + '</li>';
			}
		}
		html += "<li data-pages=" + s_allPages + ">" + s_allPages + "</li>";
	} else {
		for(var i = 0; i < s_allPages; i++) {
			html += "<li data-pages = " + (i + 1) + ">" + (i + 1) + "</li>";
		}
	}
	html += "<li style='width:78px' class = 'pages-down'>下一页</li>";
	$(".resResult-info-special-pages>ul").append(html);
	$(".resResult-info-special-pages>ul").css("left", (1226 - $(".resResult-info-special-pages>ul").width()) / 2 + "px");

	$(".resResult-info-special-pages>ul>li").removeClass("select");
	$(".resResult-info-special-pages>ul>li").each(function() {
		if($(this).attr("data-pages") == s_currentPages) {
			$(this).addClass("select");
		}
	})
	$(".resResult-info-special-pages>ul>li").on("click", function() {
		if($(this).hasClass("pages-null")) return;
		if($(this).hasClass("pages-up")) {
			if(s_currentPages > 1) {
				s_currentPages--;
			}
		} else if($(this).hasClass("pages-down")) {
			if(s_currentPages < s_allPages) {
				s_currentPages++;
			}
		} else {
			s_currentPages = parseInt($(".resResult-info-special-pages>ul>li").eq($(this).index()).attr("data-pages"));
		}
		formatS(list);
		//arguments.callee(list);
		createSearchSpecialLi(list, s_currentPages);
	})

}
