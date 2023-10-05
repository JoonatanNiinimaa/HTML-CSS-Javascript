document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.querySelector('.video');
  const hiddenVideo = document.querySelector('.hidden-video');

  videoContainer.addEventListener('mouseenter', () => {
    hiddenVideo.play(); // Play the video on hover
  });

  videoContainer.addEventListener('mouseleave', () => {
    hiddenVideo.pause(); // Pause the video when the mouse leaves
  });
});

function alertBox() {
  alert("Thanks for clicking me :)");

}
class Answer {
  constructor(pizza, customPizza) {
    this.pizza = pizza;
    this.customPizza = customPizza;
  }

  toString() {
    let result = "";
    if (this.pizza.trim() !== "") {
      result += `Topping: ${this.pizza}`;
    }
    if (this.customPizza.trim() !== "") {
      if (result !== "") {
        result += ", ";
      }
      result += `Custom topping: ${this.customPizza}`;
    }
    return result;
  }
}

const answerList = [];
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("pizzaForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const pizzaRadioButtons = document.getElementsByName("pizza");
  let selectedPizza = "";
  for (const radioButton of pizzaRadioButtons) {
    if (radioButton.checked) {
      selectedPizza = radioButton.value;
      break;
    }
  }

  const customPizzaTextArea = document.getElementById("kysely");
  const customPizzaText = customPizzaTextArea.value;

  const newAnswer = new Answer(selectedPizza, customPizzaText);
  answerList.push(newAnswer);

  // Display the answers
  displayAnswers();
  resetForm();
});
});

function displayAnswers() {
  const answersListElement = document.getElementById("answers");
  answersListElement.innerHTML = "";

  answerList.forEach((answer, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${answer.toString()}`;
    answersListElement.appendChild(listItem);
  });
}

function resetForm() {
  document.getElementById("pizzaForm").reset();
}


document.addEventListener("DOMContentLoaded", function () {
const spinSquare = document.getElementById("spinSquare");
const spinButton = document.getElementById("spinButton");

spinButton.addEventListener("click", function () {
  // Toggle the 'spin-animation' class on the square
  spinSquare.classList.toggle("spin-animation");
});
});

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    // Assuming you have a div with id "pdfContainer" to display the PDF
    const cvButton = document.getElementById("pdfContainer");
    cvButton.innerHTML = '<object data="assets/files/Joonatan_Niinimaa.pdf" type="application/pdf" width="100%" height="100%""></object>';
  }
  xhttp.open("GET", "assets/files/Joonatan_Niinimaa.pdf");
  xhttp.responseType = "blob"; // Set responseType to "blob" for binary data (PDF)
  xhttp.send();
}
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();


// JavaScript to change the color of the clock when the button is pressed
document.getElementById("timer").addEventListener("click", function() {
  const clock = document.getElementById("clock");
  clock.style.color = "black"; // Change the color to blue
});
}
