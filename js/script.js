$(document).ready(function () {
    
    // Mini

    $(".menu").click(function () {
        $(".navbar").toggleClass("mini-nav");
        $(".navbar-item").toggleClass("mini-item");
    });

    // Timer

    $('.timer').countTo();

    // To Top

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 200) {
            $(".back").css("visibility", "visible");

        } else {
            $(".back").css("visibility", "hidden");
        }
    });

    $(".back").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 1000)
    });

    // Tabs

    $("input[name='tab']").change(function () {
        var click = $(this).val();

        if (click == "plan1") {
            $("#tabs-1").show();
            $("#tabs-2").hide();
        } else {
            $("#tabs-1").hide();
            $("#tabs-2").show();
        }
    });

});