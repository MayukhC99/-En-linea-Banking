$(document).ready(function(){
    let prev_nav_flag = $('.navMenu li:first-child a');
    let x_axis = $(".i3").position().left + $(".i3 img").position().left;
    var currentMousePos = { x: -1, y: -1 };

    $(".p1").css("animation-play-state", "paused");
    $(".slide-up").css("animation-play-state", "paused");

    $(window).bind('resize', function() {
        $("#text1").height($(".i1 img").height());
        $("#text2").height($(".i2 img").height());
        $("#text3").height($(".i3 img").height());
        $("#text4").height($(".i4 img").height());
        $("#text5").height($(".i5 img").height());
    });


    $(".i1").mouseenter(function() {
            $("#text1").slideDown(300);
            $("#text1").width($(".i1 img").width());
     }).mouseleave(function(){
        $("#text1").stop(true);
        $("#text1").slideUp(300);
    });

    $(".i2").mouseenter(function() {
        $("#text2").slideDown(300);
        $("#text2").width($(".i2 img").width());
    }).mouseleave(function(){
        $("#text2").stop(true);
        $("#text2").slideUp(300);
    });

    $(".i3").mousemove(function(event) {
        currentMousePos.x = event.pageX;
        if((currentMousePos.x > x_axis && currentMousePos.x < x_axis + $(".i3 img").width())){
            $("#text3").slideDown(300);
            $("#text3").width($(".i3 img").width() + 2);
        }
        else{
            $("#text3").stop(true);
            $("#text3").slideUp(300);
        }
    });

    $(".i4").mouseenter(function() {
        $("#text4").slideDown(300);
        $("#text4").width($(".i4 img").width());
    }).mouseleave(function(){
        $("#text4").stop(true);
        $("#text4").slideUp(300);
    });

    $(".i5").mouseenter(function() {
        $("#text5").slideDown(300);
        $("#text5").width($(".i5 img").width());
    }).mouseleave(function(){
        $("#text5").stop(true);
        $("#text5").slideUp(300);
    });


    $('.carousel').carousel({
        pause: "false"
    });

    $(".navMenu li a").click(function(){
        prev_nav_flag.toggleClass('active');
        prev_nav_flag = $(this);
        $(this).toggleClass('active');
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() + $(window).height() > $("#us").offset().top + 50) {
            if ($(".image_about_us").offset().left < 0){
                $(".image_about_us").css({'left': '0px', 'transition': 'all 0.9s ease-in-out'});
                $(".p1").css("animation-play-state", "running");
                $(".slide-up").css({'right': '0px', 'transition': 'all 0.9s ease-in-out'});
                $(".slide-up").css("animation-play-state", "running");
            }
        }
    });
    $(window).trigger( "scroll" );
});