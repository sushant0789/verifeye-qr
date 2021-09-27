function readURL(i) {
  if (i.files && i.files[0]) {
    var e = new FileReader();
    (e.onload = function (e) {
      $(".file-upload-image").attr("src", e.target.result),
        $(".file-upload-content").show(),
        $(".image-title").html(i.files[0].name);
    }),
      e.readAsDataURL(i.files[0]);
  } else removeUpload();
}
function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone()),
    $(".image-upload-wrap").show();
}
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
  $(document).on("click", ".video-bg", function () {
    $(this).hide();
    $("#video").show();
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
    $(window).on("resize", function (e) {
      i();
    }),
      i();
  });

("use strict");

const video = document.getElementById("video");

// Get access to the camera!
async function playVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    handleSuccess(stream);
    video.play();
  } catch (e) {
    $("#successMsg").hide();
    $("#errorMsg").show();
    $("#video").hide();
    $(".video-bg").show();
  }
}

// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}
