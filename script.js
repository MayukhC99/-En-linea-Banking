$(document).ready(function(){

    //Object for storing and tracking jquery navbar objects
    navbar_obj={
        trigger_home: $('.navMenu li:first-child a'),
        trigger_about: $('.navMenu li:nth-child(2) a'),
        trigger_services: $('.navMenu li:nth-child(3) a'),
        trigger_team: $('.navMenu li:nth-child(4) a'),
        trigger_contact: $('.navMenu li:nth-child(5) a')
    }


    //this flag is stored for tracking navbar active class
    let prev_nav_flag = $('.navMenu li:first-child a');

    //for toggling navbar active class when navbar links are clicked
    $(".navMenu li a").click(function(){
        prev_nav_flag.toggleClass('active');
        prev_nav_flag = $(this);
        $(this).toggleClass('active');
    });

    //for toggling navbar active class when triple arrows are clicked
    $("a .container_arrows").click(function(){
        
        prev_nav_flag.toggleClass('active');
        let key= this.className.split(' ')[0];
        prev_nav_flag= navbar_obj[key];
        prev_nav_flag.toggleClass('active');
    });



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


    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function(){
        if ($(window).scrollTop() + $(window).height() > $("#us").offset().top + 50) {
            if ($(".image_about_us").offset().left < 0){
                $(".image_about_us").css({'left': '0px', 'transition': 'all 0.9s ease-in-out'});
                $(".p1").css("animation-play-state", "running");
                $(".slide-up").css({'right': '0px', 'transition': 'all 0.9s ease-in-out'});
                $(".slide-up").css("animation-play-state", "running");
            }
        }

        if (isScrolledIntoView($('.image_about_us'))){
            prev_nav_flag.toggleClass('active');
            prev_nav_flag= navbar_obj['trigger_about'];
            prev_nav_flag.toggleClass('active');
        } else if (isScrolledIntoView($('.home_fake_traversal'))){
            prev_nav_flag.toggleClass('active');
            prev_nav_flag= navbar_obj['trigger_home'];
            prev_nav_flag.toggleClass('active');
        } else if (isScrolledIntoView($('.team_fake_traversal'))){
            prev_nav_flag.toggleClass('active');
            prev_nav_flag= navbar_obj['trigger_team'];
            prev_nav_flag.toggleClass('active');
        } else if (isScrolledIntoView($('.contact_fake_traversal'))){
            prev_nav_flag.toggleClass('active');
            prev_nav_flag= navbar_obj['trigger_contact'];
            prev_nav_flag.toggleClass('active');
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
});