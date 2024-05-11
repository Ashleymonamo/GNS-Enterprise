


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> IF STATEMENTS <<<<<<<<<<<<<<<<<<<<<<<<<<<<


let name = prompt("Enter your name");
let age = parseInt(prompt("Enter your age"));
let gender = prompt("Enter your gender");

let monthSal = parseFloat(prompt("Enter your monthly income"));
let anual = monthSal * 12;



console.log(" ");

if(anual == 100000){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log(" ");

    console.log("Your monthly income is : R" + monthSal);
    console.log("Your annoual income is : R" + anual);
    console.log("You qualify for a loan");
}
else if (anual >= 50000 && anual < 100000){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log(" ");

    console.log("Your monthly income is : R" + monthSal);
    console.log("Your annoual income is : R" + anual);
    console.log("You are going on leave next week");
} 
else if(anual < 50000 && anual > 100000)
{
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log(" ");

    console.log("Your monthly income is : R" + monthSal);
    console.log("Your annoual income is : R" + anual);
    console.log("Your leave is next year Buddy")
}

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 >>>>>>>>>>>>>>>>>>>>>> ARRAYS <<<<<<<<<<<<<<<<<<<<

 let letters = ["a","b","c","d","e"];

letters.push("f")
letters.unshift("alphabet")

letters.pop();
letters.shift();
letters.unshift()
letters.split("")


let numbers = [1,2,3,4,5];

var sent="I enjoy being at Adom";

var sentArr=sent.split(" ");

var mixNumbers=[45,31,50,1,70];

var deleteNum=[mixNumbers.filter((n)=>{
    return n!==70
})]

console.log(mixNumbers);

   // for (const course of courses) {
    //     console.log(course);
    // }

    // for (let i = 0; i < courses.length; i++) {
    //     const course = courses[i];

    //     console.log(course);
    // }

    let i=0 
 

    // while (i < courses.length) {
    
    //     console.log(courses[i]);
    //     i+=1;
    // }

>>>>>>>>>>>>>>>>>>>> ARRAY METHODS <<<<<<<<<<<<<<


var smallNum= Math.max(parseInt(mixNumbers));

var sortArr=mixNumbers.sort();
sentArr.reverse();
var reverseSent = sentArr.join();

console.log(sent);
console.log(sentArr);
console.log(reverseSent);
console.log(sortArr);

console.log(deleteNum);*/


// var letters = ["a","b","c","d","e"];

// for (let i = 0; i < letters.length; i++) {
//     const element = letters[i];
//     console.log(element);
// }


// var letters = ["a","b","c","d","e"];

// let i=0;

// while (i <letters.length) {
//     console.log(letters[i]);
//     i++
// }

// var letters = ["a","b","c","d","e"];

// letters.forEach(element => {

//     console.log(element);
// });

/*
//Functions
let Test1 = 30;
let Test2 = 2;
let Test3 =45;

additon(Test1,Test2,Test3);//num1 n num2 are 
//devide(num1,num2);

function additon(Test1,Test2,Test3){//n1 n n2 are parameters
    var sum = Test1 + Test2 +Test3;
    average(sum);
}

function average(sum){
    let avg = sum / 150;
    let per = avg * 100;
    console.log(per.toFixed(2));
}*/

/*accept age then uae 2Methods to decide if user can enter or not 
1.check if user is >= 18
2.tell user if he/she can enter the club */

let age = prompt("Enter your age");

check(age);


function check(age){
    
    if(age >= 18){
        display(true);
    }else{
        display(false);
    }
}

function display(result){
    
    if(result == true){
        console.log("Welcome to the club.")
    }else {
        console.log("You are not old enough to enter the club.")
    }

}





