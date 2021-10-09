var output = document.getElementById('output');
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');

plus.onclick = () => {
  output.value++;
}
minus.onclick = () => {
  if(output.value >0)
  output.value--;
}
