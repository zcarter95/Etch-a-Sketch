var container = document.querySelector('div');
const body = document.querySelector('body');
const button = document.querySelector('button');

function createDiv(){
    var div = document.createElement('div');
    div.classList.add('item');
    return div;
}
var divs = []

var range = document.querySelector('input');
var output = document.getElementById("output");
output.textContent = range.value;
var screenSize = range.value;
screenSize = screenSize * screenSize;

function drawPixels (screenSize){
    for(var i = 0; i < (screenSize); i++){
        divs[i] = createDiv();
    }
    
    for (var i = 0; i < divs.length; i++){
        container.appendChild(divs[i]);
    }
    
    function determinePixelSize (number){
        var pixelSize = 250000 / number;
        var dimensions = Math.sqrt(pixelSize);
        var dimensionsFormatted = dimensions + 'px';
        return dimensionsFormatted;
    }
    
    items = document.querySelectorAll('.item');
    

    items.forEach((item) => {
        item.style.width = determinePixelSize(screenSize);
        item.style.height = determinePixelSize(screenSize);
        item.addEventListener('mouseenter', () => {
            item.classList.add('hover');
        })
    })
    return items;
}

function removeChildren (items) {
    container.innerHTML = '';
    for (let i = 0; i < divs.length; i++){
        divs[i].classList.remove('item');
        divs[i].classList.remove('hover');
        divs[i].style.width = '0px';
        divs[i].style.height = '0px';
        console.log(divs[0]);
    }
}


drawPixels(screenSize);
range.oninput = function() {
    output.textContent = this.value;
    removeChildren();
    screenSize = this.value;
    screenSize = screenSize * screenSize;
    drawPixels(screenSize);
}

button.addEventListener('click', () => {
    reloadContainer(screenSize);
})













