$(function(){

    var banner = $('.hot_bottom>ul>li');
    var next = $('.hot_rolling>img.next'); 
    var prev = $('.hot_rolling>img.prev'); 
    var current = 0;
    var setIntervalId00;
    var arrow_Num = $('.hot_arrow_number>p');

    timer();

    function timer(){
        setIntervalId00 = setInterval(function(){
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

        },3000)
    }

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});
    }

    $('.hot_allow_img').on({mouseover: function(){
        clearInterval(setIntervalId00);
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