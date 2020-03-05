$(document).ready(function(){
    let prev_nav_flag = $('.navMenu li:first-child a');
    let i = 2;

    $(".p1").css("animation-play-state", "paused");
    $(".slide-up").css("animation-play-state", "paused");

    $("#check").on('click', function() {
        if($("#checkSide").is(":checked")){
            $("#checkSide").prop('checked', false);
        }
        if ($(this).is(":checked")) {
            $('#btnSide').css({ 'margin-left': '100%', 'display': 'inline' });
        } else {
            $('#btnSide').css({ 'display': 'inline', 'margin-left': '0px',  });
        }
    });

    $(window).bind('resize', function() {
        if ($("#check").is(":checked") && $(window).width() <= 968) {
            $("#checkSide").attr('checked', false);
            $('#btnSide').css({ 'margin-left': '100%', 'display': 'none' });
        }
        if ($("#check").is(":checked") && $(window).width() <= 968) {
            $('#btnSide').css({ 'display': 'inline' });
        }
        if ($(window).width() > 968) {
            $('#btnSide').css({ 'margin-left': '0px', 'display': 'inline' });
        }
    });


    $('.carousel').carousel({
        pause: "false"
    });

    $(".navMenu li a").click(function(){
        prev_nav_flag.toggleClass('active');
        prev_nav_flag = $(this);
        $(this).toggleClass('active');
    });

    $("a .container_arrows").click(function(){
        prev_nav_flag.toggleClass('active');
        if($(this).hasClass("ar"))
            prev_nav_flag = $(".navMenu li:nth-child(2) a");
        else if($(this).hasClass("ar1"))
            prev_nav_flag = $(".navMenu li:nth-child(3) a");
        else if($(this).hasClass("ar3"))
            prev_nav_flag = $(".navMenu li:last-child a");
        prev_nav_flag.toggleClass('active');
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

    $("#read1").on('click', function(){
        $("#hide").css({'left': '250px', 'vertical-align': 'middle'});
        $("#hide").html($(".text1").html());
        //var r= $('<input type="button" value="new button"/>');
        //$("#hide").append(r);
    });

    $("#read2").on('click', function(){
        $("#hide").css({'left': '250px', 'vertical-align': 'middle'});
        $("#hide").html($(".text2").html());
    });

    $("#read3").on('click', function(){
        $("#hide").css({'left': '250px', 'vertical-align': 'middle'});
        $("#hide").html($(".text3").html());
    });

    $("#read4").on('click', function(){
        $("#hide").css({'left': '250px', 'vertical-align': 'middle'});
        $("#hide").html($(".text4").html());
    });

    $("#read5").on('click', function(){
        $("#hide").css({'left': '250px', 'vertical-align': 'middle'});
        $("#hide").html($(".text5").html());
    });

    $(".i1").on('click', function(){
        var id = $(this).attr('id');
        var m = id.charAt(4);
        var n = parseInt(m);
        i = n;
    });

    setInterval(function(){
        if(i <= 5){
            document.getElementById('tap-' + (i-1)).checked = false;
            document.getElementById('tap-' + i).checked = true;
        }
        else{
            document.getElementById('tap-5').checked = false;
            i = 1;
            document.getElementById('tap-' + i).checked = true;
        }
        i++;
    },5000);
});