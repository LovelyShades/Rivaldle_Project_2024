document.addEventListener('DOMContentLoaded', () => {
    const settingsIcon = document.getElementById('settingsIcon');
    const backgroundMenu = document.getElementById('backgroundMenu');
    const resetBackgroundBtn = document.getElementById('resetBackgroundBtn');
    const defaultBackground = '/_images/backgrounds/default.jpg';
    const loader = document.getElementById('loader');
    const body = document.body;
    const content = document.getElementById('content');
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.className = 'dark-overlay';
    body.appendChild(backgroundOverlay);

    // Background options to preload lazily
    const backgroundImages = [
        '/_images/backgrounds/image (1).jpg',
        '/_images/backgrounds/image (2).jpg',
        '/_images/backgrounds/image (3).jpg',
        '/_images/backgrounds/image (4).jpg',
        '/_images/backgrounds/image (5).jpg',
        '/_images/backgrounds/image (6).jpg',
        '/_images/backgrounds/image (7).jpg',
        '/_images/backgrounds/image (8).jpg',
    ];

    // Preload images
    const preloadImages = (images) => {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };

    // Initialize the page with a stored or default background
    const initializeBackground = () => {
        const storedBackground = localStorage.getItem('selectedBackground') || defaultBackground;
        const img = new Image();
        img.src = storedBackground;

        img.onload = () => {
            body.style.backgroundImage = `url('${storedBackground}')`;
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center';

            loader.style.opacity = 0;
            setTimeout(() => (loader.style.display = 'none'), 500); // Smooth fade-out

            content.style.opacity = 1; // Show content smoothly
            body.style.visibility = 'visible'; // Ensure the body is visible
        };
    };

    // Lazy preload all background images when the menu is opened
    settingsIcon.addEventListener('click', () => {
        backgroundMenu.style.display = backgroundMenu.style.display === 'block' ? 'none' : 'block';
        if (backgroundMenu.style.display === 'block') {
            backgroundOverlay.style.display = 'block';
            preloadImages(backgroundImages); // Preload lazily
            document.body.style.overflowY = 'hidden';
            document.documentElement.style.overflowY = 'hidden';
        } else {
            backgroundOverlay.style.display = 'none';
            document.body.style.overflowY = '';
            document.documentElement.style.overflowY = '';
        }
    });

    // Event delegation for selecting backgrounds
    backgroundMenu.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('background-option')) {
            const selectedBg = target.dataset.bg;
            if (selectedBg) {
                const img = new Image();
                img.src = selectedBg;

                img.onload = () => {
                    body.style.backgroundImage = `url('${selectedBg}')`;
                    body.style.backgroundSize = 'cover';
                    body.style.backgroundPosition = 'center';

                    localStorage.setItem('selectedBackground', selectedBg); // Save selection

                    loader.style.opacity = 0;
                    content.style.opacity = 1;
                };

                backgroundMenu.style.display = 'none';
                backgroundOverlay.style.display = 'none';
                document.body.style.overflowY = '';
                document.documentElement.style.overflowY = '';
            }
        }
    });

    // Reset the background to default
    resetBackgroundBtn.addEventListener('click', () => {
        localStorage.removeItem('selectedBackground');
        location.reload(); // Reload the page to reset
    });

    // Initialize the page
    initializeBackground();
});
