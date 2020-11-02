var dragItem = document.getElementById('dragElement2');
var dropLoc = document.getElementById('dropLocation');

dragItem.ondragstart = function (e) {
    e.dataTransfer.setData('key', e.target.id);
};

dropLoc.ondragover = function (e) {
    e.preventDefault();
};

dropLoc.ondrop = function (e) {
    e.preventDefault();
    console.log(e);
    var dropItem = e.dataTransfer.getData('key');
    var myElement = document.getElementById(dropItem);
    var myNewElement = document.createElement('img');
    myNewElement.src = myElement.src;
    dropLoc.appendChild(myNewElement);
};
