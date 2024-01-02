const inputText = document.querySelector(".input_text");
const img = document.querySelector(".img");

const qrFunc = () => {
  if (inputText.value == "") {
    alert("You must pass in a text or URL");
  } else {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputText.value;
  }
};

document.querySelector(".btn").addEventListener("click", qrFunc);
