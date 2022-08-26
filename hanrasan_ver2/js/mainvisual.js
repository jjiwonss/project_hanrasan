$(function(){

     //상단 공지
    $('#top_notice').find('.close_btn').on('click',function(){
        $('#top_notice').slideUp();
    });

    /* 사이트맵 */
    $('.menuicon').click(function(){
        $('#sitemap').fadeIn(300);
    });
    $('.stie_close').click(function(){
        $('#sitemap').fadeOut(300);
    });

    /* nav */
    /* 슬라이드 다운시키는 부분 */
    $("#mainnav > li").mouseenter(function(){
        $("#navbg").stop().slideDown();
        $(this).find(".submenu").stop().slideDown();
    });
     /* 슬라이드 업 시키는 부분 */
     $("#mainnav> li").mouseleave(function(){
        $("#navbg").stop().slideUp();
        $(this).find(".submenu").stop().slideUp();
    });

    /* 메인비쥬얼 */
    //슬라이드 이미지
    var visualimg = $('#mainvisual .bannerimage li');
    var button = $('#mainvisual .buttonList li');
    var current = 0; //현재이미지
    var leftBtn = $('.leftbtn'); //이전 버튼 <
    var rightBtn = $('.rightbtn'); // 이전 버튼 >
    var setIntervalId;

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},500);
    }

    timer();

    function timer(){
        setIntervalId = setInterval(function(){ //반복실행
            var prev = visualimg.eq(current);
            var pn = button.eq(current);
            move(prev,0,'100%');

            pn.removeClass('on');
            current++;
            if(current==visualimg.size()){current=0;}

            var next = visualimg.eq(current);
            var pnn = button.eq(current);
            move(next, '-100%', 0);
            pnn.addClass('on');

        },4000);
    }



    // stop, play 버튼
    $('.slideplay .stop').click(function(){
        clearInterval(setIntervalId);
        $('.slideplay .stop').hide();
        $('.slideplay .play').show();
    });

    $('.slideplay .play').click(function(){
        timer();
        $('.slideplay .stop').show();
        $('.slideplay .play').hide();
    });


    button.click(function(){
        var tg = $(this);
        var i = tg.index();
        button.removeClass('on');
        tg.addClass('on');

        movel(i);

    });

    function movel(i){
        if(current == i){return}

        var currentEl = visualimg.eq(current);
        var nextEl = visualimg.eq(i);

        currentEl.css({left:0}).stop().animate({left:'100%'},500);
        nextEl.css({left:'-100%'}).stop().animate({left:0},500);

        current = i;
    }


   /* 화살표 클릭 */
   rightBtn.click(function(){

       var prev = visualimg.eq(current); 
       var pn = button.eq(current);

       move(prev, 0, '100%');
       pn.removeClass('on');

       current++;

       if(current == visualimg.size()){current=0}

       var next = visualimg.eq(current);
       var pnn = button.eq(current);

       move(next, '-100%', 0);
       pnn.addClass('on');

       return;

   }); //오른쪽 버튼


   leftBtn.click(function(){

       var prev = visualimg.eq(current);
       var pn = button.eq(current);

       move(prev, 0, '-100%');
       pn.removeClass('on');

       current--;

       if(current == -visualimg.size()) {current=0}

       var next = visualimg.eq(current);
       var pnn = button.eq(current);

       move(next, '100%', 0);
       pnn.addClass('on');

       return;

   }); //왼쪽버튼


   function move(tg, start, end){
       tg.css('left', start).stop().animate({left:end}, {duration:500,ease:'easeOutCubic'})
   }





});