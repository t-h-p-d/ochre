console.log('js working!');

//show or hide menu.

function toggleId(id) {
  document.getElementById(id).classList.toggle('expand');
}

//shim hero images on posts to make them fullheight - nav.

function setShimHeight(){
  var height = document.getElementById('topnavlist').offsetHeight;

  var shimElement = document.getElementById('shim');

  shimElement.style.maxHeight = 'calc(100vh - ' + height + 'px)';
}

setShimHeight();
