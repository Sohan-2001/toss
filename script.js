function tossCoin() {
    const tosserOne = document.getElementById('tosser-one').value.trim();
    const tosserTwo = document.getElementById('tosser-two').value.trim();
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
    const tossAgain = document.getElementById('toss-again');

    // Validate inputs
    if (!tosserOne || !tosserTwo) {
        result.textContent = 'Please enter both names!';
        result.classList.add('show');
        return;
    }

    // Reset previous result
    result.textContent = '';
    result.classList.remove('show');
    tossAgain.classList.remove('show');

    // Add toss animation
    coin.classList.add('toss-animation');
    coin.style.pointerEvents = 'none'; // Disable clicks during animation

    // Randomly decide Heads or Tails
    const isHeads = Math.random() > 0.5;
    const winner = isHeads ? tosserOne : tosserTwo;
    const outcome = isHeads ? 'Heads' : 'Tails';

    // Rotate coin to show result
    setTimeout(() => {
        coin.style.transform = isHeads ? 'rotateY(0deg)' : 'rotateY(180deg)';
        coin.classList.remove('toss-animation');
        coin.style.pointerEvents = 'auto'; // Re-enable clicks

        // Display result
        result.textContent = `${winner} wins! (${outcome})`;
        result.classList.add('show');
        tossAgain.classList.add('show');
    }, 1500); // Match animation duration
}

function resetToss() {
    const result = document.getElementById('result');
    const tossAgain = document.getElementById('toss-again');
    const coin = document.getElementById('coin');

    // Reset result and button
    result.textContent = '';
    result.classList.remove('show');
    tossAgain.classList.remove('show');
    coin.style.transform = 'rotateY(0deg)'; // Reset coin to Heads
}
