$(function(){

    $('.con2top').each(function(){

        var topDiv = $(this);
        var anchors = topDiv.find('ul.tabs a');
        var playDivs = topDiv.find('div.tabbox');
        var lastAnchor;
        var lastPlay;
        anchors.show();

        lastAnchor = anchors.filter('.tabOn');
        lastPlay = $(lastAnchor.attr('href'));

        playDivs.hide();
        lastPlay.show();

        anchors.click(function(){
            var currentAnchor = $(this);
            var currentPannel = $(currentAnchor.attr('href'));

            lastAnchor.removeClass('tabOn');
            currentAnchor.addClass('tabOn');

            lastPlay.hide();
            currentPannel.show(); 

            lastAnchor = currentAnchor;
            lastPlay = currentPannel;
            return false;


        });

    });


    //tabslide
    var slide1 = $('.tabbox>ul.sslide1');
    var slide2 = $('.tabbox>ul.sslide2'); 
    
    var slideListWidth1 = $('.tabbox>ul>li').width();

    var current = 0;

    $(".con2left").mouseenter(function(){

        $(".con2left").attr('src','./img/con2_arrow_left2.svg');
        $(".con2right").attr('src','./img/con2_arrow_right.svg');   
    })
    $(".con2left").mouseleave(function(){
    
        $(".con2left").attr('src','./img/con2_arrow_left.svg');
        $(".con2right").attr('src','./img/con2_arrow_right.svg');
    })

    $(".con2right").mouseenter(function(){

        $(".con2left").attr('src','./img/con2_arrow_left.svg');
        $(".con2right").attr('src','./img/con2_arrow_right2.svg');   
    })
    $(".con2right").mouseleave(function(){
    
        $(".con2left").attr('src','./img/con2_arrow_left.svg');
        $(".con2right").attr('src','./img/con2_arrow_right.svg');
    })

    //오른쪽에서 왼쪽으로 이동
    function con2right(){
        slide1.stop().animate({left:-slideListWidth1},500,function(){
            $('ul.sslide1>li:first').insertAfter('ul.sslide1>li:last');
            slide1.css('left',0);
        });
    }

    //왼쪽에서 오른쪽으로 이동
    function con2left(){
        $('ul.sslide1>li:last').insertBefore('ul.sslide1>li:first');
        slide1.css('left',-slideListWidth1);
        slide1.animate({left:0},400);
    }

    $('.con2left').click(function(){
        con2left();
    });

    $('.con2right').click(function(){
        con2right();
    });
    // slide1 end //



    //오른쪽에서 왼쪽으로 이동
    function con2right2(){
        slide2.stop().animate({left:-slideListWidth1},400,function(){
            $('ul.sslide2>li:first').insertAfter('ul.sslide2>li:last');
            slide2.css('left',0);
        });
    }

    //왼쪽에서 오른쪽으로 이동
    function con2left2(){
        $('ul.sslide2>li:last').insertBefore('ul.sslide2>li:first');
        slide2.css('left',-slideListWidth1);
        slide2.animate({left:0},400);
    }

    $('#con2left2').click(function(){
        con2left2();
    });

    $('#con2right2').click(function(){
        con2right2();
    });
    // slide2 end //


    
});