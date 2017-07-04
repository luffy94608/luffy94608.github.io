/**
 * Created by luffy on 15/4/3.
 */
$(document).ready(function(){
    /**
     * 滚屏插件
     */
    var timerArray=new Array();
     $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': false,
        //'sectionsColor': ['#000000', '#000000', '#000000', '#000000','#000000'],
        //'anchors': ['page1', 'page2', 'page3', 'page4','page5'],
        'navigation': false,
        'navigationPosition': 'right',
        'navigationTooltips': ['1', '2', '3', '4','5'],
        'loopBottom':true,
        'loopTop':false,
        'continuousVertical':false,//是否循环滚动，与 loopTop 及 loopBottom 不兼容

        'loopHorizontal':true,
        'paddingTop':0,
        'paddingBottom':0,
         //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
         //easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',

        'afterLoad': function(anchorLink, index){//滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
            var $this=$(this);
            $this.find('.page-move-mask').addClass('active');
            $this.find('.animation').addClass('text-animation');

            //效果处理
            switch (index) {
                case 1:
                    initPageOne($this);
                    break;
                case 2 :
                    $this.find('.wc-item').each(function(i){
                        var itemObj=$(this);
                           itemObj.addClass('text-fadeOut-'+(i*700));
                    });
                    break;
                case 3:
                case 4:
                    break;
                case 5:

                    break;
                default :
                    break;
            }


        },
        'onLeave': function(index, nextIndex, direction){
            var $this=$(this);
            $this.find('.page-move-mask').removeClass('active');
            $this.find('.animation').removeClass('text-animation');
            $this.find('.animation-fadein').removeClass('fadein');
            $this.find('.bird').fadeOut();

            //效果处理
            switch (index) {
                case 1:
                    $this.find('.letter').animate({
                        opacity:'0',
                        top:'-100%'
                    },300,'easeInBack',function(){
                        $this.find('.letter-content').eq(1).removeClass('rotate');
                    });
                    break;
                case 2 :
                    $this.find('.wc-item').each(function(i){
                        var itemObj=$(this);
                            itemObj.removeClass('text-fadeOut-'+(i*700));
                    });

                    break;
                case 3:
                    break;
                case 4:

                    break;
                case 5:


                    break;
                default :
                    break;
            }
        }
    });
    //绑定下一步按钮
    $('#nextDown').bind('click',function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();

    });
    //初始化第一页
    function initPageOne(obj){
        var $this=$('.letter',obj);
        $this.animate({
            opacity:'1',
            top:'7%'
        },1000,'easeOutBack',function(){
            $this.find('.animation').addClass('text-animation');
            $this.find('.animation-fadein').addClass('fadein');
            $this.find('.letter-content').eq(1).addClass('rotate');
            $this.find('.bird').fadeIn();
        });
    }
    var $this=$('section:eq(0)');
    initPageOne($this);

    /**
     * 下滑按钮
     */
    function signAnimate(){
        var circleFun=function(name1,name2,name3,shift,interval){
            $(name1).animate({"bottom":"-="+shift+"px"},interval,function(){
                $(name1).hide();
                $(name2).animate({"bottom":"-="+shift+"px"},interval,function(){
                    $(name2).hide();
                    $(name3).animate({"bottom":"-="+shift+"px"},interval,function(){
                        $(name3).hide();
                        $(name1).css("bottom","+="+ shift*2+"px").show().animate({"bottom":"-="+shift+"px"},interval,function(){
                            $(name2).css("bottom","+="+shift*2+"px").show().animate({"bottom":"-="+shift+"px"},interval,function(){
                                $(name3).css("bottom","+="+shift*2+"px").show().animate({"bottom":"-="+shift+"px"},interval,function(){
                                    setTimeout(function(){circleFun(name1,name2,name3,shift,interval)},1500);

                                });
                            });
                        })
                    });
                });
            });
        };
        circleFun("#sign1_1","#sign2_1","#sign3_1",30,200);
        circleFun("#sign1_2","#sign2_2","#sign3_2",30,200);
        circleFun("#sign1_plus","#sign2_plus","#sign3_plus",30,200);
        circleFun("#sign1_3","#sign2_3","#sign3_3",30,200);
        circleFun("#sign1_4","#sign2_4","#sign3_4",30,200);

    }
    signAnimate();

    /**
     * 文字自动显示
     */
    $.initAutoInput=function(opts){
        var options={
            'area':'',
            'obj':'.autoInput',
            'gapTime':450,
            'attrData':'text'
        };
        if(opts){
            $.extend(options,opts);
        }
        var obj=$(options.obj,options.area?options.area:'');
        if(obj && obj.length>1){
            obj=$(obj[0]);
        }
        var text=obj.data(options.attrData);
        var innerText=obj.text();
        if(!text || (innerText.length === text.length)){
            obj.html('');
            //return false;
        }
        var len=text.length;
        var i=0;
        var timer=setInterval(function(){
            if(i<len){
                obj.append(text[i]);
                ++i;
            }else{
                clearInterval(timer);
            }
        },options.gapTime);
    };

    /**
     * 雪花特效
     */
    $.fn.snow({
        Container:'.snow',
        minSize: 2,		//雪花的最小尺寸
        maxSize: 10, 	//雪花的最大尺寸
        newOn: 500,		//雪花出现的频率 这个数值越小雪花越多
        content:'<img src="/images/xh.png" style="width:100%">',
        documentHeight :$(".snow").height(),
        documentWidth :$(".snow").width(),
        flakeColor	: "#ff2727"
    });

    /**
     * 播放音乐
     */
    //audios.play();
    //audios.bdBtn(".music");/* 点击的区域 */

    /**
     * 纪念日倒计时
     */
     $.initEndTime=function(){
         var oldTime=new Date(2015,3,1,19,23,0);
         var nowTime=new Date();
         var oStamp=oldTime.getTime();
         var nStamp=nowTime.getTime();
         var lastStamp=(nStamp-oStamp)/1000;
         var day=Math.floor(lastStamp/(60*60*24));
         var hour=Math.floor(lastStamp%(60*60*24)/(60*60));
         var minute=Math.floor(lastStamp%(60*60)/(60));
         var second=Math.floor(lastStamp%60);
         $('#day').html(day);
         if(hour<2){
            hour='0'+hour;
         }
         if(minute<10){
             minute='0'+minute;
         }
         if(second<10){
             second='0'+second;
         }
         $('#hour').html(hour);
         $('#minute').html(minute);
         $('#second').html(second);
    };
    setInterval(function(){
        $.initEndTime();
    },1000)

    /**
     * 隐藏loading
     */
    var hideLoading=function(){
        $('#fullpage').removeClass('gone');
        setTimeout(function(){
            $('.loading-section').addClass('gone');
            audios.play();
            audios.bdBtn(".music");/* 点击的区域 */
        },400);
    };
    hideLoading();
});