const controls = document.querySelector("#controls");

let index = 0;
let currentMusic;
let isPlaying = false;

controls.addEventListener("click", function (event) {
  const audios = [];
  let music = {};

  if (event.target.id != "controls") {
    const musics =
      event.path[2].childNodes[3].childNodes[5].childNodes[1].childNodes[3]
        .childNodes;

    musics.forEach(function (item) {
      if (item.nodeName != "#text") {
        music.name = item.childNodes[3].childNodes[0].data;
        music.artist = item.childNodes[5].childNodes[0].data;
        music.image = item.childNodes[1].childNodes[0].currentSrc;
        music.audio = item.childNodes[7].childNodes[1];
        audios.push(music);
        music = {};
      }
    });
  }

  function updateDataMusic(){
   currentMusic = audios[index];
   document.querySelector("#currentImg").src = currentMusic.image;
   document.querySelector("#currentName").innerText = currentMusic.name;
   document.querySelector("#currentArtist").innerText = currentMusic.artist;
   document.querySelector("#volume").src = currentMusic.audio.volume * 100;
  }

updateDataMusic();

});
