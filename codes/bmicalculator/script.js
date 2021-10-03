document.getElementById("result").addEventListener("click",bmicalculate);
function bmicalculate(){
    let h=document.getElementById("height").value;
    let w=document.getElementById("weight").value;
    let newh=h/100;
    let bmi=w/(newh*newh);
    bmi=bmi.toFixed(1);
    console.log(bmi);
    document.getElementById("output").innerHTML=bmi;
}