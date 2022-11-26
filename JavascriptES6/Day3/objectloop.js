var zarir = {
    name:"Muhammad Zarirul Islam",
    age:22,
    country:"Bangladesh",
    isStudent:true,
}

for(propertyNam in zarir){
    //console.log(propertyName);

    var values = zarir[propertyNam];
    console.log(propertyNam, values);
}