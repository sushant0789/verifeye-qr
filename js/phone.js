var input = document.querySelector("#phone");
var iti = intlTelInput(input, {
  initialCountry: "in",
  nationalMode: true,
  autoPlaceholder: "polite",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.11/js/utils.js"
});
window.iti = iti;
