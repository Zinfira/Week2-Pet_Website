$(document).ready(function() {
   $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("change-mode");
    $("dark").fadeIn();
    $("light").hide();

  // }) else ({

    $("button#light").click(function() {
      $("change-mode").removeClass();
      $("change-mode").addClass("body");
      })
    });
});