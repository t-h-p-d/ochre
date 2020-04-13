console.log('js loaded!');

//function to expand menu

function toggleIdExpand(id) {
  var x = document.getElementById(id);
  x.classList.toggle("expand");
}

//function to set shim div for topnav height

function setShimHeight(){
  var height = document.getElementById('topnavlist').offsetHeight;
  console.log(height);
  document.getElementById('shim').style.height = height + 'px';
}

setShimHeight();


// script for toggling one id by clicking another:

/*var clicks = 0;

function toggleId(id) {
  clicks ++;
  if (isEven(clicks)) {
    document.getElementById(id).style.height = '0';
    document.getElementById(id).style.display = 'none';
  }
  else {
    document.getElementById(id).style.height = 'auto';
    document.getElementById(id).style.display = 'block';
  }
}

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}
*/
