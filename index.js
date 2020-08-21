const urlInput = document.getElementById('urlInput');
const frame = document.getElementById('frame');

urlInput.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        event.preventDefault();
        const https = 'https://';
        const detectHttps = urlInput.value.substring(0, https.length) != https;
        const urlLink = detectHttps
            ? https + urlInput.value
            : urlInput.value;
        
        frame.src = urlLink;
    }
});