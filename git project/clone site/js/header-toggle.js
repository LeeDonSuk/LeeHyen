
$(function () {
    $(".dropdown-items").mouseover(function () {
        $(".dropdown-frame").stop().slideDown("fast",
            function () {
                $(".dropdown-items >ul >li").stop().slideDown("slow");
            }
        );

    });
    $(".dropdown-items").mouseleave(function () {
        $(".dropdown-items >ul >li").stop().slideUp(function () {
            $(".dropdown-frame").stop().slideUp();
        });
    });
});


$(function(){
    $('.menu-ico').click(function(){
        $('.mobile-dropdown').css('display','block')
        $('.menu-close').css('display','block')
        $('.menu-ico').css('opacity','0').css('display','none')
    });
    $('.menu-close').click(function(){
        $('.mobile-dropdown').css('display','none')
        $('.menu-close').css('display','none')
        $('.menu-ico').css('display','block').css('opacity','1')
    });

});