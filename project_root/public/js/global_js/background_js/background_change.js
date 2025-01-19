document.addEventListener('DOMContentLoaded', () => {
    const settingsIcon = document.getElementById('settingsIcon');
    const backgroundMenu = document.getElementById('backgroundMenu');
    const backgroundOptions = document.querySelectorAll('.background-option');
    const resetBackgroundBtn = document.getElementById('resetBackgroundBtn'); // Reset button
    const defaultBackground = '/_images/backgrounds/default.jpg'; // Default background path
    const loader = document.getElementById('loader'); // Loader element

    // Preload background images
    const preloadImages = (images) => {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };

    // Background options to preload
    const backgroundImages = [
        '/_images/backgrounds/default.jpg',
        '/_images/backgrounds/image (1).jpg',
        '/_images/backgrounds/image (2).jpg',
        '/_images/backgrounds/image (3).jpg',
        '/_images/backgrounds/image (4).jpg',
        '/_images/backgrounds/image (5).jpg',
        '/_images/backgrounds/image (6).jpg',
        '/_images/backgrounds/image (7).jpg',
        '/_images/backgrounds/image (8).jpg'
    ];

    // Preload background images
    preloadImages(backgroundImages);

    // Toggle visibility of the background menu
    settingsIcon.addEventListener('click', () => {
        backgroundMenu.style.display = backgroundMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Change the background when an option is clicked
    backgroundOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const selectedBg = event.target.dataset.bg; // Retrieve data-bg attribute
            if (selectedBg) {
                // Wait until the image is fully loaded before changing the background
                const img = new Image();
                img.src = selectedBg;

                img.onload = () => {
                    // Apply the new background image to both loader and body
                    document.body.style.backgroundImage = `url('${selectedBg}')`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';

                    loader.style.backgroundImage = `url('${selectedBg}')`; // Set loader background

                    // Remove the default background only after the new one is loaded
                    document.body.classList.add('background-loaded'); 

                    // Save the selected background to localStorage
                    localStorage.setItem('selectedBackground', selectedBg);
                };
            }
            backgroundMenu.style.display = 'none'; // Hide menu after selection
        });
    });

    // Apply the stored background if it exists
    const storedBackground = localStorage.getItem('selectedBackground');
    if (storedBackground) {
        const img = new Image();
        img.src = storedBackground;
        img.onload = () => {
            document.body.style.backgroundImage = `url('${storedBackground}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';

            loader.style.backgroundImage = `url('${storedBackground}')`; // Set loader background

            // Remove the default background only after the new one is loaded
            document.body.classList.add('background-loaded');
        };
    } else {
        // Set loader to default background if no stored background
        loader.style.backgroundImage = `url('${defaultBackground}')`;
    }

    // Wait for the window to load all content (images, styles, etc.)
    window.onload = function() {
        // Hide the loader and show the page content
        loader.style.display = 'none';
        document.getElementById('content').style.display = 'block';
    };

    // Reset background button functionality
    resetBackgroundBtn.addEventListener('click', () => {
        // Remove the stored background from localStorage
        localStorage.removeItem('selectedBackground'); // Clear the stored background

        // Optionally, trigger a reload to reset the page as it would be on initial load
        location.reload(); // This will force the page to load fresh, with no background image set
    });
});
