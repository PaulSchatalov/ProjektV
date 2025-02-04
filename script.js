const messages = [
    "Bist du sicher?",
    "Sicher sicher??",
    "Bitte",
    "Denk drüber nach :)",
    "Ich wäre traurig ",
    "Ich wäre sehr traurig",
    "Ich wäre sehr sehr sehr traurig",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "y_page.html";
}
