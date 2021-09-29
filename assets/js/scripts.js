$(document).ready(function () {
  // Hide the div
  $(".tick, .tick2, .tick3").hide();
  // Show the div after 5s
  $(".tick").delay(3000).fadeIn(300);
  $(".tick2").delay(4000).fadeIn(300);
  $(".tick3").delay(5000).fadeIn(300);
});

$(document).on("click", ".next-btn", function () {
  $(this).closest("fieldset").removeClass("active");
  $(this).closest("fieldset").next("fieldset").addClass("active");
});

$(document).on("click", ".expand", function () {
  $(this).closest(".popup").addClass("double");
});

$(document).on("click", ".exit", function () {
  $(this).closest(".popup").removeClass("double");
});
