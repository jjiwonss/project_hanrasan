$(function(){

    /* var maintitle = $('.main_title');
    var mainsub = $('.main_title > li > ul');

    var subtitle = $('.sub_title')
    var subnav = $('.sub_title > li > ul')

    mainsub.hide();

    maintitle.click(function(){

        mainsub.slideToggle(
            function(){mainsub.addClass('.main_title')}
            )

    });

    subnav.hide();

    subtitle.click(function(){

        subnav.slideToggle(
            function(){subnav.addClass('.sub_title')}
            )

    }); */


    $(document).ready(function(){

        btn = 1;
    
        $('.main_title').click(function(){
            if(btn == 1){ 
                $('.main_title > li > ul').fadeIn(); 
                btn = 0; 
            }else{ 
                $('.main_title > li > ul').fadeOut(); 
                btn = 1; 
            };
        });
    
    });

    $(document).ready(function(){

        btn = 1;
    
        $('.sub_title').click(function(){
            if(btn == 1){ 
                $('.sub_title > li > ul').fadeIn(); 
                btn = 0; 
            }else{ 
                $('.sub_title > li > ul').fadeOut(); 
                btn = 1; 
            };
        });
    
    });
});