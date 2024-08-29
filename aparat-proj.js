var video = document.getElementsByTagName('video')[0];
console.log(video)
video.removeAttribute('controls');


//


var play = document.getElementById("playvideo");
play.addEventListener("click", function () {
    video.play()
    video.requestFullscreen()
})

// array in js
// DOM - variables - if satements ( if , inline if  , switch) - loop( map , foreach ,for)
//js selectors -- event listeners