let audioelement = new Audio("../assets/songs/song1.m4a");
let songIndex = 0;
const gif = document.getElementById("gif");

let songList = [
  {
    filename: "Blinding Lights",
    filePtah: "../assets/songs/song1.m4a",
    coverPath:
      "../assets/images/andrea-joshua-sibabalo-qoqonga-4XlsGQAWkNA-unsplash.jpg",
  },
];

const masterPlay = document.getElementById("master_play");

masterPlay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterPlay.innerHTML = `<i class=" fa-3x fa-solid fa-pause"></i>`;
    gif.style.opacity = "1";
  } else {
    audioelement.pause();
    masterPlay.innerHTML = `<i class="fa-3x fa-solid fa-play play_button"></i
        >`;
    gif.style.opacity = "0";
  }
});

const progressBar = document.getElementById("progress_bar");
audioelement.addEventListener("timeupdate", () => {
  let progress = Math.round(
    (audioelement.currentTime / audioelement.duration) * 100
  );
  progressBar.value = progress;
});

progressBar.addEventListener("click", () => {
  audioelement.currentTime = (progressBar.value * audioelement.duration) / 100;
});
