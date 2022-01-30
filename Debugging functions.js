// // Fix the code to get the largest of three.
let f,s,t;
aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);
// //    Output : 3

// // Fix the code to Sum of the digits present in the number
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+= +n[i];
 }
 return sum;
}
let b=add("123");
console.log(b);
// // Output : 6

// // Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){ 
 sum += arr[i];
 }
 console.log(sum);
})(arr);
// // Output : 38

// // Fix the code to gen Title caps.
var arr = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arr) {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano(arr);
// // Output : Guvi Geek Zen Fullstack

// // Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
let temp=0;
const sum = ((a) => {
    for(let i=0;i<a.length;i++){
        temp+=a[i];
    }
return temp;
})  
console.log(sum(num));
// // Output :550

// // Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function(arr){
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);
})(arr);
// // Output : [6,8,6]

// // Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})(arr);
// // Output : Guvi Geek Zen Fullstack

// // print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})(arr);
// // Output : 1 3 5 7 79 7 9

// // Fix the code to reverse.
(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")
// Output : dcba

// //    Fix the code to remove duplicates.
var res = function(arr){
    let newArr = [];
    for(var i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) === -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","duplicate","geeK"])
// // Output :  [ 'guvi', 'geek', 'duplicate', 'geeK' ]

// Fix the code to give the below output:
// [{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
//  {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}]
var array =[[["firstname","vasanth"],["lastname","Raja"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
var new_object={};
while(array.length>0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 
 }
 console.log(new_object);
 final.push(new_object);
}

// Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
    let sum =c;
 if(a%2!==0 && c%2!==0 )
 {
   console.log(c);
     return a+c;
 }
});
console.log(s);