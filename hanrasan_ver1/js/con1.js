$(function(){

    var banner = $('.hot_bottom>ul>li'); // 슬라이드 이미지들
    var next = $('.hot_rolling>img.next'); 
    var prev = $('.hot_rolling>img.prev'); 
    var current = 0;
    var setIntervalId00;
    var arrow_Num = $('.hot_arrow_number>p');


    //setInterval 되는 요소 호출하기위해 timer
    timer();

    function timer(){
        setIntervalId00 = setInterval(function(){
            var prev = banner.eq(current);
            var arrow_N = arrow_Num.eq(current); // p의 순번

            move(prev, 0 , '100%'); // 오른쪽에서 왼쪽 <-- 방향
            arrow_N.removeClass('bl');

            current++;

            //배너의 총갯수가 커런트의순번과 같다면?
            if(current==banner.size()){current=0;}

            var next = banner.eq(current);
            var arrow_Nn = arrow_Num.eq(current);

            move(next, '-100%', 0);
            arrow_Nn.addClass('bl');

        },3000)
    }

    // 움직이게 하기위해~
    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
    }

    // 사진에 마우스 갖다대면 멈추고 떼면 움직이게.
    $('.hot_allow_img').on({mouseover: function(){
        clearInterval(setIntervalId00); // 실행해~ 
    }, mouseout: function(){
        timer();
    }
});

    next.click(function(){

        var prev = banner.eq(current);
        var arrow_N = arrow_Num.eq(current);

        move(prev, 0 , '100%');
        arrow_N.removeClass('bl');

        current++;

        if(current==banner.size()){current=0;}

        var next = banner.eq(current);
        var arrow_Nn = arrow_Num.eq(current);

        move(next, '-100%', 0);
        arrow_Nn.addClass('bl');

        return false;

    });

    prev.click(function(){

        var prev = banner.eq(current);
        var arrow_N = arrow_Num.eq(current);

        move(prev, 0 , '-100%');
        arrow_N.removeClass('bl');

        current--;

        if(current== -banner.size()){current=0;}

        var next = banner.eq(current);
        var arrow_Nn = arrow_Num.eq(current);

        move(next, '100%', 0);
        arrow_Nn.addClass('bl');

        return false;


    });



});