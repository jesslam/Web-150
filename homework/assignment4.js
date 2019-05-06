//define message variable
var msg;

//get user input
var numberGrade = Number.parseInt(window.prompt("Enter your number grade from 0 - 100: "));
console.log(numberGrade);

//initialize
if(numberGrade<=100 && numberGrade>= 88){
    msg = "Number grade = " + numberGrade + "\nLetter grade = A";
} else if(numberGrade <= 87 && numberGrade >= 80){
    msg = "Number grade = " + numberGrade + "\nLetter grade = B";
} else if(numberGrade <= 79 && numberGrade >= 68){
    msg = "Number grade = " + numberGrade + "\nLetter grade = C";
} else if(numberGrade <=67 && numberGrade >= 60){
    msg = "Number grade = " + numberGrade + "\nLetter grade = D";
} else if(numberGrade<=60){
    msg = "Number grade = " + numberGrade + "\nLetter grade = F";
} else if(numberGrade===999){
    msg = "Good bye";
}

//print message
alert(msg)

