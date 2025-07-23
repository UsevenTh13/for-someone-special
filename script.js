const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is my biggest blessing.<br> I love you.";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide the No button
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Create a new button element with love emoji
    const loveButton = document.createElement("button");
    loveButton.innerHTML = "❤️";
    loveButton.style.display = "block";
    loveButton.style.marginTop = "20px";
    loveButton.style.marginLeft = "auto";
    loveButton.style.marginRight = "auto";

    // Add click event to the love button to open flowers/index.html
    loveButton.addEventListener("click", () => {
        window.location.href = "flowers/index.html";
    });

    // Append the love button below the gif
    gif.parentNode.insertBefore(loveButton, gif.nextSibling);
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    // Ubah posisi menjadi absolute saat mouseover
    noBtn.style.position = "absolute";

    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
document.querySelector('#access-form button').addEventListener('click', function(event) {
    const accessCode = document.getElementById('access-code').value.trim().toLowerCase();
    const wrapper = document.querySelector('.wrapper');
    const accessForm = document.getElementById('access-form');

    // Check if the input matches any of the specified names
    const validNames = ['garden','gardenia'];
    if (validNames.includes(accessCode)) {
        wrapper.style.display = 'block';
        accessForm.style.display = 'none';

        // Create a new h1 element with a greeting message
        const greeting = document.createElement('h1');
        greeting.textContent = `Halo ${accessCode.charAt(0).toUpperCase() + accessCode.slice(1)} Imute`;

        // Insert the greeting before the question element
        const questionElement = document.querySelector('.question');
        wrapper.insertBefore(greeting, questionElement);
    } else {
        // Create a new h2 element with a greeting message
        const greeting = document.createElement('h2');
        greeting.textContent = `Halo, salam kenal ${accessCode.charAt(0).toUpperCase() + accessCode.slice(1)}`;

        // Append the greeting to the access form
        accessForm.appendChild(greeting);
    }
});
