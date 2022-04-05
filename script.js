
const b = document.querySelector('#co');
const b2 = document.querySelector('#ci');
const b3 = document.querySelector('#cz');

const tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const ordi = Math.floor(Math.random() * (3 - 0) +1);

for (let i = 0; i <= tab.length; i++) {
    const div = document.createElement('div');
    div.classList.add('jsDiv');
    document.body.appendChild(div);
}

const supp = document.querySelectorAll('.jsDiv');
console.log(supp);
let i = 0;
b.addEventListener('click', function () {
    tab.splice(tab,1);
    if (tab.length <= 1) {
        alert('gg');
    }else{ 
        function time(){
            const ordi = Math.floor(Math.random() * (3 - 0) +1);
        
            tab.splice(tab,ordi);
            if (tab.length <= 1) {
                alert('orfi');
            }
            if (ordi == 1) {
                supp[i].classList.add('hidden');
                i++
            }else if(ordi == 2){
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
            }else{
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
            }
            console.log(`choice ${ordi} ordi `);
        }
        setTimeout(time, 3000)
    }

    console.log(tab);

    supp[i].classList.add('hidden');
    i++

});



b2.addEventListener('click', function () {
    tab.splice(tab,2);
    if (tab.length <= 1) {
        alert('gg');
    }else{ 
        function time(){
            const ordi = Math.floor(Math.random() * (3 - 0) +1);
        
            tab.splice(tab,ordi);
            if (tab.length <= 1) {
                alert('orfi');
            }
            if (ordi == 1) {
                supp[i].classList.add('hidden');
                i++
            }else if(ordi == 2){
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
            }else{
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
            }
            console.log(tab);
        }
        setTimeout(time, 3000)
    }
    console.log(tab);
    
    supp[i].classList.add('hidden');
    i++
    supp[i].classList.add('hidden');
    i++
});

b3.addEventListener('click', function () {
    tab.splice(tab,3);
    if (tab.length <= 1) {
        alert('gg');
    }else{ 
        function time(){
            const ordi = Math.floor(Math.random() * (3 - 0) +1);
        
            tab.splice(tab,ordi);
            if (tab.length <= 1) {
                alert('orfi');
            }
            if (ordi == 1) {
                supp[i].classList.add('hidden');
                i++
            }else if(ordi == 2){
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
            }else{
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
            }
            console.log(tab);
        }
        setTimeout(time, 3000)

    }
    // tab.splice(tab,ordi);
    console.log(tab);
    supp[i].classList.add('hidden');
    i++
    supp[i].classList.add('hidden');
    i++
    supp[i].classList.add('hidden');
    i++
});


console.log(`${tab.length} tab du joueur`);


console.log(tab);



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

