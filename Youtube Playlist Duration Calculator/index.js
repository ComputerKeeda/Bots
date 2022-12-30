let a = document.querySelectorAll(
  "span#text.style-scope.ytd-thumbnail-overlay-time-status-renderer"
);
let playlist = [];
let playlistInCorrectOrder = [];
let time = 0;
for (let i = 0; i < a.length; i++) {
  const span = a[i].innerHTML;
  playlist[i] = span.trim().split(":");
}

for (let index = 0; index < playlist.length; index++) {
  const element = playlist[index];
  let tempArray = element.reverse();
  let numberValues = tempArray.map(function (str) {
    return parseInt(str);
  });
  playlistInCorrectOrder[index] = numberValues;
}

for (let index = 0; index < playlistInCorrectOrder.length; index++) {
    const duration = playlistInCorrectOrder[index];
    let timeUnit = 1
    for (let i = 0; i < duration.length; i++) {
        time += duration[i] * timeUnit;
        timeUnit *= 60;
    }
}
let hr = parseInt(time / 3600);
let min = parseInt((time % 3600) / 60);
let sec = time % 60;

const playlist_data = {
  playlist_count: playlist.length,
  time: time,
  playlist_duration: `${hr}:${min}:${sec}`,
};

console.log(playlist_data);
