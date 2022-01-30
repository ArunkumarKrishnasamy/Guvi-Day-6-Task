// Find the culprit and invoke the alert
// Alert functions
alert("I'm invoked!");

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor     
 ld`)        // this is multiple line code
alert(3 +
1
+ 2); // this is multiple line code and its working as single condition as result 6

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert("Hello"+" "+ admin ); // "Hello Guvi geek"

let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);

// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = "2" <"12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
// Assigned condtion of the strings in a is false. Now it changed correctly. 

// How to get the success in console.
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a>=0) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
// success is got in the console.

// How to get the correct score in console.
let value = prompt("How many runs you scored in this ball");
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
// Correct score is got in the console.

// Fix the code to welcome the Employee
let login = 'Employee';
let message = (login == 'Employee')  ? "Welcome":
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);
// code fixed.

//   Fix the code to welcome the boss
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);
//   code fixed

// Fix the code to welcome the boss
let message;
let lock = "";
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
//   code fixed

// Fix the code to welcome the boss
let message;
let lock ;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
// code fixed

// Change the code to print 3 2 1
let i = 3;
while (i) {
  console.log( i-- );
}

//   Change the code to print 1 to 10 in 4 lines
let num = 1
console.log(num)
num += 1
console.log(num, num += 1,num += 1)
console.log(num += 1,num += 1,num += 1)
console.log(num += 1,num += 1,num += 1)
console.log(num += 1)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

// Change the code to print even numbers
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

  // // Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// Fix the code to disarm the bomb.
let countdown = 100;
let bombsafe;
while (countdown > 0) {
  countdown--;
  if(countdown > 0)
  {
    bombsafe =true;
  }
}
if(bombsafe=true){
    console.log("bomb diasrmed");
}

// Whats the msg printed and why?
var lemein = "";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg +="Hello";
}
console.log(msg);
// message printed is "Empty string". Because it does not go inside "if" condition. 