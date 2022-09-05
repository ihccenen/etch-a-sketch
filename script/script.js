function changeColor(e) {
    e.target.classList.add('div-mouseover');
}

function changeSquareNumber() {
    const allSquareDiv = document.querySelectorAll('.div') 
    squareDiv = prompt('New number of squares per side. Maximum 100.');

    while (squareDiv > 100) {
        squareDiv = prompt('Too many. Maximum 100.')
    }

    btn.textContent = `Change the number of squares per side. Current: ${squareDiv}x${squareDiv}`;

    allSquareDiv.forEach(div => div.remove());
    
    for (let i = 0; i < (squareDiv * squareDiv); i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        container.appendChild(div);
        div.style.height = 100 / squareDiv + '%';
        div.style.width = 100 / squareDiv + '%';
        div.addEventListener('mouseover', changeColor);
    }
}

const bod = document.querySelector('body');
const container = document.createElement('div');
const btn = document.createElement('button');
let squareDiv = 16;

container.classList.add('container');
btn.appendChild(document.createTextNode('Change the number of squares per side. Current: 16x16'));
btn.classList.add('btn');
btn.addEventListener('click', changeSquareNumber);
bod.prepend(container);
bod.prepend(btn);

for (let i = 0; i < (squareDiv * squareDiv); i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    div.style.height = 800 / squareDiv + 'px';
    div.style.width = 800 / squareDiv + 'px';
    div.addEventListener('mouseover', changeColor);
    container.appendChild(div);
}

const div = Array.from(document.querySelectorAll('.div'));