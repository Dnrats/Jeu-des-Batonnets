// const b1 = document.querySelector('#oh');
// const b2 = document.querySelector('#ohh');
// const b3 = document.querySelector('#ohhh');
// const b4 = document.querySelector('#ohhhh');
// const b5 = document.querySelector('#ohhhhh');
// const b6 = document.querySelector('#ohhhhh');
    // b1, b2, b3, 
    // b4, b5, b6 

const tab = [ 
    1,2,3,4,5,6,7,8,9
];

const end = [];

// function random() {

// };

let rand = tab[Math.floor(Math.random() * 3 )+1];

end.push(rand);

tab.splice(rand);

console.log(`${rand} random choice`);

console.log(`${tab.length} tab joueurs`);

console.log(`${end} tab de fin`);
