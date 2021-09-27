var input = document.querySelector("#phone"),
  iti = intlTelInput(input, {
    initialCountry: "in",
    nationalMode: !0,
    autoPlaceholder: "polite",
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.11/js/utils.js",
  });
function readURL(i) {
  if (i.files && i.files[0]) {
    var t = new FileReader();
    (t.onload = function (t) {
      $(".file-upload-image").attr("src", t.target.result),
        $(".file-upload-content").show(),
        $(".image-title").html(i.files[0].name);
    }),
      t.readAsDataURL(i.files[0]);
  } else removeUpload();
}
function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone()),
    $(".image-upload-wrap").show();
}
(window.iti = iti),
  $(document).on("click", ".input-button-next", function () {
    $(this).closest("fieldset").removeClass("active"),
      $(this).closest("fieldset").next("fieldset").addClass("active"),
      $(".progress-bar")
        .find("li.is-active")
        .next("li")
        .addClass("is-active")
        .prevAll("li.is-active")
        .addClass("is-complete");
  }),
  $(document).on("click", ".input-button-back", function () {
    $(this).closest("fieldset").removeClass("active"),
      $(this).closest("fieldset").prev("fieldset").addClass("active"),
      $(".progress-bar")
        .find("li:not(.is-active)")
        .prev("li.is-active")
        .removeClass("is-active"),
      $(".progress-bar")
        .find("li:not(.is-active)")
        .prev("li.is-active.is-complete")
        .removeClass("is-complete");
  }),
  $(document).on("click", ".input-button-back.finish", function () {
    $(this).closest("fieldset").removeClass("active"),
      $(this).closest("fieldset").prev("fieldset").addClass("active"),
      $(".progress-bar li:last-child.is-active")
        .removeClass("is-active is-complete")
        .prev("li.is-active.is-complete")
        .removeClass("is-complete");
  }),
  $(document).on("click", ".onclick-load", function () {
    $(".modal-wrap").show(),
      setTimeout(function () {
        $(".modal-wrap").hide();
      }, 500);
  }),
  $(document).on("click", ".onclick-load2", function (i) {
    $(".modal-wrap").show(),
      setTimeout(function () {
        location.href = "finish.html";
      }, 500);
  }),
  $(document).on("click", ".input-button-next.last", function () {
    $(this).closest("fieldset").addClass("active");
  }),
  $(document).ready(function () {
    function i() {
      $(window).width() < 1112
        ? ($(document).on("click touch", ".info-icon", function () {
            let i = $(this).data("tooltip");
            $(".tooltip-modal").fadeIn(), $(".tooltip p").html(i);
          }),
          $(document).on("click touch", ".close-tooltip", function () {
            $(".tooltip-modal").hide(), $(".tooltip p").empty();
          }))
        : $(document).on("click", ".info-icon", function (i) {
            i.preventDefault();
          });
    }
    $(window).on("resize", function (t) {
      i();
    }),
      i();
  });
