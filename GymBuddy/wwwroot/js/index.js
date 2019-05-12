//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents


$(document).ready(function () {

    console.log("Hello from me");

    var theForm = $("#theForm");
    theForm.hide;

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("thanks for buying!!!!");
    });

    var productInfo = $(".lesson-props li");
    productInfo.on("click", function () {
        console.log("You clicked on" + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".pop-up-form");

    $loginToggle.on("click", function () {
        $popupForm.toggle();
    });
});

