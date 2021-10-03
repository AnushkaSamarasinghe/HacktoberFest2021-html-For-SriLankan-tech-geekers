var btn = document.querySelectorAll('.r > div')
var inp = document.querySelector('input')

btn.forEach(val=>{
    val.addEventListener('click',()=>{
        inp.value+=  val.innerText
        

    })
})