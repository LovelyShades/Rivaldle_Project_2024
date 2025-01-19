document.addEventListener('DOMContentLoaded', () => {
    const settingsIcon = document.getElementById('settingsIcon');
    const backgroundMenu = document.getElementById('backgroundMenu');
    const backgroundOptions = document.querySelectorAll('.background-option');

    // Toggle visibility of the background menu
    settingsIcon.addEventListener('click', () => {
        backgroundMenu.style.display = backgroundMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Change the background when an option is clicked
    backgroundOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const selectedBg = event.target.dataset.bg; // Retrieve data-bg attribute
            if (selectedBg) {
                document.body.style.backgroundImage = `url('${selectedBg}')`; // Apply new background
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
            }
            backgroundMenu.style.display = 'none'; // Hide menu after selection
        });
    });
});
