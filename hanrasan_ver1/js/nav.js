$(function(){

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
    
});
