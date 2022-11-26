var arrName = ["Zarirul","Nahid","Imrul","Hanzala","Shakil"];

arrName[0] = "Sakib";

arrName.pop(); // Remove last

arrName.shift(); // Remove First

arrName.unshift("Hadi"); // add First

arrName.splice(1,1);  //kon index theke kon index porjonto remove korbo seta

console.log("Whole ArrraY: ", arrName);

console.log("Index Wise Print: ",arrName[2]);

console.log("Array Length: ",arrName.length); // array length

console.log("Array Length: ",arrName['length']);  // array length
 
console.log("Index No.: ",arrName.indexOf("Hanzala")); // Find Index number

