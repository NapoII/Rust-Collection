const switchInput = document.getElementById('switchInput');
    const switchLabel = document.getElementById('switchLabel');

    let currentState = 'a'; // Initial state

    switchInput.addEventListener('change', function () {
        if (this.checked) {
            currentState = 'b';
        } else {
            currentState = 'a';
        }
        updateSwitchLabel();
    });

    function updateSwitchLabel() {
        if (currentState === 'a') {
            switchLabel.textContent = 'Quarry';
        } else {
            switchLabel.textContent = 'GiantExcavator';
        }
    }
    // Initial label update
    updateSwitchLabel();

