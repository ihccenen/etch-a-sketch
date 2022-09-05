function createSquareDiv(num = 16) {
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.style.minHeight = 100 / num + '%';
        div.style.minWidth = 100 / num + '%';
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
        btn.textContent = `Change the number of squares per side. Current: ${num}x${num}`;
    }
}

function changeSquareNumber() {
    const allSquareDiv = document.querySelectorAll('.div') 
    let squareDiv = prompt('New number of squares per side. Maximum 100.');
    percent = 0.10;
    
    while (squareDiv > 100) {
        squareDiv = prompt('Too many. Maximum 100.')
    }
    
    allSquareDiv.forEach(div => div.remove());
    
    if (parseInt(squareDiv)) {
        btn.textContent = `Change the number of squares per side. Current: ${squareDiv}x${squareDiv}`;
    
        createSquareDiv(squareDiv);
    } else {
        createSquareDiv();
    }

}

function changeColor(e) {
    if (!e.target.classList.contains('color')) {
        let red = Math.round(Math.random() * 225) + 30;
        let green = Math.round(Math.random() * 225) + 30;
        let blue = Math.round(Math.random() * 225) + 30;

        e.target.classList.add('color');
        divColors.splice(0, 3, red - (red * percent), green - (green * percent), blue - (blue * percent));

        e.target.style.backgroundColor = `rgb(${divColors[0]}, ${divColors[1]}, ${divColors[2]})`;

        percent += 0.10;
    }
}

const bod = document.querySelector('body');
const container = document.createElement('div');
const btn = document.createElement('button');
const div = Array.from(document.querySelectorAll('.div'));
const divColors = [];
let percent = 0.10;

container.classList.add('container');
btn.appendChild(document.createTextNode('Change the number of squares per side. Current: 16x16'));
btn.classList.add('btn');
btn.addEventListener('click', changeSquareNumber);
bod.prepend(container);
bod.prepend(btn);

createSquareDiv();