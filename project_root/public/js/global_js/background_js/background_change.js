document.addEventListener('DOMContentLoaded', () => {
    const settingsIcon = document.getElementById('settingsIcon');
    const backgroundMenu = document.getElementById('backgroundMenu');
    const backgroundOptions = document.querySelectorAll('.background-option');
    const resetBackgroundBtn = document.getElementById('resetBackgroundBtn'); // Reset button
    const defaultBackground = '/_images/backgrounds/default.jpg'; // Default background path
    const loader = document.getElementById('loader'); // Loader element
    const body = document.body; // Body element
    const content = document.getElementById('content'); // Page content
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.className = 'dark-overlay';
    body.appendChild(backgroundOverlay);

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

    // Hide the body and content initially, only show once the background is loaded
    body.style.visibility = 'display: none'; // Set visibility instead of display: none
    loader.style.display = 'block'; // Make sure the loader is visible during loading

    // Toggle visibility of the background menu
    settingsIcon.addEventListener('click', () => {
        backgroundMenu.style.display = backgroundMenu.style.display === 'block' ? 'none' : 'block';
        if (backgroundMenu.style.display == 'block') {
            backgroundOverlay.style.display = 'block'
            document.body.style.overflowY = 'hidden';
            document.documentElement.style.overflowY = 'hidden'; 
        } else {
            backgroundOverlay.style.display = 'none'
            document.body.style.overflowY = '';
            document.documentElement.style.overflowY = ''; 
        }
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
                    body.style.backgroundImage = `url('${selectedBg}')`;
                    body.style.backgroundSize = 'cover';
                    body.style.backgroundPosition = 'center';

                    loader.style.backgroundImage = `url('${selectedBg}')`; // Set loader background

                    // Hide the loader and display the content after background is loaded
                    loader.style.display = 'none';
                    content.style.display = 'block';
                    body.style.visibility = 'visible'; // Make the body visible after background is loaded

                    // Save the selected background to localStorage
                    localStorage.setItem('selectedBackground', selectedBg);
                };
            }
            backgroundMenu.style.display = 'none'; // Hide menu after selection
            backgroundOverlay.style.display = 'none';
            document.body.style.overflowY = '';
            document.documentElement.style.overflowY = ''; 
        });
    });

    // Apply the stored background if it exists
    const storedBackground = localStorage.getItem('selectedBackground');
    if (storedBackground) {
        const img = new Image();
        img.src = storedBackground;
        img.onload = () => {
            // Apply background after it's fully loaded
            body.style.backgroundImage = `url('${storedBackground}')`;
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center';

            loader.style.backgroundImage = `url('${storedBackground}')`; // Set loader background

            // Hide loader and show content after background is applied
            loader.style.display = 'none';
            content.style.display = 'block';
            body.style.visibility = 'visible'; // Make body visible after background is loaded
        };
    } else {
        // Set loader to default background if no stored background
        loader.style.backgroundImage = `url('${defaultBackground}')`;
    }

    // Wait for the window to load all content (images, styles, etc.)
    window.onload = function () {
        // Hide the loader and show the page content once everything is ready
        loader.style.display = 'none';
        content.style.display = 'block';
        body.style.visibility = 'visible'; // Make sure body is visible
    };

    // Reset background button functionality
    resetBackgroundBtn.addEventListener('click', () => {
        // Remove the stored background from localStorage
        localStorage.removeItem('selectedBackground'); // Clear the stored background

        // Optionally, trigger a reload to reset the page as it would be on initial load
        location.reload(); // This will force the page to load fresh, with no background image set
    });
});
