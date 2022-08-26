$(function(){

    $(document).ready(function(){

        btn = 1;
    
        $('.site').click(function(){
            if(btn == 1){ 
                $('.subsite').fadeIn(); 
                btn = 0; 
            }else{ 
                $('.subsite').fadeOut(); 
                btn = 1; 
            };
        });
    
    });


    $('#top_btn>a').hide();

    $(window).scroll(function() {
        if($(this).scrollTop() > 600){
            $('#top_btn>a').fadeIn();
        } else{
            $('#top_btn>a').fadeOut();
        }
    });

    $('#top_btn>a').click(function(){ 
        $('html,body').animate({scrollTop : 0},400);
        return false;
    });



});