//3. Write a function called make_array_avg() which will take an array of integers and the size of that array and return the average of those values.

var arr = [13, 25, 35, 40];
var n = arr.length;
var sum = 0;
function make_array_avg(arr, n) {
  for (var i = 0; i < n; i++) {
    sum = sum + arr[i];
    var avg = sum / 4;
    return avg;
  }
}
var avg_of_int = make_array_avg(arr,n);
console.log("The average of three integers is:", avg_of_int);