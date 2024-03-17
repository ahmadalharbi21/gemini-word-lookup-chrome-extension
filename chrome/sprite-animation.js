const spriteContainer = document.getElementById('sprite-container');
const spriteWidth = 480;
const spriteHeight = 360;
const totalFrames = 19;
let currentFrame = 0;

// Get the toggle switch element
const toggleSwitch = document.getElementById('toggle-container');

// Add event listener to the toggle switch
toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        spriteContainer.style.display = 'block';
    } else {
        spriteContainer.style.display = 'none';
    }
});

// Existing code for changing the picture when pressing the Control key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Control') {
        currentFrame = (currentFrame + 2) % totalFrames;
        const xPosition = currentFrame * spriteWidth;
        spriteContainer.style.backgroundPosition = `-${xPosition}px 0`;
    }
});