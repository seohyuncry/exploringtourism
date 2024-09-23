$(document).ready(function(){
    tabletgnb();
    mobilegnb();
    accControl();
});

$(function () {
    // Header GNB Navication
    $(".header .middle").mouseenter(function () {
            $(".nav_bg").slideDown(300);
            $(".header_slider").slideDown(300);
            $(".header_slider").css({ "opacity": "1" })
    });
    $(".nav_bg").mouseleave(function () {
            $(".nav_bg").slideUp(300);
            $(".header_slider").slideUp(300);
    });
});

 // tablet header gnb1
$(document).ready(function(){
    $(".menu > strong").click(function(){
        var submenu = $(this).next("ul");
        if(submenu.is(":visible")){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
});

// tablet header gnb2
function tabletgnb(){
    $(".middle > nav > ul > li > a").click(function(){
        $("#solution").toggleClass("active");
    });
    $("input[type='button']").click(function(){ 
        $("#solution").toggleClass("active"); 
    });

}

// mobile header gnb
function mobilegnb(){
    $(".nav_bg label").click(function(){
        $("#solution").toggleClass("active");
    });
}

// main slide
$(document).ready(function(){
    $('.mainPlus').bxSlider({
        auto: true,
        controls: true,
        page: false,
        wrapperClass: "mainFirst"
    });

});

// tour,tourism,activity page slide
$(document).ready(function(){
    $('.tourcontent').bxSlider({
        auto: true,
        controls: true,
        page: false,
        wrapperClass: "tourFirst",
    });

});


