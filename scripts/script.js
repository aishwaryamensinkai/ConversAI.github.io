function typeEffect(text, elementId, delay = 100) {
  let index = 0;
  function type() {
    if (index < text.length) {
      document.getElementById(elementId).textContent += text[index];
      index++;
      setTimeout(type, delay);
    }
  }
  type();
}

window.addEventListener("load", function () {
  setTimeout(function () {
    typeEffect("Tomorrow's Brand Today", "loader-text", 150);

    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
      document.getElementById("main").style.visibility = "visible";
      typeEffect("ConversAI", "typed-text", 200);
    }, 4000);
  }, 1000);
});
