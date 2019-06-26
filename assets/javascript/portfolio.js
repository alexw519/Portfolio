$(document).ready(function()
{
    //Hide everything, and then show the About Me DIv
    $("#about").hide();
    $("#contact").hide();
    $("#portfolio").hide();
    $("#about").show(1000);

    //When clicked, only shows About Me
    $("#aboutClick").on("click", function()
    {
        $("#about").show(2000);
        $("#contact").hide(1000);
        $("#portfolio").hide(1000);
    })

    //When clicked, only shows Contact
    $("#contactClick").on("click", function()
    {
        $("#contact").show(2000);
        $("#about").hide(1000);
        $("#portfolio").hide(1000);
    })

    //When clicked, only shows Portfolio
    $("#portfolioClick").on("click", function()
    {
        $("#portfolio").show(2000);
        $("#contact").hide(1000);
        $("#about").hide(1000);
    })
})