var song = document.getElementById("song");
var isPlaying = false;
var timeBar = document.getElementById("timeBar");
var containerBg = document.getElementById("song-container");
var heartBtn = document.getElementById("heart-btn");


var songTitle = document.getElementById('title-song');
var artistName = document.getElementById('artist-name');
var bannerBg = document.getElementById("banner");

var audio1 = {
  src: "audio/01-arctic_monkeys-do_i_wanna_know.mp3",
  title: "Do I Wanna Know",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/map.jpg)",
};

var audio2 = {
  src: "audio/02  Arctic Monkeys - Teddy Pickers.mp3",
  title: "Teddy Pickers",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/chicago.jpg)",
};
var audio3 = {
  src: "audio/03  Arctic Monkeys - D Is For Dangerous.mp3",
  title: "D is for Dangerous",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/la.jpg)",
};
var audio4 = {
    src: "audio/04-arctic_monkeys-r_u_mine.mp3",
    title: "R U Mine",
    artist: "Arctic Monkeys",
    bgImg: "url(./images/ny.jpg)",
}

function playSong () {
    song.play();
}
function pauseSong () {
    song.pause();
}
function changeColor () {
    heartBtn.style.color = "red";
}
// function switchClick() {
//     if (isPlaying == false) {
//       song.play();
//       isPlaying = true;
//       document.getElementById("switch-btn").innerHTML =
//         "<i class='fa fa-pause fadeAnimate'></i>";
//       return;
//     }
  
//     if (isPlaying == true) {
//       song.pause();
//       isPlaying = false;
//       document.getElementById("switch-btn").innerHTML =
//         "<i class='fa fa-play fadeAnimate'></i>";
//       return;
//     }
// }

setInterval(checkTime, 1000);
function checkTime () {
    var songDuration = Math.round(song.duration);
    var songCurrentTime = Math.round(song.currentTime);

    var timeBarWidth = (100 / song.duration) * song.currentTime;

    var clrR = Math.floor(Math.random() * 255); // to round number
    var clrG = (Math.random() * 255).toFixed(2); // to fix 2 decimal number
    var clrB = Math.round(Math.random() * 255); 

    timeBar.style.width = timeBarWidth + "%";
    timeBar.style.backgroundColor = `rgb(${clrR}, ${clrG}, ${clrB})`;
    containerBg.style.backgroundColor = `rgb(${clrR}, ${clrG}, ${clrB})`;
}

function getSong(songData) {
    switch (songData) {
        case "audio1":
            song.src = audio1.src;
            songTitle.innerHTML = audio1.title;
            artistName.innerHTML = audio1.artist;
            bannerBg.style.backgroundImage = audio1.bgImg;
            break;
        case "audio2":
            song.src = audio2.src;
            songTitle.innerHTML = audio2.title;
            artistName.innerHTML = audio2.artist;
            bannerBg.style.backgroundImage = audio2.bgImg;
        break;
        case "audio3":
            song.src = audio3.src;
            songTitle.innerHTML = audio3.title;
            artistName.innerHTML = audio3.artist;
            bannerBg.style.backgroundImage = audio3.bgImg;
        break;
        case "audio4":
            song.src = audio4.src;
            songTitle.innerHTML = audio4.title;
            artistName.innerHTML = audio4.artist;
            bannerBg.style.backgroundImage = audio4.bgImg;
        break;
        default:
            break;
    }
}