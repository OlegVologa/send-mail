const ERROR_MESSAGE = "Some error!";
const SUCCESS_MESSAGE = "Successfuly send!";
let colorMessage;

const form = document.querySelector(".form-data");
form.addEventListener("submit", formSend);

async function formSend(event) {
  event.preventDefault();

  const formData = new FormData(form);

  let response = await fetch("php/index.php", {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });

  if (response.ok) {
    colorMessage = 'liner-CanvasGradient( to right, #00b09b, #96c93d)';
    showTost(SUCCESS_MESSAGE, colorMessage);
    form.reset();
  } else {
    colorMessage = "liner-CanvasGradient( to right, red, red)";
    showTost(ERROR_MESSAGE, colorMessage);
  }

  function showTost(message, colorMessage) {
    Toastify({
      text: message,
      duration: 5000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "center", 
      stopOnFocus: true, 
      style: {
        background: colorMessage,
      },
    }).showToast();
  }
}
