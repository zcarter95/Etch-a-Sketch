var container = document.querySelector('div');
const body = document.querySelector('body');
const button = document.querySelector('button');
let colorMode = 'black';
let rainbowMode = false;

function createDiv(){
    var div = document.createElement('div');
    div.classList.add('item');
    return div;
}
var divs = []

var range = document.querySelector('input');
var output = document.getElementById("output");
output.textContent =   `${range.value} X ${range.value}`;
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
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            switch(rainbowMode) {
                case true:
                    item.style.backgroundColor = "#" + randomColor
                    break;
                case false:
                    item.classList.add('hover');
                    break;
            }
            
            
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
    output.textContent = `${this.value} X ${this.value}`;
    removeChildren();
    screenSize = this.value;
    screenSize = screenSize * screenSize;
    drawPixels(screenSize);
}

button.addEventListener('click', () => {
    if (rainbowMode === true){
        rainbowMode = false;
    }
    else if (rainbowMode === false){
        rainbowMode = true;
    }
    
})

button.addEventListener('mouseenter', () => {
    
    button.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
    button.style.color = "#" + (Math.floor(Math.random()*16777215).toString(16));
})

button.addEventListener('mouseleave', () => {
    if (!rainbowMode){
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
    }
    else{
        return;
    }
    
})













