function handleKeyDown(event) {
    if (event.key === "Enter") {
        var value = event.target.value;
        const boxTerminal = document.getElementById('body-terminal');

        // Make the previous input readonly
        event.target.setAttribute('readonly', true);

        if (value === 'clear') {
            // Clear terminal but maintain input functionality
            boxTerminal.innerHTML = '';
        }

        // Create a new input field
        const newLine = document.createElement('input');
        newLine.type = 'text';
        newLine.className = 'row-terminal-input';  // Ensure consistent styling
        newLine.onkeydown = handleKeyDown;
        newLine.autocomplete = 'off';

        boxTerminal.appendChild(newLine);
        newLine.focus();
    }
}
