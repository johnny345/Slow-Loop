/*  loopingList.js */

const songs = [
  { title: "Easy", src: "Easy.m4a" },
  { title: "Ode to My Family", src: "Ode to My Family.m4a" },  
  { title: "Whiter Shade of Pale", src: "Whiter Shade of Pale.m4a" },
  { title: "Possession", src: "Possession.m4a" },
  { title: "Youve Lost That Lovin Feelin", src: "Youve Lost That Lovin Feelin.m4a" },  
];

let currentSong = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');

// Load and play the current song
function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  audio.play();
}

// Move to next song when current ends
audio.addEventListener('ended', () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

// Start with the first song
loadSong(currentSong);
