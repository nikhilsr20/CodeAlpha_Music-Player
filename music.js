
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
function song(song){
    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(".pritam-song").forEach(div => div.style.display = "none");
    document.getElementById(song).style.display = "block";
   let a= document.getElementById(song+"1")
   a.play();
   document.getElementById('101').addEventListener("click",()=>{
      a.currentTime-=5;
   })
   document.getElementById('103').addEventListener("click",()=>{
    a.currentTime+=5;
 })
 document.getElementById('102').addEventListener("click",()=>{
    if(a.paused){
        a.play();
    }
    else{
        a.pause()
    }
 })
  
}
