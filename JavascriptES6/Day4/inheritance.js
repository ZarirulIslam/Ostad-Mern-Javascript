class parent{

    hello1(){
        console.log("Hello One");
    }
    hello2(){
        console.log("Hello Two");
    }
}

// class child extends parent{
//     hello1(){
//         console.log("Hello One Hello One"); // Method Overrriding
//     }
// }

class child extends parent{
    demo(){
        super.hello1();
        super.hello2();
    }
}

var obj = new child();

// obj.hello1();
// obj.hello2();

obj.demo();