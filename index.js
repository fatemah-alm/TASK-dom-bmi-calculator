function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

let bmiCalc = (weight)/((height/100)^2);
alert(bmiCalc);

if(bmiCalc < 18.5){
  alert("you are UNDERWEIGHT!!! you flat stick");
}
else if(18.5<bmiCalc && bmiCalc<24.9)
{
  alert("YOU ARE HEALTHY!!!! daaaaaaamn")
}
else if(25.0<bmiCalc && bmiCalc<29.9){
  alert("YOU ARE OVERWEIGHT!!!! start a diet!")
}
else if (30<bmiCalc)
{
  alert("YOU ARE A POTATO COUCH!!")
}
else 
{
  alert("ERROR!");
}
// challenge 3 

if((age >19 && bmiCalc < 18.5){
  alert("you are UNDERWEIGHT!!! you flat stick");
}
else if(18.5<bmiCalc && bmiCalc<24.9)
{
  alert("YOU ARE HEALTHY!!!! daaaaaaamn")
}
else if(25.0<bmiCalc && bmiCalc<29.9){
  alert("YOU ARE OVERWEIGHT!!!! start a diet!")
}
else if (30<bmiCalc)
{
  alert("YOU ARE A POTATO COUCH!!")
}

}
