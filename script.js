const stages = [
    {
        hint: 'The year we first went to the beach together.',
        pin: '2005',
        photos: ['images/childhood1_1.jpg', 'images/childhood1_2.jpg', 'images/childhood1_3.jpg']
    },
    {
        hint: 'Your birth year.',
        pin: '2010',
        photos: ['images/childhood2_1.jpg', 'images/childhood2_2.jpg', 'images/childhood2_3.jpg']
    },
    {
        hint: 'The last two digits of our house number combined with the day we first met our pet.',
        pin: '4523',
        photos: ['images/childhood3_1.jpg', 'images/childhood3_2.jpg', 'images/childhood3_3.jpg']
    }
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
        showSlideshow(stages[currentStage].photos);
    } else {
        alert('Incorrect PIN. Try again!');
    }
}

function showSlideshow(photos) {
    let slideshowHtml = '<div class="slideshow">';
    photos.forEach(photo => {
        slideshowHtml += `<img src="${photo}" class="slideshow-image">`;
    });
    slideshowHtml += '</div>';
    slideshowHtml += '<button onclick="nextStage()">Next Stage</button>';

    document.getElementById('puzzle-section').innerHTML = slideshowHtml;

    // Add slideshow functionality (automatic transition)
    let currentPhotoIndex = 0;
    const images = document.querySelectorAll('.slideshow-image');
    images[currentPhotoIndex].style.display = 'block';

    setInterval(() => {
        images[currentPhotoIndex].style.display = 'none';
        currentPhotoIndex = (currentPhotoIndex + 1) % images.length;
        images[currentPhotoIndex].style.display = 'block';
    }, 3000); // Change image every 3 seconds
}

function nextStage() {
    currentStage++;
    loadStage();
}

function revealFinalPhoto() {
    document.getElementById('puzzle-section').innerHTML = `
        <h2>You found all the keys!</h2>
        <img src="images/final_photo.jpg" alt="Final Photo">
    `;
    document.getElementById('background-music').src = 'audio/background2.mp3';
}

window.onload = loadStage;

