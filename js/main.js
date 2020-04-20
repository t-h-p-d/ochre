console.log('js working!');

//set up the variables to contain the lists of active filters and items to be filtered
var itemArray = document.getElementsByClassName('item');
var filterArray = new Array();

function filterItems(x) {
  //build an array of the active filters:
  buildFilterArray(x);

  //hide all the items:
  for (var i = 0; i < itemArray.length; i++) {
    itemArray[i].classList.add('hide');
  }

  //show the items with classes that match the filterArray:
  for (var i = 0; i < filterArray.length; i++) {
    for (var j = 0; j < itemArray.length; j++) {
      if (itemArray[j].classList.contains(filterArray[i])) {
        itemArray[j].classList.remove('hide')
      }
    }
  }
}

function buildFilterArray(x) {
  //highlight active filter button:
  document.getElementById(x).classList.toggle('highlight');

  //build filter array:
  if (filterArray.includes(x)) {
    var location = filterArray.indexOf(x);
    filterArray.splice(location,1);
  } else {
    filterArray.push(x);
  }
  return filterArray;
}

function clearFilters() {
  //clear filter button highlights:
  var filters = document.getElementsByClassName('filters');
  for (var i = 0; i < filters.length; i++) {
    filters[i].classList.remove('highlight');
  }

  //clear filters from items:
  for (var i = 0; i < itemArray.length; i++) {
    itemArray[i].classList.remove('hide');
  }

  //clear filterArray:
  filterArray = new Array();
}
