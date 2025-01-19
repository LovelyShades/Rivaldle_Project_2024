class BackgroundManager {
    constructor() {
        this.settingsIcon = document.getElementById('settingsIcon');
        this.backgroundMenu = document.getElementById('backgroundMenu');
        this.backgroundOptions = document.querySelectorAll('.background-option');
        this.resetBackgroundBtn = document.getElementById('resetBackgroundBtn');
        this.defaultBackground = '/_images/backgrounds/default.jpg';
        this.loader = document.getElementById('loader');
        this.body = document.body;
        this.content = document.getElementById('content');
        this.overlay = this.createOverlay();
        this.backgroundImages = [
            '/_images/backgrounds/default.jpg',
            '/_images/backgrounds/image (1).jpg',
            '/_images/backgrounds/image (2).jpg',
            '/_images/backgrounds/image (3).jpg',
            '/_images/backgrounds/image (4).jpg',
            '/_images/backgrounds/image (5).jpg',
            '/_images/backgrounds/image (6).jpg',
            '/_images/backgrounds/image (7).jpg',
            '/_images/backgrounds/image (8).jpg',
        ];

        this.init();
    }

    createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'dark-overlay';
        document.body.appendChild(overlay);
        return overlay;
    }

    preloadImages(images) {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    toggleMenu() {
        const isVisible = this.backgroundMenu.style.display === 'block';
        this.backgroundMenu.style.display = isVisible ? 'none' : 'block';
        this.overlay.style.display = isVisible ? 'none' : 'block';
    
        if (isVisible) {
            this.body.classList.remove('no-scroll'); // Re-enable scrolling
        } else {
            this.body.classList.add('no-scroll'); // Disable scrolling and fix background
        }
    }
    
    applyBackground(imagePath) {
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {
            this.body.style.backgroundImage = `url('${imagePath}')`;
            this.body.style.backgroundSize = 'cover';
            this.body.style.backgroundPosition = 'center';
            this.loader.style.backgroundImage = `url('${imagePath}')`;

            this.loader.style.display = 'none';
            this.content.style.display = 'block';
            this.body.style.visibility = 'visible';

            localStorage.setItem('selectedBackground', imagePath);
        };
    }

    resetBackground() {
        localStorage.removeItem('selectedBackground');
        location.reload();
    }

    loadStoredBackground() {
        const storedBackground = localStorage.getItem('selectedBackground');
        if (storedBackground) {
            this.applyBackground(storedBackground);
        } else {
            this.loader.style.backgroundImage = `url('${this.defaultBackground}')`;
        }
    }

    initializeBackgroundOptions() {
        this.backgroundOptions.forEach(option => {
            option.addEventListener('click', (event) => {
                const selectedBg = event.target.dataset.bg;
                if (selectedBg) {
                    this.applyBackground(selectedBg);
                }
                this.backgroundMenu.style.display = 'none';
                this.overlay.style.display = 'none';
            });
        });
    }

    initializeEventListeners() {
        this.settingsIcon.addEventListener('click', () => this.toggleMenu());
        this.resetBackgroundBtn.addEventListener('click', () => this.resetBackground());
    }

    hideLoaderWhenReady() {
        window.onload = () => {
            this.loader.style.display = 'none';
            this.content.style.display = 'block';
            this.body.style.visibility = 'visible';
        };
    }

    init() {
        this.preloadImages(this.backgroundImages);
        this.body.style.visibility = 'hidden';
        this.loader.style.display = 'block';

        this.loadStoredBackground();
        this.initializeBackgroundOptions();
        this.initializeEventListeners();
        this.hideLoaderWhenReady();
    }
}

// Initialize the BackgroundManager after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundManager();
});
