const stages = [
    { hint: 'The year we first went to the beach together.', pin: '2005' },
    { hint: 'Your birth year.', pin: '2010' },
    { hint: 'The last two digits of our house number combined with the day we first met our pet.', pin: '4523' }
];

let currentStage = 0;

function loadStage() {
    if (currentStage < stages.length) {
        const stage = stages[currentStage];
        document.getElementById('puzzle-section').innerHTML = `
            <p>${stage.hint}</p>
            <input type="text" id="pin-input" maxlength="4">
            <button onclick="checkPin()">Submit</button>
        `;
    } else {
        revealFinalPhoto();
    }
}

function checkPin() {
    const input = document.getElementById('pin-input').value;
    if (input === stages[currentStage].pin) {
        currentStage++;
        loadStage();
    } else {
        alert('Incorrect PIN. Try again!');
    }
}

function revealFinalPhoto() {
    document.getElementById('puzzle-section').innerHTML = `
        <h2>You found all the keys!</h2>
        <img src="images/final_photo.jpg" alt="Final Photo">
    `;
    document.getElementById('background-music').src = 'audio/background2.mp3';
}

window.onload = loadStage;
