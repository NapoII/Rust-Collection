document.addEventListener("DOMContentLoaded", function () {
    var isMobileDevice = /Mobi|iPad|iPhone|Android|Windows Phone|BlackBerry|Tablet|Kindle/i.test(navigator.userAgent);

    if (!isMobileDevice) {
        var hasPlayed = localStorage.getItem("hasPlayed");
        // var hasPlayed = false;

        if (!hasPlayed) {
            var videoContainer = document.createElement("div");
            videoContainer.style.position = "fixed";
            videoContainer.style.top = "0";
            videoContainer.style.left = "0";
            videoContainer.style.width = "100%";
            videoContainer.style.height = "100%";
            videoContainer.style.zIndex = "9999";

            var video = document.createElement("video");
            video.id = "fullscreenVideo";
            video.muted = true;

            var source = document.createElement("source");
            source.src = "/video//Intro_eu.mp4";
            source.type = "video/mp4";

            video.appendChild(source);

            video.style.width = "100%";
            video.style.height = "100%";
            video.style.objectFit = "cover";

            video.addEventListener("ended", function () {
                localStorage.setItem("hasPlayed", true);
                video.style.transition = "opacity 1s";
                video.style.opacity = "0";
                setTimeout(function() {
                    videoContainer.style.display = "none";
                }, 1000);
            });

            videoContainer.appendChild(video);
            document.body.appendChild(videoContainer);

            var playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Autoplay started successfully
                }).catch(error => {
                    // Autoplay failed
                    video.muted = true;
                    video.play();
                });
            }
        }
    }
});
