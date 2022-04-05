const b = document.querySelector('#co');
const b2 = document.querySelector('#ci');
const b3 = document.querySelector('#cz');
const maindiv = document.querySelector('#maindiv');
const question = document.querySelector('#question');
const question2 = document.querySelector('#question2');
const hiddendiv = document.querySelector('#hiddendiv')
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')


question.addEventListener('click', function(){
  question.style.display= "none";
  question2.style.display= "flex";
  hiddendiv.style.display = "flex";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
})

question2.addEventListener('click', function(){
  question.style.display="flex";
  question2.style.display= "none";
  hiddendiv.style.display = "none";
  button1.style.display = "flex";
  button2.style.display = "flex";
  button3.style.display = "flex";
  button4.style.display = "flex";
})
const tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const ordi = Math.floor(Math.random() * (3 - 0) +1);

for (let i = 0; i < tab.length; i++) {
    const div = document.createElement('div');
    div.classList.add('jsDiv');
    maindiv.appendChild(div);
}

const supp = document.querySelectorAll('.jsDiv');
console.log(supp);
let i = 0;

b.addEventListener('click', function () {

    tab.splice(tab,1);
    if (tab.length == 1) {
       b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
        alert('gg');
    }else{ 
      if (tab.length == 4) {
        function time(){
            const ordi = 3;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
               b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    


      }
       else if (tab.length == 3) {
   
  
        function time(){
            const ordi = 2;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
               b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    }
    else if (tab.length == 2) {

              
              b2.style.display="none"
              b3.style.display="none"
      
      function time(){
            const ordi = 1;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
               b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"

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
        setTimeout(time, 1500)
    }

    else {
      function time(){
            const ordi = Math.floor(Math.random() * (3 - 0) +1);
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
               b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    }

    }
        
    console.log(tab);

    supp[i].classList.add('hidden');
    i++

});



b2.addEventListener('click', function () {
    tab.splice(tab,2);
    if (tab.length == 1) {
       b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
        alert('gg');
    }else{ 
      if (tab.length == 4) {
        function time(){
            const ordi = 3;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
              b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    


      }
       else if (tab.length == 3) {

              
              b3.style.display="none"
        function time(){
            const ordi = 2;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
               b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    }
    else if (tab.length == 2) {

              
              b2.style.display="none"
              b3.style.display="none"
      function time(){
            const ordi = 1;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
              b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    }

    else {
      function time(){
            const ordi = Math.floor(Math.random() * (3 - 0) +1);
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
              b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
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
    if (tab.length == 1) {
       b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
        alert('gg');
    }else { 
      if (tab.length == 4) {
        function time(){
            const ordi = 3;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
              b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    


      }
       else if (tab.length == 3) {

              
              b3.style.display="none"
        function time(){
            const ordi = 2;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
                alert('orfi');
                 b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    }
    else if (tab.length == 2) {

             
              b2.style.display="none"
              b3.style.display="none"
      function time(){
            const ordi = 1;
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {

             b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
        setTimeout(time, 1500)
    }

    else {
      function time(){
            const ordi = Math.floor(Math.random() * (3 - 0) +1);
        
            tab.splice(tab,ordi);
            if (tab.length == 1) {
              b.style.display="none";
              b2.style.display="none"
              b3.style.display="none"
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
            }else {
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
                supp[i].classList.add('hidden');
                i++
            }
            console.log(`${ordi} est le choix de l'ordi `);
        }
        setTimeout(time, 1500)
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





console.log(`${tab.length} est taille du tableaux`);
