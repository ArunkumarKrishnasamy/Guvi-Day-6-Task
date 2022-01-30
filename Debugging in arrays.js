// Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i <11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);
// Output: 1234567891011

// Write a code to print the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i]+","
}
console.log(new_string.slice(0,-1));
// Output: 1,2,3,4,5,6,7,8,9,10,11

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var new_string = "";
for (var i = 10; i >= 0; i--) {
 new_string += numsArr[i] +" "
}
console.log(new_string.trim());
// Output: 11 10 9 8 7 6 5 4 3 2 1

// Write a code to replace the array value — If the number is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even";
 }
}
console.log(numsArr);
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

// Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
 numsArr[i] = "even";
 }
}
console.log(numsArr);
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

// Write a code to add all the numbers in the array
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);
// Output: 66

// Write a code to add the "even" numbers only
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0){
 sum += numsArr[i];
}}
console.log(sum);
// Output: 30

// Write a code to add the even numbers and subract the odd numbers
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
      if (numsArr[i]%2==0) {
        sum += numsArr[i]
      } else {
        sum -= numsArr[i]
      }
}
console.log(sum);
// Output: 94

// Write a code to print inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log(numsArr[i])
}
// Output : Array(5) [ 1, 2, 3, 4, 5 ]
//          Array(6) [ 6, 7, 8, 9, 10, 11 ]

// Write a code to print elements in the inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all +=inner_array[j]}
}
console.log(str_all);
// Output: 1234567891011

// Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [ [1, 2, 3, 4, 5], [ 6, 7, 8, 9, 10, 11] ];
var str_all=0;
//console.log(numsArr);
for (var i = 0; i < numsArr.length; i++) {
 var inner_array  = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
     if(j %2 == 0 )
      {
        inner_array[j] = "even"
       }
    } 
    console.log(inner_array);
}
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

// Write a code to print elements in the inner arrays in reverse
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr.length-1; i >=0; i--) {
    var inner_array = numsArr[i];
    for(var j = inner_array.length-1; j>= 0 ;j-- )
        {str_all +=inner_array[j]+" "}
   }
   console.log(str_all.trim());
// Output: 11 10 9 8 7 6 5 4 3 2 1

// // Write a code to add elements in the inner arrays based on odd or even values
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j]
 }
 else
 {
 sum_even += inner_array[j]
 }
}
}
console.log(sum_odd);
console.log(sum_even);
// Output: 36 30