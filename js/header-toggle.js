document.addEventListener('DOMContentLoaded', function() {
    
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
        //
        //
        //
        //
        //
        //
        $('.menu-ico').click(function () {
            $('.mobile-dropdown').show();
            $('.menu-ico').hide();
            $('.menu-close').show();
        });
    
        $('.menu-close').click(function () {
            $('.mobile-dropdown').hide();
            $('.menu-close').hide();
            $('.menu-ico').show();
        });
    
        $(window).resize(function () {
            if ($(window).width() < 951) {
                $('.mobile-dropdown').hide();
                $('.menu-close').hide();
                $('.menu-ico').show();
            } else {
                $('.menu-ico').hide();
            }
        });
    });
  });

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
    //
    //
    //
    //
    //
    //
    $('.menu-ico').click(function () {
        $('.mobile-dropdown').show();
        $('.menu-ico').hide();
        $('.menu-close').show();
    });

    $('.menu-close').click(function () {
        $('.mobile-dropdown').hide();
        $('.menu-close').hide();
        $('.menu-ico').show();
    });

    $(window).resize(function () {
        if ($(window).width() < 951) {
            $('.mobile-dropdown').hide();
            $('.menu-close').hide();
            $('.menu-ico').show();
        } else {
            $('.menu-ico').hide();
        }
    });
});