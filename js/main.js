const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progess");
const timestamp = document.getElementById("timestamp");



// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', upadatePlayIcon);
video.addEventListener('play', upadatePlayIcon);
video.addEventListener('timeupdate', upadateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);


