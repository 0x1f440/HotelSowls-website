function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var charNumber = getRandomInt(1, 13);

window.onload = function () {
  var tag = "<img src='/img/characters/characters (" + charNumber + ").png'>";
  document.getElementById('character').innerHTML = tag;
}
