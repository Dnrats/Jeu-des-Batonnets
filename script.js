document.querySelector('button').addEventListener('click', function(e) {
  document.querySelector('div').classList.toggle('animate');
})

const b = document.querySelector('#co');
const b2 = document.querySelector('#ci');
const b3 = document.querySelector('#cz');

const tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const ordi = Math.floor(Math.random() * (3 - 0) +1);

for (let i = 0; i < tab.length; i++) {
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
      if (tab.length == 4) {
        function time(){
            const ordi = 3;
        
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
        setTimeout(time, 2000)
    


      }
       else if (tab.length == 3) {
        function time(){
            const ordi = 2;
        
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
        setTimeout(time, 2000)
    }
    else if (tab.length == 2) {
      function time(){
            const ordi = 1;
        
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
        setTimeout(time, 2000)
    }

    else {
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
        setTimeout(time, 2000)
    }

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
      if (tab.length == 4) {
        function time(){
            const ordi = 3;
        
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
        setTimeout(time, 2000)
    


      }
       else if (tab.length == 3) {
        function time(){
            const ordi = 2;
        
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
        setTimeout(time, 2000)
    }
    else if (tab.length == 2) {
      function time(){
            const ordi = 1;
        
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
        setTimeout(time, 2000)
    }

    else {
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
        setTimeout(time, 2000)
    }

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
      if (tab.length == 4) {
        function time(){
            const ordi = 3;
        
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
        setTimeout(time, 2000)
    


      }
       else if (tab.length == 3) {
        function time(){
            const ordi = 2;
        
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
        setTimeout(time, 2000)
    }
    else if (tab.length == 2) {
      function time(){
            const ordi = 1;
        
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
        setTimeout(time, 2000)
    }

    else {
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
        setTimeout(time, 2000)
    }

    }
        
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






