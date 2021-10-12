const canvas = document.getElementById("canvas")

canvas.width = window.innerWidth - 90;
canvas.height = window.innerHeight - 250;

let context = canvas.getContext("2d")
context.fillStyle = "white" //this is the background 
context.fillRect(0,0, canvas.width, canvas.height)

let penColor = "black"
let penWidth = "2"
let isDrawing = false 
let startBackground = "white"
let restoreUndo = []
let index = -1

canvas.addEventListener('touchstart', start, {passive: false}, false)
canvas.addEventListener('touchmove', draw, {passive: false}, false)
canvas.addEventListener('mousedown', start, false)
canvas.addEventListener('mousemove', draw, false)

canvas.addEventListener('touchend', stop, {passive: false}, false)
canvas.addEventListener('mouseup', stop, false)
canvas.addEventListener('mouseout', stop, false)


function start(e){
    isDrawing = true 
    context.beginPath() //start drawing and move it to wherever the client does
    context.moveTo(e.clientX - canvas.offsetLeft, 
                    e.clientY - canvas.offsetTop)
    e.preventDefault() //i think it's because it starts at 0,0
}

function draw(e){
    if(isDrawing){
        context.lineTo(e.clientX - canvas.offsetLeft, 
            e.clientY - canvas.offsetTop)
    context.strokeStyle = penColor
    context.lineWidth = penWidth
    context.lineCap = "round"
    context.lineJoint = "round"
    context.stroke() //this is what makes the line u gotta call it at the end
    }
    e.preventDefault()
}

function stop(e){
    if(isDrawing){
        context.stroke()
        context.closePath() //remember in start you started it
        isDrawing = false
    }
    e.preventDefault()

    if(e.type != 'mouseout'){
    restoreUndo.push(context.getImageData(0, 0, canvas.width, canvas.height))
    index += 1 //add to the empty array of undo so when someone stops it stores it to last saved
    }
}

function changeColor(element){
    penColor = element.style.background
}

function clearCanvas(){
    context.fillStyle = startBackground
    context.clearRect(0, 0, canvas.width, canvas.height) //clear canvas
    context.fillRect(0, 0, canvas.width, canvas.height) //fill it up with the same color again to work with
    restoreUndo = []
    index = -1
}

function undoLast(){
    if(index <= 0){
        clearCanvas()
    } else {
        index -=1
        restoreUndo.pop()
        context.putImageData(restoreUndo[index], 0, 0)
    }
}