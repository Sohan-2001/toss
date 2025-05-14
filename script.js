function tossCoin() {
    const tosserOne = document.getElementById('tosser-one').value.trim();
    const tosserTwo = document.getElementById('tosser-two').value.trim();
    const coin = document.getElementById('coin');
    const sideOne = document.getElementById('side-one');
    const sideTwo = document.getElementById('side-two');
    const tossAgain = document.getElementById('toss-again');

    // Validate inputs
    if (!tosserOne || !tosserTwo) {
        alert('Please enter both names!');
        return;
    }

    // Update coin sides with names
    sideOne.textContent = tosserOne;
    sideTwo.textContent = tosserTwo;

    // Hide toss again button
    tossAgain.classList.remove('show');

    // Add toss animation
    coin.classList.add('toss-animation');
    coin.style.pointerEvents = 'none'; // Disable clicks during animation

    // Randomly decide winner
    const isTosserOne = Math.random() > 0.5;

    // Rotate coin to show winner
    setTimeout(() => {
        coin.style.transform = isTosserOne ? 'rotateY(0deg)' : 'rotateY(180deg)';
        coin.classList.remove('toss-animation');
        coin.classList.add('result'); // Center the coin
        coin.style.pointerEvents = 'none'; // Keep disabled to show result
        tossAgain.classList.add('show');
    }, 1500); // Match animation duration
}

function resetToss() {
    const coin = document.getElementById('coin');
    const tossAgain = document.getElementById('toss-again');

    // Reset coin position and state
    coin.classList.remove('result');
    coin.style.transform = 'rotateY(0deg)';
    coin.style.pointerEvents = 'auto';
    tossAgain.classList.remove('show');
}
