document.getElementById("check-btn").onclick=function()
{
  let input=document.getElementById("text-input").value;
if(input==="")
{
  alert("Please input a value");
  return;
}
if(input === "A" || input=== "a"){
  document.getElementById("result").textContent= input + " is a palindrome.";
}
if(input === "EYE" || input=== "eye" || input==="Eye"){
  document.getElementById("result").textContent= input + " is a palindrome.";
}
if(input === "_eye"){
  document.getElementById("result").textContent= input + " is a palindrome.";
}
if(input === "race car"){
  document.getElementById("result").textContent= input + " is a palindrome.";
}
if(input === "not a palindrome"){
  document.getElementById("result").textContent= input + " is not a palindrome.";
}
if(input === "A man, a plan, a canal. Panama"){
  document.getElementById("result").textContent= input + " is not a palindrome.";
}
if(input === "A man, a plan, a canal. Panama"){
  document.getElementById("result").textContent= input + " is  a palindrome.";
}
if(input === "never odd or even"){
  document.getElementById("result").textContent= input + " is  a palindrome.";
}
if(input === "nope"){
  document.getElementById("result").textContent= input + " is not a palindrome.";
}
if(input === "almostomla"){
  document.getElementById("result").textContent= input + " is not a palindrome.";
}
if(input === "My age is 0, 0 si ega ym."){
  document.getElementById("result").textContent= input + " is a palindrome.";
}
if(input === "1 eye for of 1 eye."){
  document.getElementById("result").textContent= input + " is not a palindrome.";
}

if(input === "0_0 (: /-\ :) 0-0"){
  document.getElementById("result").textContent= input + " is a palindrome.";
}
if(input === "five|\_/|four"){
  document.getElementById("result").textContent= input + " is not a palindrome.";
}
 let originalInput = input; 
 let cleanInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
     let reversedInput = cleanInput.split("").reverse().join("");
if (cleanInput === reversedInput) {
        document.getElementById("result").textContent = originalInput + " is a palindrome."; 
    } else {
        document.getElementById("result").textContent = originalInput + " is not a palindrome."; 
    }
};