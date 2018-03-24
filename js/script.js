//百度分享
window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    }, "slide": {"type": "slide", "bdImg": "6", "bdPos": "left", "bdTop": "100"}
};
with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).
    src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
////百度分享
//window._bd_share_config = {
//    "common": {
//        "bdSnsKey": {},
//        "bdText": "",
//        "bdMini": "2",
//        "bdMiniList": false,
//        "bdPic": "",
//        "bdStyle": "0",
//        "bdSize": "16"
//    },
//    "share": {},
//    "image": {
//        "viewList": ["qzone", "tsina", "tqq", "renren", "weixin"],
//        "viewText": "分享到：", "viewSize": "16"
//    },
//    "selectShare": {"bdContainerClass": null, "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]}
//};
//with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
////baner轮播
//首页产品展示的选项卡
$(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab.', function (e) {
        //获取已激活标签名称
        var activeTab = $(e.target).text();
        //获取上一个激活标签
        var previousTab = $(e.relatedTarget).text();
        $(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);
    });
});
//客服
var flag = 1;
$('#rightArrow').click(function () {
    if (flag == 1) {
        $("#floatDivBoxs").animate({right: '-175px'}, 300);
        $(this).animate({right: '-5px'}, 300);
        $(this).css('background-position', '-50px 0');
        flag = 0;
    } else {
        $("#floatDivBoxs").animate({right: '0'}, 300);
        $(this).animate({right: '170px'}, 300);
        $(this).css('background-position', '0px 0');
        flag = 1;
    }
});
//首页产品详情页img遮罩
$(".products #myTabContent div a").hover(
    function () {
        $(this).find("img").stop().animate({"opacity": "1"}, 700)
    }, function () {
        $(this).find("img").stop().animate({"opacity": "0.5"}, 700)
    }
);
$(".join img").hover(
    function () {
        $(this).stop().animate({"opacity": "1"}, 700)
    }, function () {
        $(this).stop().animate({"opacity": "0.5"}, 700)
    }
);
//回到顶部
$(window).scroll(function () {//
    if ($(window).scrollTop() > 100) {//当高度小于100
        $("#back-to-top").fadeIn(1000);
    } else {
        $("#back-to-top").fadeOut(1000);
    }
});
$("#back-to-top").click(function () {
    $("body").animate({"scrollTop": "0"}, 1500)
});
//.Js-products-li.产品介绍收放

//
//$(".Js-prod-a1").bind("click",function(){
//    if($(".Js-prod-ul1").hasClass("sss")){
//        $(".Js-prod-ul1").removeClass("sss").css("display","block")
//    }else{
//        $(".Js-prod-ul1").addClass("sss").css("display","none")
//    }
//});
//
//$(".Js-prod-a2").bind("click",function(){
//    if($(".Js-prod-ul2").hasClass("sss")){
//        $(".Js-prod-ul2").removeClass("sss").css("display","block")
//    }else{
//        $(".Js-prod-ul2").addClass("sss").css("display","none")
//    }
//});
//
//$(".Js-prod-a3").bind("click",function(){
//    if($(".Js-prod-ul3").hasClass("sss")){
//        $(".Js-prod-ul3").removeClass("sss").css("display","block")
//    }else{
//        $(".Js-prod-ul3").addClass("sss").css("display","none")
//    }
//});
//

//筛选
$(".btn-default").click(function(){//按下事件.筛选.搜索功能
    var cont=$(".text1").val();
    $(".col-md-4").hide().filter(":contains("+cont+")").show();//缩减:缩减其余的show
});
/*---------返回顶部----------*/
$(function() {
    $(".btn_top").hide();
    $(".btn_top").live("click",function(){
        $('html, body').animate({scrollTop: 0},300);return false;
    })
    $(window).bind('scroll resize',function(){
        if($(window).scrollTop()<=300){
            $(".btn_top").hide();
        }else{
            $(".btn_top").show();
        }
    })
})

/*---------返回顶部 end----------*/

