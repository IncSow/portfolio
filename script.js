function goToPage(obj) {
  document.getElementById("background").style.backgroundColor = "black";
  document.body.classList.toggle("transitionning");

  for (let menuImg of document.getElementsByClassName("menu-img")) {
    menuImg.style.opacity = 0;
  }

  setTimeout((location.href = obj.dataset.link), 3000);
}

function removeEffect(txt, textToChange) {
  document.getElementById(textToChange).innerHTML = document
    .getElementById(textToChange)
    .innerHTML.replaceAll("</b>", "")
    .replaceAll("<b>", "");
  let InputText = document.getElementById(textToChange).innerHTML;
  let maxRotation = InputText.length;
  let speed = 500 / maxRotation;
  for (let i = 0; i < maxRotation; i++) {
    speed += 500 / maxRotation;
    setTimeout(() => {
      InputText = document.getElementById(textToChange).innerHTML;
      document.getElementById(textToChange).innerHTML = InputText.slice(0, -1);
      if (i == maxRotation - 1) {
        typewriterEffect(txt, textToChange);
      }
    }, speed);
  }
}

function typewriterEffect(txt, textToChange) {
  let boldMode = false;
  let speed = 500 / txt.length;
  for (let i = 0; i < txt.length; i++) {
    speed += 500 / txt.length;
    setTimeout(function () {
      if (txt.charAt(i) == "<") {
        document.getElementById(textToChange).innerHTML += "<br>";
      } else if (txt.charAt(i) == "+") {
        boldMode = true;
      } else if (txt.charAt(i) == "]") {
        boldMode = false;
      } else if (boldMode) {
        document.getElementById(textToChange).innerHTML += txt.charAt(i).bold();
      } else {
        document.getElementById(textToChange).innerHTML += txt.charAt(i);
      }
    }, speed);
  }
}

function CopyToClipboard() {
  var textToCopy = document.getElementsByClassName("email")[0].textContent;
  navigator.clipboard.writeText(textToCopy);
  copied.style.display = "block";
  copied.style.opacity = 1;
  setTimeout(() => {
    copied.style.opacity = 0;
  }, 1500);
}
