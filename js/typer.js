const type = document.getElementById("type");
//Parameters
const typeSpeed = 80;
const text = "Hello world. My name is Gustavo";
let charIndex = 0;
let stopAnimation = false;

const typeText = () => {
  if (charIndex < text.length && !stopAnimation) {
    type.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typeSpeed);
  }
};

const skip = document.getElementById("skip");
skip.onclick = function() {
  stopAnimation = true;
  type.innerHTML = text;
};
