console.log('expand.js working!');

function expandId(id) {
  console.log('clicked ' + id);
  document.getElementById(id).classList.toggle('expand');
}

function expandClass(cssclass) {
  console.log('clicked ' + cssclass);
  var classArray = document.getElementsByClassName(cssclass);
  for (var i = 0; i < classArray.length; i++) {
    classArray[i].classList.toggle('expand');
  }
}
