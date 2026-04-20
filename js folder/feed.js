function toggleText(btn) {
  var card = btn.parentElement;

  var shortText = card.querySelector(".short-text");
  var fullText = card.querySelector(".full-text");

  if (fullText.style.display === "inline") {
    fullText.style.display = "none";
    shortText.style.display = "inline";
    btn.innerHTML = "See more";
  } else {
    fullText.style.display = "inline";
    shortText.style.display = "none";
    btn.innerHTML = "See less";
  }
}