function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector("#nested .target");
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const rankedList = document.getElementById('app').querySelector('ul.ranked-List li');

  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (parseInt(i.innerHTML) + n);
  }
}
