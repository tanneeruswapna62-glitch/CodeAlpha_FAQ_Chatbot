const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const faqs = [
    {
        keywords: ["hello", "hi", "hey"],
        answer: "Hello! Welcome to our FAQ Chatbot. 😊"
    },
    {
        keywords: ["name", "who are you"],
        answer: "I am an FAQ Chatbot created using HTML, CSS and JavaScript."
    },
    {
        keywords: ["help", "support"],
        answer: "I am here to help! Please ask me about our services, contact or working hours."
    },
    {
        keywords: ["hours", "timing", "working hours"],
        answer: "Our working hours are 9 AM to 6 PM."
    },
    {
        keywords: ["contact", "email", "phone"],
        answer: "You can contact our support team at support@example.com."
    },
    {
        keywords: ["service", "services"],
        answer: "We provide customer support and information about our services."
    },
    {
        keywords: ["price", "cost", "payment"],
        answer: "For pricing and payment information, please contact our support team."
    },
    {
        keywords: ["thank", "thanks"],
        answer: "You're welcome! Have a great day. 😊"
    },
    {
        keywords: ["bye", "goodbye"],
        answer: "Goodbye! Thank you for chatting with me. 👋"
    }
];

function addMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotAnswer(question) {
    const text = question.toLowerCase().trim();

    for (const faq of faqs) {
        if (faq.keywords.some(keyword => text.includes(keyword))) {
            return faq.answer;
        }
    }

    return "Sorry, I don't know the answer to that question. Please try asking about our services, contact details or working hours.";
}

function sendMessage() {
    const question = userInput.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user-message");

    const answer = getBotAnswer(question);
    addMessage(answer, "bot-message");

    userInput.value = "";
    userInput.focus();
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});