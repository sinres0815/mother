(function() {
            function a() {
                var a = document.getElementsByTagName("html")[0],
                    b = document.documentElement.clientWidth;
                    640 <= b && (b = 640);
                    a.style.fontSize = b / 20 / 18.75 * 625 + "%"
            }
            a();
            var b;
            window.addEventListener("resize",
            function() {
                clearTimeout(b);
                b = setTimeout(a, 300)
            },!1);
            window.addEventListener("pageshow", function(c) {
                c.persisted && (clearTimeout(b), b = setTimeout(a, 300))
            },!1);
        })();
var tpl=require("./tpl/tpl.string");     
var $=require("com/jquery-1.11.0.min.js");
require("./com/swiper.min.js");
var swiperAnimateCache=require("./com/swiper.animate1.0.2.min.js").swiperAnimateCache;
var swiperAnimate=require("./com/swiper.animate1.0.2.min.js").swiperAnimate;

$("body").prepend(tpl);
$.ajax({
    url: '/api/getLiveList.do',
    type: 'GET',
    dataType: 'json',
    data: "",
    success:function(res){
        console.log(res)

        $.each(res.data, function(index, val) {
            $(".charu").append(val.title)
        });
    },
    error:function(){
        console.log(1)
    }
});
var mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination',
    
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素 
                swiperAnimate(swiper); //初始化完成开始动画
            }, 
            onSlideChangeEnd: function(swiper){ 
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                
                var index=swiper.activeIndex;
                $(".move0").removeClass("first");
                $(".move00").removeClass("second");
                $(".move").removeClass("first");
                $(".move1").removeClass("first");
                $(".move2").removeClass("first");
                $(".move3").removeClass("first");
                    if(index==1){
                        $(".move0").addClass("first");
                        $(".move00").addClass("second");
                    }
                    if(index==2){
                        $(".move").addClass("first");
                    }
                    if(index==3){
                        $(".move1").addClass("first");
                    }
                    if(index==4){
                        $(".move2").addClass("first");
                    }
                    if(index==5){
                        $(".move3").addClass("first");
                    }
                    
            
            
            
            
            
            
            
            }
          })    
          $(".audio").on("click",function(){
            if($("audio")[0].paused==false){
                $("audio")[0].pause();
                $("#imgs").attr("src","img/audio2.png");
                $(this).css("animationPlayState","paused");
            }else{
                $("audio")[0].play();
                $("#imgs").attr("src","img/audio1.png");
                $(this).css("animationPlayState","running");
            }
          })
