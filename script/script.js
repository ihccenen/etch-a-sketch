const bod = document.querySelector('body');
const container = document.createElement('div');
const btn = document.createElement('button');
let squareDiv = 64;

btn.appendChild(document.createTextNode('change number of squares'));
btn.classList.add('btn')
container.classList.add('container');
bod.prepend(container);
bod.prepend(btn);

for (let i = 0; i < (squareDiv * squareDiv); i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    container.appendChild(div);
}

const div = Array.from(document.querySelectorAll('.div'));

div.forEach(div => {
    div.style.height = 800 / squareDiv + 'px';
    div.style.width = 800 / squareDiv + 'px';
    div.addEventListener('mouseover', () => {
        div.classList.add('div-mouseover');
    })
})