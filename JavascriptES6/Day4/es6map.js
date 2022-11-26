var myMap = new Map();

myMap.set("Key1","Bangladesh");
myMap.set("Key2","India");
myMap.set("Key3","Pakistan");
myMap.set("Key4","Nepal");
myMap.set("Key5","Bhutan");
myMap.set("Key6","Thailand");
myMap.set("Key7","Turkey");

//myMap.delete("Key1");

//myMap.clear();


// var val = myMap.get("Key6");
// console.log(val);

if(myMap.has("Key10")){
    console.log("Yes");
}
else{
    console.log("No");
}

//console.log(myMap.values());

// for(var myvalue of myMap.values()){
//     console.log(myvalue);
// }

// for(var mykey of myMap.keys()){
//     console.log(mykey);
// }