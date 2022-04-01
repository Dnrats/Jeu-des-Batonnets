const b1 = document.querySelector('#a');
const b2 = document.querySelector('#z');
const b3 = document.querySelector('#e');
const b4 = document.querySelector('#r');
const b5 = document.querySelector('#t');
const b6 = document.querySelector('#y');

b1.addEventListener('click', () => {
    
})

const tab = [
    b1,b2,b3,
    b4,b5,b6
];

const fin = []; 

function d() {
    let rdm = tab[Math.floor(Math.random() * 3 )]
    fin.push(rdm)
    tab.splice(rdm)
    return rdm
}

console.log(fin);
console.log(tab);

console.log(d());