$(function(){

    //tabmenu

    /* each()문은 선택한 요소가 여러개일 때 각각의 요소에 대하여 반복하여 함수를 실행시킴. */
    $('.rightwrap').each(function(){

        var topDiv = $(this);
        var anchors = topDiv.find('.type_tab ul a'); //탭메뉴
        var playDivs = topDiv.find('div.innerTab'); //이미지슬라이드
        var lastAnchor; /* 마지막으로 클릭된 */
        var lastPlay; /* 마지막으로 보여지는 이미지 */
        anchors.show();

        lastAnchor = anchors.filter('.tab_on'); //filter는 요소를 걸러줌;
        lastPlay = $(lastAnchor.attr('href')); // attr은 속성중에서 ~찾는 찾은걸 lastplay 라고 해~

        playDivs.hide();
        lastPlay.show();

        anchors.click(function(){
            var currentAnchor = $(this); //마우스로 눌려진 대상
            var currentPannel = $(currentAnchor.attr('href'));

            lastAnchor.removeClass('tab_on'); //온 해제
            currentAnchor.addClass('tab_on'); //해당 앵커 활성화

            lastPlay.hide(); //마지막에 보여진 패널 감추기
            currentPannel.show(); //현재 패널 보이게

            lastAnchor = currentAnchor;
            lastPlay = currentPannel;
            return false;


        });
    });
});