const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

const botResponses = [
  "Hello! How can I help?",
  "Hey, that's funny!",
  "Hey, This is a Ravi!",
];

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const botReply =
      botResponses[Math.floor(Math.random() * botResponses.length)];
    addMessage(botReply, "bot");
  }, 1000); // Simulate a delay for the bot response
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
