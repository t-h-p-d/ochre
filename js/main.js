console.log('js working!');

function toggleId(x) {
  document.getElementById(x).classList.toggle("expand");
  /*document.getElementsByClassName('wall')[0].style.filter = 'blur(3px)';*/
};

function setShimHeight(refElementId, shimTargetClass){
  //console.log(refElementId + " " + shimTargetClass);
  var height = document.getElementById(refElementId).offsetHeight;
  //console.log(height);
  var shimElement = document.getElementsByClassName(shimTargetClass);
  //console.log(shimElement[0]);
  shimElement[0].style.top = height + "px";
};
