$(function(){

    //tabmenu

    $('.rightwrap').each(function(){

        var topDiv = $(this);
        var anchors = topDiv.find('.type_tab ul a');
        var playDivs = topDiv.find('div.innerTab');
        var lastAnchor;
        var lastPlay;
        anchors.show();

        lastAnchor = anchors.filter('.tab_on');
        lastPlay = $(lastAnchor.attr('href'));

        playDivs.hide();
        lastPlay.show();

        anchors.click(function(){
            var currentAnchor = $(this);
            var currentPannel = $(currentAnchor.attr('href'));

            lastAnchor.removeClass('tab_on');
            currentAnchor.addClass('tab_on');

            lastPlay.hide();
            currentPannel.show();

            lastAnchor = currentAnchor;
            lastPlay = currentPannel;
            return false;


        });
    });
});