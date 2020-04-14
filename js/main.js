console.log('js working!');

//show or hide menu.

function toggleId(id) {
  document.getElementById(id).classList.toggle('expand');
  randomBackgroundColor(id);
}

function randomBackgroundColor(id) {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var rgba = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + '0.4)';
  document.getElementById(id).style.backgroundColor = rgba;
}

//shim hero images on posts to make them fullheight - nav.

function setShimHeight(){
  var height = document.getElementById('topnavlist').offsetHeight;

  var shimElement = document.getElementById('shim');

  shimElement.style.maxHeight = 'calc(100vh - ' + height + 'px)';
}

setShimHeight();
