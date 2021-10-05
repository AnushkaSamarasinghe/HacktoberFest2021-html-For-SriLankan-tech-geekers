window.addEventListener('DOMContentLoaded',main);
const OPTS = ['*','/','+','-','9','8','7','6','5','4','3','2','1','0','.']; //all keys
const SPEC = ['*','/','+','-']; //special function keys


function main(){
    let dec = false;
    let eva = false;
    document.title = "JS Calculator";
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    container.style.backgroundColor = 'lightgray';
    document.body.appendChild(container);
//output field
    const output = document.createElement('input');
    output.setAttribute('type','text');
    output.classList.add('output');
    output.style.textAlign = 'right';
    output.style.fontSize = '3rem';
    output.style.width = '100%';    
    container.appendChild(output);
//main body
    const mainBody = document.createElement('div');
    mainBody.classList.add('mainBody');
    mainBody.style.width = '100%';
    container.appendChild(mainBody);
    OPTS.forEach(function(val){
        //console.log(val);
        btnMaker(val,addOutput);
    })

    btnMaker('=',evalOutput);
    btnMaker('C',clrOutput);

    function evalOutput()
    {
        output.style.border = "1px solid black";
        if(output.value === ""){
            output.style.border = "1px solid red";

        }else if(eva){
            output.style.border = "1px solid red";
        }
        else{
            output.value = eval(output.value);
        }
        dec = output.value.includes('.');

    }
    function clrOutput(){
        output.style.border = "1px solid black";
        output.value = "";
    }


    function btnMaker(txt,myFunction){
        let btn = document.createElement('button');
        btn.setAttribute('type','button');
        btn.style.width = '23%';
        btn.style.lineHeight =  '50px';
        btn.style.margin = '1%';
        btn.style.fontSize = '2rem';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click',myFunction);
        mainBody.appendChild(btn);

    }

    function addOutput(e){
        //console.log(e);
        output.style.border = "1px solid black";
        let char = e.target.val;
        
        if(char == '.'){
            if(dec){
                char = '';
                output.style.border = "1px solid red";
            }else{
                dec = true;
            }
        }
        eva = SPEC.includes(char);
        if(eva){
            dec = false;
        }
        output.value += char;
    }
    



}