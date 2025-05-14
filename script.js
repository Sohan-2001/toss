let userCount = 2; // Start with 2 users
const maxUsers = 6;

function addUser() {
    if (userCount >= maxUsers) return;

    userCount++;
    const inputSection = document.getElementById('input-section');
    const newInput = document.createElement('div');
    newInput.className = 'player';
    newInput.innerHTML = `<input type="text" id="tosser-${userCount}" placeholder="Tosser ${userCount}">`;
    inputSection.appendChild(newInput);

    // Update shape
    updateShape();

    // Disable add user button if max reached
    document.getElementById('add-user').disabled = userCount === maxUsers;
}

function updateShape() {
    const shape = document.getElementById('shape');
    const shapeClasses = ['coin', 'triangle', 'square', 'pentagon', 'hexagon'];
    const currentShape = shapeClasses[userCount - 2] || 'coin';

    // Remove all shape classes and add the current one
    shape.className = 'shape ' + currentShape;

    // Update sides with user names
    shape.innerHTML = '';
    for (let i = 1; i <= userCount; i++) {
        const name = document.getElementById(`tosser-${i}`).value.trim() || `Tosser ${i}`;
        const side = document.createElement('div');
        side.className = 'side';
        side.id = `side-${i}`;
        side.textContent = name;
        shape.appendChild(side);
    }
}

function tossShape() {
    // Validate inputs
    for (let i = 1; i <= userCount; i++) {
        const name = document.getElementById(`tosser-${i}`).value.trim();
        if (!name) {
            alert('Please enter all names!');
            return;
        }
    }

    // Update shape with current names
    updateShape();

    const shape = document.getElementById('shape');

    // Add spin animation
    shape.classList.add('spin-animation');
    shape.style.pointerEvents = 'none'; // Disable clicks during animation

    // Randomly select winner
    const winnerIndex = Math.floor(Math.random() * userCount) + 1;
    const rotations = [0, 180, 120, 90, 72, 60]; // Angles for each shape (2 to 6 sides)
    const angle = rotations[userCount - 2] * (winnerIndex - 1);

    // Rotate shape to show winner
    setTimeout(() => {
        shape.style.transform = `rotateY(${angle}deg)`;
        shape.classList.remove('spin-animation');
        shape.style.pointerEvents = 'auto'; // Re-enable clicks for next toss
    }, 1500); // Match animation duration
}

// Initialize shape on page load
updateShape();
