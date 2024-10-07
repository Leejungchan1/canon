$(function(){
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    },function(){
        $(".my").stop().slideUp();
    })
    
    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height : "400px", padding : "20px"},"fast")
    },function(){
        $(".d_wrap").stop().animate({height : "0", padding : "0"},"fast")

    })

    // 슬릭
    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:3000
    });

    $(".main_visual .stop").click(function(){
        if($(this).hasClass("on") == true ){

            $(this).removeClass("on");
            $(".move").slick("slickPlay")

        }else{

            $(this).addClass("on");
            $(".move").slick("slickPause")
        }
    })

    $(".photo").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:2500
    });

    $(".banner").slick({
        dots:true,
        arrows:false,
    });

    $(".banner_wrap .b_play").click(function(){
        if($(this).hasClass("on") == true ){

            $(this).removeClass("on");
            $(".banner").slick("slickPause")

        }else{

            $(this).addClass("on");
            $(".banner").slick("slickPlay")
        }
    })

    $(".viewer").slick({
        dots:true,
        arrows:false,
    });

    $(".viewer_wrap .b_play").click(function(){
        if($(this).hasClass("on") == true ){

            $(this).removeClass("on");
            $(".viewer").slick("slickPause")

        }else{

            $(this).addClass("on");
            $(".viewer").slick("slickPlay")
        }
    })

    $(".store").slick({
        slidesToShow:2,
        slidesToScroll:2,
        arrows:false,
        dots:true,
        autoplay:true
    })

    $(".notice").slick({
        autoplay:true,
        vertical:true,
    })

    $(".main4 .n_stop").click(function(){
        if($(".main4 .n_stop").hasClass("on") == true ){

            $(this).removeClass("on");
            $(".notice").slick("slickPlay");

        }else{

            $(this).addClass("on");
            $(".notice").slick("slickPause");
        }
    })
    




})