function getThumbnail() {
    const videoUrl = document.getElementById("videoUrl").value;
    const videoId = extractVideoId(videoUrl);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const thumbnailContainer = document.getElementById("thumbnailContainer");
    thumbnailContainer.innerHTML = `<div class="thumbnail"><img src="${thumbnailUrl}" alt="Thumbnail"></div>`;
}

function extractVideoId(url) {
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
}
