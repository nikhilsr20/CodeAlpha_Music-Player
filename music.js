
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
    document.querySelectorAll(".cards").forEach(div => div.style.display = "none");
    document.getElementById(idi).style.display = "block";

}
function opacity(){
    document.getElementById('image11').style.opacity="0.6"
}

const arr=[
   "null","pritam","Arijit","sonu","kk","stebin","atif","sunidhi","monali","shreya"
]
function song(song){

  
  console.log(cell1);

    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(`.${arr[cell1]}-song`).forEach(div => div.style.display = "none");
    document.getElementById(song).style.display = "block";
   let a= document.getElementById(song+"1")
   a.play( );
  
   document.getElementById(`${cell1}01`).addEventListener("click",()=>{
      a.currentTime-=5;
   })
   document.getElementById(`${cell1}03`).addEventListener("click",()=>{
    a.currentTime+=5;
 })
 document.getElementById(`${cell1}02`).addEventListener("click",()=>{
    if(a.paused){
        a.play();
        
    }
    else{
        a.pause()
    }
 })

 document.getElementById(`${cell1}04`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}06`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}05`).addEventListener("click",()=>{
 if(a.paused){
     a.play();
 }
 else{
     a.pause()
 }
})
document.getElementById(`${cell1}07`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}09`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}08`).addEventListener("click",()=>{
 if(a.paused){
     a.play();
 }
 else{
     a.pause()
 }
})
document.getElementById(`${cell1}10`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}12`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}11`).addEventListener("click",()=>{
 if(a.paused){
     a.play();
 }
 else{
     a.pause()
 }
})
document.getElementById(`${cell1}13`).addEventListener("click",()=>{
   a.currentTime-=5;
})
document.getElementById(`${cell1}15`).addEventListener("click",()=>{
 a.currentTime+=5;
})
document.getElementById(`${cell1}14`).addEventListener("click",()=>{
 if(a.paused){
     a.play();
 }
 else{
     a.pause()
 }
})

}

function reverse(yo){
    document.querySelectorAll(yo).forEach(div=>{div.style.display="none"})
    document.getElementById(cell2).style.display="block"
     let b=document.getElementById(yo);
     b.pause()
     b.currentTime = 0;
     b.remove(yo);
     return;
}


 
