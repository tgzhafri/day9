var song = document.getElementById("song");
var isPlaying = false;
var bgDisplay = false;
var timeBar = document.getElementById("timeBar");
var containerBg = document.getElementById("song-container");
var bgBody = document.getElementById("bg-body");

var heartBtn = document.getElementById("heart-btn");
var switchBtn = document.getElementById("switch-btn");

var songTitle = document.getElementById("title-song");
var artistName = document.getElementById("artist-name");
var bannerBg = document.getElementById("banner-img");

var audio1 = {
  src: "audio/01-arctic_monkeys-do_i_wanna_know.mp3",
  title: "Do-I-Wanna-Know",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/map.jpg)",
};

var audio2 = {
  src: "audio/02  Arctic Monkeys - Teddy Pickers.mp3",
  title: "Teddy-Pickers",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/chicago.jpg)",
};
var audio3 = {
  src: "audio/03  Arctic Monkeys - D Is For Dangerous.mp3",
  title: "D-is-for-Dangerous",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/la.jpg)",
};
var audio4 = {
  src: "audio/04-arctic_monkeys-r_u_mine.mp3",
  title: "R-U-Mine",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/ny.jpg)",
};
var audio5 = {
  src: "audio/05  Arctic Monkeys - Fluorescent Adolescent.mp3",
  title: "Fluorescent-Adoloscent",
  artist: "Arctic Monkeys",
  bgImg: "url(./images/am.jfif)",
};

function stopSong() {
  song.currentTime = 0;
  song.pause();
  isPlaying = false;
  document.getElementById("switch-btn").innerHTML =
    "<i class='fa fa-play fadeAnimate'></i>";
}

function changeColor() {
  if (bgDisplay == false) {
    heartBtn.style.color = "red";
    bgBody.style.backgroundImage =
      "url(https://media0.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif?cid=790b7611d83044e71551f4def6a343642efd8dc1aab4b9f2&rid=giphy.gif&ct=g)";
    bgDisplay = true;
    return;
  }
  if (bgDisplay == true) {
    heartBtn.style.color = "white";
    bgBody.style.backgroundImage = "none";
    bgDisplay = false;
    return;
  }
}
function switchClick() {
  if (isPlaying == false) {
    song.play();
    isPlaying = true;
    document.getElementById("switch-btn").innerHTML =
      "<i class='fa fa-pause fadeAnimate'></i>";
  } else if (isPlaying == true) {
    song.pause();
    isPlaying = false;
    document.getElementById("switch-btn").innerHTML =
      "<i class='fa fa-play fadeAnimate'></i>";
  }
}

setInterval(checkTime, 1000);
function checkTime() {
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

function timeClick(moveSeekBar) {
  song.play();
  song.currentTime += moveSeekBar;
  isPlaying = true;
  document.getElementById("switch-btn").innerHTML =
    "<i class='fa fa-pause fadeAnimate'></i>";
}

var text = document.getElementById("circular-text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

var element = document.querySelectorAll("span");
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + i * 15 + "deg)";
}

function getSong(songData) {
  switch (songData) {
    case "audio1":
      song.src = audio1.src;
      songTitle.innerHTML = audio1.title;
      artistName.innerHTML = audio1.artist;
      bannerBg.style.backgroundImage = audio1.bgImg;
      heartBtn.style.color = "white";
      isPlaying = true;
      document.getElementById("switch-btn").innerHTML =
        "<i class='fa fa-pause fadeAnimate'></i>";
      bgBody.style.backgroundImage = "none";

      text.innerHTML = audio1.title;
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
      var element = document.querySelectorAll("span");
      for (let i = 0; i < element.length; i++) {
        element[i].style.transform = "rotate(" + i * 23 + "deg)";
      }

      break;
    case "audio2":
      song.src = audio2.src;
      songTitle.innerHTML = audio2.title;
      artistName.innerHTML = audio2.artist;
      bannerBg.style.backgroundImage = audio2.bgImg;
      heartBtn.style.color = "white";
      isPlaying = true;
      document.getElementById("switch-btn").innerHTML =
        "<i class='fa fa-pause fadeAnimate'></i>";
      bgBody.style.backgroundImage = "none";

      text.innerHTML = audio2.title;
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
      var element = document.querySelectorAll("span");
      for (let i = 0; i < element.length; i++) {
        element[i].style.transform = "rotate(" + i * 27 + "deg)";
      }
      break;
    case "audio3":
      song.src = audio3.src;
      songTitle.innerHTML = audio3.title;
      artistName.innerHTML = audio3.artist;
      bannerBg.style.backgroundImage = audio3.bgImg;
      heartBtn.style.color = "white";
      isPlaying = true;
      document.getElementById("switch-btn").innerHTML =
        "<i class='fa fa-pause fadeAnimate'></i>";
      bgBody.style.backgroundImage = "none";

      text.innerHTML = audio3.title;
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
      var element = document.querySelectorAll("span");
      for (let i = 0; i < element.length; i++) {
        element[i].style.transform = "rotate(" + i * 19 + "deg)";
      }
      break;
    case "audio4":
      song.src = audio4.src;
      songTitle.innerHTML = audio4.title;
      artistName.innerHTML = audio4.artist;
      bannerBg.style.backgroundImage = audio4.bgImg;
      heartBtn.style.color = "white";
      isPlaying = true;
      document.getElementById("switch-btn").innerHTML =
        "<i class='fa fa-pause fadeAnimate'></i>";
      bgBody.style.backgroundImage = "none";

      text.innerHTML = audio4.title;
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
      var element = document.querySelectorAll("span");
      for (let i = 0; i < element.length; i++) {
        element[i].style.transform = "rotate(" + i * 25 + "deg)";
      }
      break;
      case "audio5":
        song.src = audio5.src;
        songTitle.innerHTML = audio5.title;
        artistName.innerHTML = audio5.artist;
        bannerBg.style.backgroundImage = audio5.bgImg;
        heartBtn.style.color = "white";
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML =
          "<i class='fa fa-pause fadeAnimate'></i>";
        bgBody.style.backgroundImage = "none";
  
        text.innerHTML = audio5.title;
        text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
        var element = document.querySelectorAll("span");
        for (let i = 0; i < element.length; i++) {
          element[i].style.transform = "rotate(" + i * 16 + "deg)";
        }
        break;
    default:
      break;
  }
}
