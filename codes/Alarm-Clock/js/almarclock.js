setInterval(() => {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  hrotation = h * 30 + m / 2;
  mrot = m * 6;
  srot = s * 6;
  hr.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrot}deg)`;
  sec.style.transform = `rotate(${srot}deg)`;
}, 1000);

showcard();
let submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", addalarm);

function showcard(){
    let inputtxt = document.getElementById("inputtxt").value;
    let addcard = document.getElementById("addcard");
    let alarmtime = localStorage.getItem("alarmtime");
    if(alarmtime ==null )
    {
        noteobj=[];
    }
    else
    {
        noteobj=JSON.parse(alarmtime );
    }
    let html='';
    noteobj.forEach(function(element,index){
      html += `<div class="card mx-3" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-v8VpXgTghZm5rHS16b5Apps-vQ5HAsROeA&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Alarm  ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-danger" id="${index}" onclick="deletealarm(this.id)">Delete Alarm</button>
        </div>
      </div>`;
    });
  addcard.innerHTML = html;
}

function deletealarm(index){
    let alarmtime=localStorage.getItem("alarmtime");
    if(alarmtime==null )
    {
        noteobj=[];
    }
    else
    {
        noteobj=JSON.parse(alarmtime);
    }
    noteobj.splice(index,1);
    localStorage.setItem("alarmtime",JSON.stringify( noteobj));
    showcard();   
}

function addalarm() {
  let inputtxt = document.getElementById("inputtxt").value;
  let alarmtime = localStorage.getItem("alarmtime");
  if (alarmtime == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(alarmtime);
  }
  noteobj.push(inputtxt);
  localStorage.setItem("alarmtime",JSON.stringify(noteobj));
  document.getElementById("inputtxt").value='';
  showcard();
}

//To produce sound
let alarmtime = localStorage.getItem("alarmtime");
if(alarmtime ==null )
{
    noteobj=[];
}
else
{
    noteobj=JSON.parse(alarmtime );
  }
  let audio=new Audio('alarm.wav');
  audio.currentTime=0;
  noteobj.forEach(function(element){ 
    let nowdate=new Date();
    let alarmdate=new Date(element);
    let timetoalarm=alarmdate-nowdate;
    if(timetoalarm>=0){
      console.log(timetoalarm);
      setTimeout(() => {
        console.log('Ringing Now');
        audio.play();
        setTimeout(() => {
          console.log(timetoalarm);
          audio.pause()
          audio.load()
        }, 1000)
        
    },timetoalarm);
  }
});