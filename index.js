//click on mouse detection

var numberOfbuttons = document.querySelectorAll(".drum").length;
for (var x = 0; x < numberOfbuttons; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function () {
    var innerHtml = this.innerHTML;
    makeSound(innerHtml);
    buttnAnimation(innerHtml);
  });
}
//click on keyboard detection
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttnAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "k":
      var kickb = new Audio("sounds/kick-bass.mp3");
      kickb.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(this);
  }
}

function buttnAnimation(currentKey) {
  var activeButtn = document.querySelector("." + currentKey);
  activeButtn.classList.add("pressed");
  setTimeout(function () {
    activeButtn.classList.remove("pressed");
  }, 100);
}
// document.cookie = "item=cake;expires= Sat, 30 Sept 2022 12:00:00 UTC";
