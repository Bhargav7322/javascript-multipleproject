function showMessageContent(message) {
  const messageContent = document.querySelector(".message-content");
  messageContent.textContent = `"${message}" - Your Message is Delivered!`;
}

function showInvalidmessage() {
  const invalidMessage = document.querySelector(".invalid-message");
  invalidMessage.style.display = "block";
  setTimeout(() => {
    invalidMessage.style.display = "none";
  }, 2000);
}

function onSubmitForm(e) {
  e.preventDefault();

  const messageInput = document.querySelector(".message");
  const message = messageInput.value.trim();
  if (message == "") {
    showInvalidmessage();
  } else {
    showMessageContent(message);
    messageInput.value = "";
  }
}

(function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", onSubmitForm);
})();
