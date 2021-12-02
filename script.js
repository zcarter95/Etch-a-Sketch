var container = document.querySelector('div');
function createDiv(){
    var div = document.createElement('div');
    div.classList.add('item');
    return div;
}

var divs = []

for(var i = 0; i < 16; i++){
    divs[i] = createDiv();
}

for (var i = 0; i < divs.length; i++){
    container.appendChild(divs[i]);
}

items = document.querySelectorAll('.item');
console.log(items);

items.forEach((item) => {
    console.log(item);
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    })
})







