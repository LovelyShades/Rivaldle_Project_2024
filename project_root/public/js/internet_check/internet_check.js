// Check network type using the Connection API (if available)
if (navigator.connection) {
    let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    // Check for 3G or slower network conditions
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g') {
        // If the network is slow, hide the video and show the image
        document.getElementById('background-video').style.display = 'none';
        document.getElementById('fallback-image').style.display = 'block';
    }
} else {
    console.log('Connection API not supported.');
}

// Detect if video is playing, if not, show the image
let video = document.getElementById('background-video');
video.oncanplay = function() {
    // If video is ready to play, show the video
    document.getElementById('background-video').style.display = 'block';
    document.getElementById('fallback-image').style.display = 'none';
};

video.onerror = function() {
    // If the video fails to load, show the image
    document.getElementById('background-video').style.display = 'none';
    document.getElementById('fallback-image').style.display = 'block';
};
