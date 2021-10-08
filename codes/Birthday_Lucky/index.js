const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNo = document.querySelector("#luckyNo");
const btn = document.querySelector("#btn");
const outputBox = document.querySelector("#outputBox");

function valuesCompare(sum, luckyNo) {

  // console.log(sum,luckyNo);
  if (sum % (luckyNo.value) === 0) {
    // console.log(sum);
    // console.log(luckyNo);
    // console.log("Your Birthday is Lucky");
    outputBox.innerText = "Yay!!!Your birthday is lucky!🥳🎊"
  } else {
    // console.log(sum);
    // console.log(luckyNo.value);
    // console.log("Not so lucky;");
    outputBox.innerText = "Oops..Your Birthday is not Lucky!"
  }
}

function calculateSum(bdate) {
  bdate = bdate.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < bdate.length; i++) {
    sum = sum + Number(bdate.charAt(i));
  }
  // console.log(sum);

  return sum;
}







function birthdayLucky() {
  const bdate = dateOfBirth.value;
  const sum = calculateSum(bdate);
  if(sum&&bdate)
  {  valuesCompare(sum, luckyNo);
}
else
{
  outputBox.innerText="Please fill in both the values!";
}
}





btn.addEventListener('click', function clicking() {
  // console.log(dateOfBirth.value,luckyNo.value);
  // console.log(sum);
  birthdayLucky();
  // console.log("hello");
})
