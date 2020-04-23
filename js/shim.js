console.log('shim.js working!');

function shim(elementtoclear,elementtoshim) {
  var height = document.getElementById(elementtoclear).offsetHeight;
  //console.log(height);
  document.getElementById(elementtoshim).style.marginTop = height + "px";
}
