$(function(){

    var visualimg = $('.slidewrap > div');
    var button = $('.con3_tab > li');
    var current = 0;
    var leftBtn = $('.con3_L');
    var rightBtn = $('.con3_R');
    var setIntervalId;

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},500);
    }


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

    current++

    if(current == visualimg.size()){current=0}

    var next = visualimg.eq(current);
    var pnn = button.eq(current);

    move(next, '-100%', 0);
    pnn.addClass('on');

    return;

}); //오른쪽 버튼

rightBtn.mouseenter(function(){

    rightBtn.attr('src','./img/content3_arrow_right2.svg');
    leftBtn.attr('src','./img/content3_arrow_left.svg');
})
rightBtn.mouseleave(function(){

    rightBtn.attr('src','./img/content3_arrow_right.svg');
    leftBtn.attr('src','./img/content3_arrow_left.svg');
})


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

leftBtn.mouseenter(function(){

    leftBtn.attr('src','./img/content3_arrow_left2.svg');
    rightBtn.attr('src','./img/content3_arrow_right.svg');
})
leftBtn.mouseleave(function(){

    rightBtn.attr('src','./img/content3_arrow_right.svg');
    leftBtn.attr('src','./img/content3_arrow_left.svg');
})

});