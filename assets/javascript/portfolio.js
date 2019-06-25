$(document).ready(function()
{
    $("#contact").hide();
    $("#portfolio").hide();

    //When clicked, only shows About Me
    $("#aboutClick").on("click", function()
    {
        $("#about").show();
        $("#contact").hide();
        $("#portfolio").hide();
    })

    //When clicked, only shows Contact
    $("#contactClick").on("click", function()
    {
        $("#contact").show();
        $("#about").hide();
        $("#portfolio").hide();
    })

    //When clicked, only shows Portfolio
    $("#portfolioClick").on("click", function()
    {
        $("#portfolio").show();
        $("#contact").hide();
        $("#about").hide();
    })
})