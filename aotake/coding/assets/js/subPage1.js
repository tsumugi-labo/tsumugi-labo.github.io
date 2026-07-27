$(function(){

    $("#contents #tab1").siblings().hide();

    $("#buttons a").on("click",function(){

        $("#contents .baba").hide();
        $("#contents .yotuya").hide();
        $("#contents .kagura").hide();
        $($(this).attr("href")).show();

        $("#buttons a").removeClass("current");
        $(this).addClass("current");
        
        return false;
    });
});
