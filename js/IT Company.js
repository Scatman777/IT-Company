let Video = document.getElementById("myVideo");

function playVideo() {
    Video.play();
}

const VideoButton = document.querySelector(".main-video-about__button");

VideoButton.addEventListener("click", () => {
    VideoButton.classList.toggle("hidden");
});