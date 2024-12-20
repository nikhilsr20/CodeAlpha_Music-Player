
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
const artists = {
    pritam: ["tumsehi", "Omaahi", "shayad", "terahone", "kesariya"],
    arijit: ["satranga", "Omaahi", "shayad", "tumhiho", "aasannhi"],
    sonu: ["sapna", "abhimujhme", "sandese", "meredholna", "papa"],
    kk: ["ajabsi", "dil", "khuda", "merimaa", "tujomila"],
    stebin: ["baarishban", "pyarkrte", "tummile", "baarish", "jaana"],
    atif: ["mainagar", "honatha", "selfish", "jeenelaga", "tajdar"],
};

function song(song){
    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(`.${artists[song]} -song`).forEach(div => div.style.display = "none");
    document.getElementById(song).style.display = "block";
   let a= document.getElementById(song+"1")
   a.play();
   if(song+"1"=="pritam-song-tumsehi1"){
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
 })}
 if(song+"1"=="pritam-song-Omaahi1"){
    document.getElementById('104').addEventListener("click",()=>{
       a.currentTime-=5;
    })
    document.getElementById('106').addEventListener("click",()=>{
     a.currentTime+=5;
  })
  document.getElementById('105').addEventListener("click",()=>{
     if(a.paused){
         a.play();
     }
     else{
         a.pause()
     }
  })}
  
  if(song+"1"=="pritam-song-shayad1"){
    document.getElementById('107').addEventListener("click",()=>{
       a.currentTime-=5;
    })
    document.getElementById('109').addEventListener("click",()=>{
     a.currentTime+=5;
  })
  document.getElementById('108').addEventListener("click",()=>{
     if(a.paused){
         a.play();
     }
     else{
         a.pause()
     }
  })}
  if(song+"1"=="pritam-song-terahone1"){
    document.getElementById('110').addEventListener("click",()=>{
       a.currentTime-=5;
    })
    document.getElementById('112').addEventListener("click",()=>{
     a.currentTime+=5;
  })
  document.getElementById('111').addEventListener("click",()=>{
     if(a.paused){
         a.play();
     }
     else{
         a.pause()
     }
  })}
  if(song+"1"=="pritam-song-kesariya1"){
    document.getElementById('113').addEventListener("click",()=>{
       a.currentTime-=5;
    })
    document.getElementById('115').addEventListener("click",()=>{
     a.currentTime+=5;
  })
  document.getElementById('114').addEventListener("click",()=>{
     if(a.paused){
         a.play();
     }
     else{
         a.pause()
     }
  })}
  
}


































function song2(song2){
    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(".Arijit-song").forEach(div => div.style.display = "none");
    document.getElementById(song2).style.display = "block";
    let b= document.getElementById(song2+"1")
    console.log(b)
    b.play();
   if(song2+"1"=="Arijit-song-satranga1"){
   document.getElementById('201').addEventListener("click",()=>{
      b.currentTime-=5;
   })
   document.getElementById('203').addEventListener("click",()=>{
    b.currentTime+=5;
 })
 document.getElementById('202').addEventListener("click",()=>{
    if(b.paused){
        b.play();
    }
    else{
        b.pause()
    }
 })}
 if(song2+"1"=="Arijit-song-Omaahi1"){
    document.getElementById('204').addEventListener("click",()=>{
       b.currentTime-=5;
    })
    document.getElementById('206').addEventListener("click",()=>{
     b.currentTime+=5;
  })
  document.getElementById('205').addEventListener("click",()=>{
     if(b.paused){
         b.play();
     }
     else{
         b.pause()
     }
  })}
  
  if(song2+"1"=="Arijit-song-shayad1"){
    document.getElementById('207').addEventListener("click",()=>{
       b.currentTime-=5;
    })
    document.getElementById('209').addEventListener("click",()=>{
     b.currentTime+=5;
  })
  document.getElementById('208').addEventListener("click",()=>{
     if(a.paused){
         b.play();
     }
     else{
         b.pause()
     }
  })}
  if(song2+"1"=="Arijit-song-tumhiho1"){
    document.getElementById('210').addEventListener("click",()=>{
       b.currentTime-=5;
    })
    document.getElementById('212').addEventListener("click",()=>{
     b.currentTime+=5;
  })
  document.getElementById('211').addEventListener("click",()=>{
     if(b.paused){
         b.play();
     }
     else{
         b.pause()
     }
  })}
  if(song2+"1"=="Arijit-song-aasannhi1"){
    document.getElementById('213').addEventListener("click",()=>{
       b.currentTime-=5;
    })
    document.getElementById('215').addEventListener("click",()=>{
     b.currentTime+=5;
  })
  document.getElementById('214').addEventListener("click",()=>{
     if(b.paused){
         b.play();
     }
     else{
         b.pause()
     }
  })}
  
}
function song3(song3){
    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(".sonu-song").forEach(div => div.style.display = "none");
    document.getElementById(song3).style.display = "block";
    let c= document.getElementById(song3+"1")
    console.log(c)
    c.play();
   if(song3+"1"=="sonu-song-sapna1"){
   document.getElementById('301').addEventListener("click",()=>{
      c.currentTime-=5;
   })
   document.getElementById('303').addEventListener("click",()=>{
    c.currentTime+=5;
 })
 document.getElementById('302').addEventListener("click",()=>{
    if(c.paused){
        c.play();
    }
    else{
        c.pause()
    }
 })}
 if(song3+"1"=="sonu-song-abhimujhme1"){
    document.getElementById('304').addEventListener("click",()=>{
       c.currentTime-=5;
    })
    document.getElementById('306').addEventListener("click",()=>{
     c.currentTime+=5;
  })
  document.getElementById('305').addEventListener("click",()=>{
     if(c.paused){
         c.play();
     }
     else{
         c.pause()
     }
  })}
  
  if(song3+"1"=="sonu-song-sandese1"){
    document.getElementById('307').addEventListener("click",()=>{
       c.currentTime-=5;
    })
    document.getElementById('309').addEventListener("click",()=>{
     c.currentTime+=5;
  })
  document.getElementById('308').addEventListener("click",()=>{
     if(c.paused){
         c.play();
     }
     else{
         c.pause()
     }
  })}
  if(song3+"1"=="sonu-song-meredholna1"){
    document.getElementById('310').addEventListener("click",()=>{
       c.currentTime-=5;
    })
    document.getElementById('312').addEventListener("click",()=>{
     c.currentTime+=5;
  })
  document.getElementById('311').addEventListener("click",()=>{
     if(c.paused){
         c.play();
     }
     else{
         c.pause()
     }
  })}
  if(song3+"1"=="sonu-song-papa1"){
    document.getElementById('313').addEventListener("click",()=>{
       c.currentTime-=5;
    })
    document.getElementById('315').addEventListener("click",()=>{
     c.currentTime+=5;
  })
  document.getElementById('314').addEventListener("click",()=>{
     if(c.paused){
         c.play();
     }
     else{
         c.pause()
     }
  })}
  
}



function song4(song4){
    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(".kk-song").forEach(div => div.style.display = "none");
    document.getElementById(song4).style.display = "block";
    let d= document.getElementById(song4+"1")
    
    d.play();
   if(song4+"1"=="kk-song-ajabsi1"){
   document.getElementById('401').addEventListener("click",()=>{
      d.currentTime-=5;
   })
   document.getElementById('403').addEventListener("click",()=>{
    d.currentTime+=5;
 })
 document.getElementById('402').addEventListener("click",()=>{
    if(d.paused){
        d.play();
    }
    else{
        d.pause()
    }
 })}
 if(song4+"1"=="kk-song-dil1"){
    document.getElementById('404').addEventListener("click",()=>{
       d.currentTime-=5;
    })
    document.getElementById('406').addEventListener("click",()=>{
     d.currentTime+=5;
  })
  document.getElementById('405').addEventListener("click",()=>{
     if(d.paused){
         d.play();
     }
     else{
         d.pause()
     }
  })}
  
  if(song4+"1"=="kk-song-khuda1"){
    document.getElementById('407').addEventListener("click",()=>{
       d.currentTime-=5;
    })
    document.getElementById('409').addEventListener("click",()=>{
     d.currentTime+=5;
  })
  document.getElementById('408').addEventListener("click",()=>{
     if(d.paused){
         d.play();
     }
     else{
         d.pause()
     }
  })}
  if(song4+"1"=="kk-song-merimaa1"){
    document.getElementById('410').addEventListener("click",()=>{
       d.currentTime-=5;
    })
    document.getElementById('412').addEventListener("click",()=>{
     d.currentTime+=5;
  })
  document.getElementById('411').addEventListener("click",()=>{
     if(d.paused){
         d.play();
     }
     else{
         d.pause()
     }
  })}
  if(song4+"1"=="kk-song-tujomila1"){
    document.getElementById('413').addEventListener("click",()=>{
       d.currentTime-=5;
    })
    document.getElementById('415').addEventListener("click",()=>{
     d.currentTime+=5;
  })
  document.getElementById('414').addEventListener("click",()=>{
     if(d.paused){
         d.play();
     }
     else{
         d.pause()
     }
  })}
  
}



function song5(song5){
    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(".stebin-song").forEach(div => div.style.display = "none");
    document.getElementById(song5).style.display = "block";
    let e= document.getElementById(song5+"1")
    
    e.play();
   if(song5+"1"=="stebin-song-baarishban1"){
   document.getElementById('501').addEventListener("click",()=>{
      e.currentTime-=5;
   })
   document.getElementById('503').addEventListener("click",()=>{
    e.currentTime+=5;
 })
 document.getElementById('502').addEventListener("click",()=>{
    if(e.paused){
        e.play();
    }
    else{
        e.pause()
    }
 })}
 if(song5+"1"=="stebin-song-pyarkrte1"){
    document.getElementById('504').addEventListener("click",()=>{
       e.currentTime-=5;
    })
    document.getElementById('506').addEventListener("click",()=>{
     e.currentTime+=5;
  })
  document.getElementById('505').addEventListener("click",()=>{
     if(e.paused){
         e.play();
     }
     else{
         e.pause()
     }
  })}
  
  if(song5+"1"=="stebin-song-tummile1"){
    document.getElementById('507').addEventListener("click",()=>{
       e.currentTime-=5;
    })
    document.getElementById('509').addEventListener("click",()=>{
     e.currentTime+=5;
  })
  document.getElementById('508').addEventListener("click",()=>{
     if(e.paused){
         e.play();
     }
     else{
         e.pause()
     }
  })}
  if(song5+"1"=="stebin-song-baarish1"){
    document.getElementById('510').addEventListener("click",()=>{
       e.currentTime-=5;
    })
    document.getElementById('512').addEventListener("click",()=>{
     e.currentTime+=5;
  })
  document.getElementById('511').addEventListener("click",()=>{
     if(e.paused){
         e.play();
     }
     else{
         e.pause()
     }
  })}
  if(song5+"1"=="stebin-song-jaana1"){
    document.getElementById('513').addEventListener("click",()=>{
       e.currentTime-=5;
    })
    document.getElementById('515').addEventListener("click",()=>{
     e.currentTime+=5;
  })
  document.getElementById('454').addEventListener("click",()=>{
     if(e.paused){
         e.play();
     }
     else{
         e.pause()
     }
  })}
  
}




function song6(song6){
    document.querySelectorAll(".inside").forEach(div => div.style.display = "none");
    document.querySelectorAll(".atif-song").forEach(div => div.style.display = "none");
    document.getElementById(song6).style.display = "block";
    let f= document.getElementById(song6+"1")
    
    f.play();
   if(song6+"1"=="atif-song-mainagar1"){
   document.getElementById('601').addEventListener("click",()=>{
      f.currentTime-=5;
   })
   document.getElementById('603').addEventListener("click",()=>{
    f.currentTime+=5;
 })
 document.getElementById('602').addEventListener("click",()=>{
    if(f.paused){
        f.play();
    }
    else{
        f.pause()
    }
 })}
 if(song6+"1"=="atif-aslam-honatha1"){
    document.getElementById('604').addEventListener("click",()=>{
       f.currentTime-=5;
    })
    document.getElementById('606').addEventListener("click",()=>{
     f.currentTime+=5;
  })
  document.getElementById('605').addEventListener("click",()=>{
     if(f.paused){
         f.play();
     }
     else{
         f.pause()
     }
  })}
  
  if(song6+"1"=="atif-song-selfish1"){
    document.getElementById('607').addEventListener("click",()=>{
       f.currentTime-=5;
    })
    document.getElementById('609').addEventListener("click",()=>{
     f.currentTime+=5;
  })
  document.getElementById('608').addEventListener("click",()=>{
     if(f.paused){
         f.play();
     }
     else{
         f.pause()
     }
  })}
  if(song6+"1"=="atif-song-jeenelaga1"){
    document.getElementById('610').addEventListener("click",()=>{
       f.currentTime-=5;
    })
    document.getElementById('612').addEventListener("click",()=>{
     f.currentTime+=5;
  })
  document.getElementById('611').addEventListener("click",()=>{
     if(f.paused){
         f.play();
     }
     else{
         f.pause()
     }
  })}
  if(song6+"1"=="atif-song-tajdar1"){
    document.getElementById('613').addEventListener("click",()=>{
       f.currentTime-=5;
    })
    document.getElementById('615').addEventListener("click",()=>{
     f.currentTime+=5;
  })
  document.getElementById('614').addEventListener("click",()=>{
     if(f.paused){
         f.play();
     }
     else{
         f.pause()
     }
  })}
  
}