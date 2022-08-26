$(function(){

    /* sub4 갯수 */

    var videoL = $('.video_bottom > div').length;

    $('.video_num').html(videoL);

    /* console.log(videoL); */

    var programL = $('.program_bottom > div').length;

    $('.program_num').html(programL);


});