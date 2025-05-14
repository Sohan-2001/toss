function tossCoin() {
    const tosserOne = document.getElementById('tosser-one').value.trim();
    const tosserTwo = document.getElementById('tosser-two').value.trim();
    const coin = document.getElementById('coin');
    const sideOne = document.getElementById('side-one');
    const sideTwo = document.getElementById('side-two');

    // Validate inputs
    if (!tosserOne || !tosserTwo) {
        alert('Please enter both names!');
        return;
    }

    // Update coin sides with names
    sideOne.textContent = tosserOne;
    sideTwo.textContent = tosserTwo;

    // Add toss animation
    coin.classList.add('toss-animation');
    coin.style.pointerEvents = 'none'; // Disable clicks during animation

    // Randomly decide winner
    const isTosserOne = Math.random() > 0.5;

    // Rotate coin to show winner
    setTimeout(() => {
        coin.style.transform = isTosserOne ? 'rotateY(0deg)' : 'rotateY(180deg)';
        coin.classList.remove('toss-animation');
        coin.style.pointerEvents = 'auto'; // Re-enable clicks for next toss
    }, 1500); // Match animation duration
}
