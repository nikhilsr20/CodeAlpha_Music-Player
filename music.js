
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