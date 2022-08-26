$(function(){


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