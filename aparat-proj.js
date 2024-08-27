// document.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById('myVideo');
//     var playPauseBtn = document.getElementById('playPauseBtn');
//     var fullscreenBtn = document.getElementById('fullscreenBtn');

//     playPauseBtn.addEventListener('click', function() {
//         if (video.paused) {
//             video.play();
//             playPauseBtn.textContent = 'Pause';
//         } else {
//             video.pause();
//             playPauseBtn.textContent = 'Play';
//         }
//     });

//     fullscreenBtn.addEventListener('click', function() {
//         if (video.requestFullscreen) {
//             video.requestFullscreen();
//         } else if (video.mozRequestFullScreen) { // Firefox
//             video.mozRequestFullScreen();
//         } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
//             video.webkitRequestFullscreen();
//         } else if (video.msRequestFullscreen) { // IE/Edge
//             video.msRequestFullscreen();
//         }
//     });
// });
