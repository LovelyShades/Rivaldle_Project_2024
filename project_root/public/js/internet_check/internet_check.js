document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('background-video');
    const fallbackImage = document.getElementById('fallback-image');

    if (!video || !fallbackImage) {
        console.error('Required elements not found in the DOM.');
        return;
    }

    function checkNetworkAndSetMedia() {
        if (navigator.connection) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

            // Check for slow network conditions
            if (['slow-2g', '2g', '3g'].includes(connection.effectiveType)) {
                video.style.display = 'none';
                fallbackImage.style.display = 'block';
            } else {
                video.style.display = 'block';
                fallbackImage.style.display = 'none';

                // Attempt to play the video
                video.play().catch((error) => {
                    console.error('Video playback failed:', error);
                    video.style.display = 'none';
                    fallbackImage.style.display = 'block';
                });
            }
        } else {
            console.log('Connection API not supported.');
            // Default to showing the video
            video.style.display = 'block';
            fallbackImage.style.display = 'none';
            video.play().catch((error) => {
                console.error('Video playback failed:', error);
                video.style.display = 'none';
                fallbackImage.style.display = 'block';
            });
        }
    }

    // Initial check on page load
    checkNetworkAndSetMedia();

    // Listen for network changes
    if (navigator.connection) {
        navigator.connection.addEventListener('change', checkNetworkAndSetMedia);
    }

    // Fallback for video errors
    video.onerror = function () {
        console.error('Video loading error.');
        video.style.display = 'none';
        fallbackImage.style.display = 'block';
    };

    video.onplay = function () {
        fallbackImage.style.display = 'none';
    };
});
