
let count = 0;

const counterValue = document.getElementById("counter-value");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

function updateCounter() {
    counterValue.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
    }
    updateCounter();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

updateCounter();


const previewInput = document.getElementById("preview-input");
const previewText = document.getElementById("preview-text");
const charCount = document.getElementById("char-count");
const clearButton = document.getElementById("clear-preview");

function updatePreview() {

    const text = previewInput.value;

    if (text === "") {
        previewText.textContent = "Your text will appear here...";
    } else {
        previewText.textContent = text;
    }

    charCount.textContent = text.length;
}

previewInput.addEventListener("input", updatePreview);

clearButton.addEventListener("click", function () {

    previewInput.value = "";

    updatePreview();

    previewInput.focus();

});

updatePreview();


const imageChoice = document.getElementById("image-choice");
const selectedImage = document.getElementById("selected-image");
const imageCaption = document.getElementById("image-caption");

const images = {
    cat1: {
        src: "images/cat1.png",
        alt: "Fluffy Ragdoll cat with blue eyes",
        caption: "Ragdoll Cat - Fluffy cat with blue eyes."
    },

    cat2: {
        src: "images/cat2.png",
        alt: "Hairless Sphynx cat",
        caption: "Sphynx Cat - A unique hairless cat."
    },

    cat3: {
        src: "images/cat3.png",
        alt: "Fluffy orange Persian cat",
        caption: "Persian Cat - Fluffy orange cat."
    }
};

function updateImage() {
    const choice = imageChoice.value;
    const image = images[choice];

    selectedImage.src = image.src;
    selectedImage.alt = image.alt;
    imageCaption.textContent = image.caption;
}

imageChoice.addEventListener("change", updateImage);

updateImage();



const keyInput = document.getElementById("key-input");
const keyDisplay = document.getElementById("key-display");
const keyResult = document.getElementById("key-result");

keyInput.addEventListener("keydown", function(event) {

    keyDisplay.textContent = "Last key: " + event.key;

    if (event.key === "Enter") {
        event.preventDefault();

        const text = keyInput.value.trim();

        if (text !== "") {
            keyResult.textContent = "You entered: " + text;
        } else {
            keyResult.textContent = "Please enter some text.";
        }
    }

    if (event.key === "Escape") {
        event.preventDefault();

        keyInput.value = "";
        keyResult.textContent = "Input cleared.";
    }

});


const focusCard = document.getElementById("focus-card");
const cardInstruction = document.getElementById("card-instruction");

let isHovered = false;
let isFocused = false;

function updateCard() {
    const isActive = isHovered || isFocused;

    focusCard.classList.toggle("active", isActive);

    if (isActive) {
        cardInstruction.textContent =
            "The card is active!";
    } else {
        cardInstruction.textContent =
            "Hover over this card or focus it using Tab.";
    }
}

focusCard.addEventListener("mouseenter", function() {
    isHovered = true;
    updateCard();
});

focusCard.addEventListener("mouseleave", function() {
    isHovered = false;
    updateCard();
});

focusCard.addEventListener("focus", function() {
    isFocused = true;
    updateCard();
});

focusCard.addEventListener("blur", function() {
    isFocused = false;
    updateCard();
});


