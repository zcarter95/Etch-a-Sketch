var container = document.querySelector('div');
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
    
    button.addEventListener('click', () => {
        items.forEach((item) => {
            item.classList.remove('hover');
        })
    })
}

function removeChildren () {
    const divs = document.getElementsByClassName('item');
    while(divs.length > 0){
        console.log(divs[0]);
        divs[0].parentNode.removeChild(divs[0]);
    }
}

drawPixels(screenSize);
range.oninput = function() {
    output.textContent = this.value;
    removeChildren();
    drawPixels(screenSize);
}













