function tossCoin() {
    const headPlayer = document.getElementById('head-player').value.trim();
    const tailPlayer = document.getElementById('tail-player').value.trim();
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
    const tossSound = document.getElementById('toss-sound');
    const resultSound = document.getElementById('result-sound');

    // Validate inputs
    if (!headPlayer || !tailPlayer) {
        result.textContent = 'Please enter names for both players!';
        result.classList.add('show');
        return;
    }

    // Reset previous result
    result.textContent = '';
    result.classList.remove('show');

    // Play toss sound
    tossSound.currentTime = 0; // Reset sound to start
    tossSound.play().catch(error => {
        console.error('Error playing toss sound:', error);
    });

    // Add toss animation
    coin.classList.add('toss-animation');

    // Randomly decide Heads or Tails
    const isHeads = Math.random() > 0.5;
    const winner = isHeads ? headPlayer : tailPlayer;
    const outcome = isHeads ? 'Heads' : 'Tails';

    // Rotate coin to show result
    setTimeout(() => {
        coin.style.transform = isHeads ? 'rotateY(0deg)' : 'rotateY(180deg)';
        coin.classList.remove('toss-animation');

        // Display result
        result.textContent = `${winner} wins! (Coin landed on ${outcome})`;
        result.classList.add('show');

        // Play result sound
        resultSound.currentTime = 0; // Reset sound to start
        resultSound.play().catch(error => {
            console.error('Error playing result sound:', error);
        });
    }, 1500); // Match animation duration
}
