let a = document.querySelectorAll(
  "span#text.style-scope.ytd-thumbnail-overlay-time-status-renderer"
);
let playlist = [];
let time = 0;
for (let i = 0; i < a.length; i++) {
  const ref = a[i].innerHTML;
  playlist[i] = ref.trim().split(":");
}
playlist.forEach((e) => {
  i = 1;
  e.reverse().forEach((t) => {
    time += i * parseInt(t);
    i = i * 60;
  });
});
let hr = Math.round(time / 3600);
let min = Math.round((time % 3600) / 60);
let sec = time % 60;

const playlist_data = {
  playlist_count: playlist.length,
  time: time,
  playlist_duration: `${hr}:${min}:${sec}`,
};

console.log(playlist_data);
