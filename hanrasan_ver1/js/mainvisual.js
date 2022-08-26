$(function(){

     //상단 공지
    $('#top_notice').find('.close_btn').on('click',function(){
        $('#top_notice').slideUp();
    });


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

    timer(); // 일정시간 호출하기 위해 타이머를 만듬. 호출문:함수 밖에서 호출해야 실행이 됨.

    function timer(){
        setIntervalId = setInterval(function(){ //반복실행
            var prev = visualimg.eq(current);
            var pn = button.eq(current);
            move(prev,0,'100%');

            pn.removeClass('on');
            current++;
            if(current==visualimg.size()){current=0;} // size 총갯수

            var next = visualimg.eq(current);
            var pnn = button.eq(current);
            move(next, '-100%', 0);
            pnn.addClass('on');

        },4000);
    }



    // stop, play 버튼
    $('.slideplay .stop').click(function(){ //stop,play버튼 설정
        clearInterval(setIntervalId);
        $('.slideplay .stop').hide();
        $('.slideplay .play').show();
    });

    $('.slideplay .play').click(function(){ //play버튼누르면 멈추고 켜지고
        timer(); //타이머를 호출
        $('.slideplay .stop').show();
        $('.slideplay .play').hide();
    });


    button.click(function(){
        var tg = $(this); //this button 클릭한 대상
        var i = tg.index(); //tg되어진 인덱스순번
        button.removeClass('on');
        tg.addClass('on');

        movel(i); //i는 클릭되어진 버튼.(위에move있어서 이름다르게movel)  버튼을 클릭하면 현재 화면에서 재생되도록 호출.

    });

    function movel(i){
        if(current == i){return} // i가 현재화면에 보여지는 이미지가 맞다면 종료

        var currentEl = visualimg.eq(current);
        var nextEl = visualimg.eq(i);

        currentEl.css({left:0}).stop().animate({left:'100%'},500);
        nextEl.css({left:'-100%'}).stop().animate({left:0},500);

        current = i; //i는 현재상태
    }


   /* 화살표 클릭 */
   rightBtn.click(function(){

       var prev = visualimg.eq(current); 
       var pn = button.eq(current); //추가 화살표누르면 버튼아이콘바뀌게

       move(prev, 0, '100%');
       pn.removeClass('on'); //추가 화살표누르면 버튼아이콘바뀌게

       current++; // 1 씩 증가

       if(current == visualimg.size()){current=0} // size 전체의 갯수

       var next = visualimg.eq(current);
       var pnn = button.eq(current); //추가 화살표누르면 활성화될버튼

       move(next, '-100%', 0);
       pnn.addClass('on'); //추가

       return; // 함수실행 종료

   }); //오른쪽 버튼


   leftBtn.click(function(){

       var prev = visualimg.eq(current);
       var pn = button.eq(current); //추가 화살표누르면 버튼아이콘바뀌게

       move(prev, 0, '-100%');
       pn.removeClass('on'); //추가 화살표누르면 버튼아이콘바뀌게

       current--;

       if(current == -visualimg.size()) {current=0}

       var next = visualimg.eq(current);
       var pnn = button.eq(current); //추가 화살표누르면 활성화될버튼

       move(next, '100%', 0); //파라미터에 전달할 전달인자값
       pnn.addClass('on'); //추가

       return; // 함수실행 종료

   }); //왼쪽버튼


   function move(tg, start, end){ //파라미터(매개변수)
       tg.css('left', start).stop().animate({left:end}, {duration:500,ease:'easeOutCubic'}) // 점점빨라지도록 ease:'easeOutCubic'
   }





});