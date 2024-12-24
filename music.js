
document.getElementById('email').addEventListener('change', function () {

});
document.getElementById('password').addEventListener('change', function () {

});

  function showPage() {
    let emailValue = document.getElementById('email').value;
    let passValue = document.getElementById('password').value;
     if(emailValue=="nikhilsingh160604@gmail.com" && passValue=="nikhil@2004"){

         document.querySelectorAll('.app').forEach(div => div.style.display = "none");
         document.getElementById('home').style.display = "block";
     }
     else{
        alert("wrong data entered")
     }
     
}
function on(){
    document.getElementById('search').focus();
}
function show(idi) {
    document.getElementById('home').style.display = "none";
  
    document.getElementById(idi).style.display = "block";

}


const arr=[
   "null","pritam","Arijit","sonu","kk","stebin","atif","sunidhi","monali","shreya"
]
function song(song){

    
 

    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(`.${arr[cell1]}-song`).forEach(div => div.style.display = "none");
    document.getElementById(song).style.display = "block";
   let a= document.getElementById(song+"1")
   
  if(a.dataset.playing=="true" || a.dataset.playing==undefined){
   a.dataset.playing=false;
  }

  if(a.dataset.playing=="false"){
    a.play();
  }

   document.getElementById(`${cell1}01`).addEventListener("click",()=>{
      a.currentTime-=5;
   })
   document.getElementById(`${cell1}03`).addEventListener("click",()=>{
    a.currentTime+=5;
 })
 document.getElementById(`${cell1}02`).addEventListener("click",()=>{
  if(a.dataset.playing=="false"){

  
    if(a.paused){
        a.play();
        
        console.log("hiii")
    }
    else{
        a.pause()
    }
 }
})

 document.getElementById(`${cell1}04`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}06`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}05`).addEventListener("click",()=>{
  if(a.dataset.playing=="false"){
 if(a.paused){
     a.play();
     console.log("hiii2222")
 }
 else{
     a.pause()
 }
}
})
document.getElementById(`${cell1}07`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}09`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}08`).addEventListener("click",()=>{
  if(a.dataset.playing=="false"){
 if(a.paused){
     a.play();
 }
 else{
     a.pause()
 }
}
})
document.getElementById(`${cell1}10`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}12`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}11`).addEventListener("click",()=>{
  if(a.dataset.playing=="false"){
 if(a.paused){
     a.play();
 }
 else{
     a.pause()
 }
}
})
document.getElementById(`${cell1}13`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}15`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}14`).addEventListener("click",()=>{
  if(a.dataset.playing=="false"){
 if(a.paused){
     a.play();
 }
 else{
     a.pause()
 }
}
})

}



function filterCards() {
    console.log('hi')
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.cards');
    
    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
       
        if (name.includes(searchInput)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}


function reverse(yo){
   
    
   
    console.log(document.getElementById(yo))
    document.getElementById(cell2).style.display="block"
    const element = document.getElementById(yo);
    if (element) {
        element.style.display = "none";
    } else {
        console.error(`Element with id "${yo}" not found.`);
        return;
    }
     let b=document.getElementById(yo+"1");
     
     b.pause()
     b.currentTime = 0; 
     b.dataset.playing=true;
    }
    


    

function single(singl){

  
    document.querySelectorAll(`.single-song`).forEach(div => div.style.display = "none");
    document.getElementById(singl).style.display = "block";
document.getElementById('home').style.display="none";

let a= document.getElementById(singl+"1")
   
if(a.dataset.playing=="true" || a.dataset.playing==undefined){
 a.dataset.playing=false;
}

if(a.dataset.playing=="false"){
  a.play();
}

 document.getElementById(`${cell3}11`).addEventListener("click",()=>{
    a.currentTime-=5;
 })
 document.getElementById(`${cell3}13`).addEventListener("click",()=>{
  a.currentTime+=5;
})
document.getElementById(`${cell3}12`).addEventListener("click",()=>{
if(a.dataset.playing=="false"){


  if(a.paused){
      a.play();
      
      console.log("hiii")
  }
  else{
      a.pause()
  }

}

})}


function singleback(h){
    document.getElementById('home').style.display="block";
    document.getElementById(h).style.display="none";
    let b=document.getElementById(h+"1");
     
     b.pause()
     b.currentTime = 0; 
     b.dataset.playing=true;
}
function showhome(ok){
    document.getElementById('home').style.display = "block";
   
    document.getElementById(ok).style.display = "none";
    
}

