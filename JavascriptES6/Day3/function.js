// function basic()
// {
//     console.log(2+3);
// }

// basic();

//Function Declaration

function calage(birthyear){
    return 2037 - birthyear;
}

var age1 = calage(1991);


//Function Expression

var calage2 = function(birthyear){
    return 2037 - birthyear;
}

var age2 = calage2(1991);


console.log(age1,age2);