console.log('js working!');

// TODO: build a new version built on classLis.toggle - obviates the need for arrays?

//var filterCount = 0;
var filterArray = new Array();

function filter(x) {
  /*filterCount++;
  if (filterCount == 1) {
    console.log('filter mode started');
  }*/
  var filterIndex = filterArray.indexOf(x);
  //console.log(filterIndex);
  if (filterIndex == -1) {
    filterArray.push(x);
  } else {
    filterArray.splice(filterIndex,1);
  }
  console.log('filterArray = ' + filterArray);
  highlightCategories(filterArray);
}

function highlightCategories(filterArray) {
  var i;
  for (i = 0; i < filterArray.length; i++) {
    var item = document.getElementsByClassName(filterArray[i]);
  }
  console.log('item = ' + item);
  for (i = 0; i < item.length; i++) {
    item[i].style.backgroundColor = 'red';
  }
}

function clearFilters() {
  //filterCount = 0;
  //console.log(filterCount);
  //console.log('filter mode cleared!');
  //clear filter array
  filterArray = new Array();
  console.log(filterArray);
}

/*
var x = document.getElementsByClassName(item
);
console.log('x = ' + x);
var j;
for (j = 0; j < x.length; j++) {
  console.log('x[j] = ' + x[j]);
  x[j].classList.toggle('highlight');
}
*/
