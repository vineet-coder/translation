var buttonTranslation = document.querySelector("#button");
var userInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var text1 = userInput.value;
  console.log(text1);

  fetch(
    "https://api.funtranslations.com/translate/pirate.json" +
      "?" +
      "text=" +
      text1
  )
    .then((response) => response.json())
    .then((json) => {
      var translation = json.contents.translated;
      outputDiv.innerText = translation;
    });
}

buttonTranslation.addEventListener("click", clickHandler);
