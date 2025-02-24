////// CHAPTER 9-11 USER INPUT & CONDITIONAL STATEMENT //////


// Question No 1 

var city = prompt("Enter city name..");
if (city === "Karachi") {
    alert("Welcome to the city of Lights");
}


// Question No 2

var gender = prompt("Enter your gender please!");
if (gender === "Male") {
    alert("WELCOME SIR!")
};
if (gender === "Female") {
    alert("WELCOME MA'AM!")
};


// Question No 3

var signalColor = prompt("Enter signal color..");
if (signalColor === "red") {
    alert("must stop!!");
};
if (signalColor === "yellow") {
    alert("ready to move");
};
if (signalColor === "green") {
    alert("move now..");
}


// Question No 4

var fuel = prompt("Enter remaining fuel in the car in litres:");
if (fuel <= 0.25 + "litres") {
    alert("Please refill the fuel in your car")
}


// Question No 5

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is false");
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is false");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is false");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("YES, The total cost is equals to the the expenses");
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}


// Question No 6


var sub1 = +prompt("Enter total marks of ENGLISH", 100);
var sub2 = +prompt("Enter total marks of URDU", 100);
var sub3 = +prompt("Enter total marks of MATHS", 100);

var totalMarks = sub1 + sub2 + sub3;

var sub1obt = +prompt("Enter marks obtained in ENGLISH");
var sub2obt = +prompt("Enter marks obtained in URDU");
var sub3obt = +prompt("Enter marks obtained in MATHS");

var totalObtMarks = sub1obt + sub2obt + sub3obt;
var percentage = (totalObtMarks / totalMarks) * 100;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Need Improvement";
} else {
    grade = "F";
    remarks = "Fail";
}

document.write("<h2>Marks Sheet</h2><br>");
document.write("Total Marks: ", totalMarks, "<br>");
document.write("Marks Obtained: ", totalObtMarks, "<br>");
document.write("Percentage: ", percentage, "%<br>");
document.write("Grade: ", grade, "<br>");
document.write("Remarks: ", remarks, "<br>");



// Question No 7

var guess = +prompt("Guess the secret number.. (1-10)")
var secretNum = 7;

if (guess === secretNum) {
    alert("Bingo! Correct answer.")
} else if (guess === ++secretNum) {
    alert("Close enough to the correct answer.")
} else {
    alert("Try again ;)")
}


// Question No 8

var num = +prompt("Enter a number:");
if (num % 3 === 0) {
    alert(num + " is divisible by 3.");
} else {
    alert(num + " is not divisible by 3.");
}


// Question No 9

var num1 = +prompt("Enter a number:");
if (num1 % 2 === 0) {
    alert(num1 + " This is an even number..");
} else {
    alert(num1 + " This is an odd number..");
};


// Question No 10

var temp = +prompt("Enter temperature:");

if (temp >= 40) {
    alert("It's too hot outside")
} else if (temp >= 30) {
    alert("The Weather today is Normal.")
} else if (temp >= 20) {
    alert("Today's Weather is cool.")
} else if (temp >= 10) {
    alert("OMG! Today's weather is so Cool.")
} else if (temp <= 10) {
    alert("OMG! Be careful it's snowing outside.")
}
else {
    alert("Please enter an valid temperature.")
}


// Question No 11


var firstNum = +prompt("Enter first number")
var operator = prompt("Enter an operator")
var secondNum = +prompt("Enter second number")

if (operator === "+") {
    alert(firstNum + secondNum)
} else if (operator === "-") {
    alert(firstNum - secondNum)
} else if (operator === "*") {
    alert(firstNum * secondNum)
} else if (operator === "/") {
    alert(firstNum / secondNum)
} else if (operator === "%") {
    alert(firstNum % secondNum)
} else {
    alert("Please enter an valid operator!")
}



////// CHAPTER 9-11 USER INPUT & CONDITIONAL STATEMENT END //////


















////// CHAPTER 12-13 IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS //////


// Question No 1

// var character = prompt("Enter a Character");



// Question No 2

var int1 = +prompt("Enter first number");
var int2 = +prompt("Enter second number");

if (int1 > 1) {
    alert("First number is greater than the other.")
} else if (int2 > 1) {
    alert("Second number is greater than the other.")
} else if (int1 === int2) {
    alert("Both numbers are equal ;) ")
}
else {
    alert("Please enter a valid number.")
}


// Question No 3

var numChecker = +prompt("Enter first number");

if (numChecker >= 1) {
    alert("The given number is POSITIVE number..")
} else if (numChecker === 0) {
    alert("The given number is 0 ..")
} else if (numChecker <= 0) {
    alert("The given number is NEGATIVE number..")
} else {
    alert("Please enter a valid number.")
}


// Question No 4

var vowelCheck = prompt("Enter an English alphabet.")

if (vowelCheck === "a") {
    alert("Yes, it's a vowel..!")
} else if (vowelCheck === "e") {
    alert("Yes, it's a vowel..!")
} else if (vowelCheck === "i") {
    alert("Yes, it's a vowel..!")
} else if (vowelCheck === "o") {
    alert("Yes, it's a vowel..!")
} else if (vowelCheck === "u") {
    alert("Yes, it's a vowel..!")
} else {
    alert("Not a vowel..")
}


// Question No 5

var password = prompt("Enter your password..")

if (password === null || password === "") {
    alert("Please Enter Your Password.")
}

var confirmPassword = prompt("Confirm your password..")

if (confirmPassword === null || confirmPassword === "") {
    alert("Please Enter Your Password.")
}

if (password === confirmPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}


// Question No 6

var morning = "Good Morning";
var afternoon = "Good Afternoon";
var evening = "Good Evening";
var night = "Good Night";

var time = +prompt("Enter time in hours.. i.e (1500) ");

if (time >= 0o00 && time < 1200) {
    alert(morning);
} else if (time >= 1200 && time < 1700) {
    alert(afternoon);
} else if (time >= 1700 && time < 2100) {
    alert(evening);
} else if (time >= 2100 && time < 2359) {
    alert(night);
}


// Question No 7

var time = prompt("Please enter time in 24 hours format to convert into 12 hours.")

if (time === "0000") {
    alert("It's 12am")
}
else if (time === "0100") {
    alert("It's 1am")
}
else if (time === "0200") {
    alert("It's 2am")
}
else if (time === "0300") {
    alert("It's 3am")
}
else if (time === "0400") {
    alert("It's 4am")
}
else if (time === "0500") {
    alert("It's 5am")
}
else if (time === "0600") {
    alert("It's 6am")
}
else if (time === "0700") {
    alert("It's 7am")
}
else if (time === "0800") {
    alert("It's 8am")
}
else if (time === "0900") {
    alert("It's 9am")
}
else if (time === "1000") {
    alert("It's 10am")
}
else if (time === "1100") {
    alert("It's 11am")
}
else if (time === "1200") {
    alert("It's 12pm")
}
else if (time === "1300") {
    alert("It's 1pm")
}
else if (time === "1400") {
    alert("It's 2pm")
}
else if (time === "1500") {
    alert("It's 3pm")
}
else if (time === "1600") {
    alert("It's 4pm")
}
else if (time === "1700") {
    alert("It's 5pm")
}
else if (time === "1800") {
    alert("It's 6pm")
}
else if (time === "1900") {
    alert("It's 7pm")
}
else if (time === "2000") {
    alert("It's 8pm")
}
else if (time === "2100") {
    alert("It's 9pm")
}
else if (time === "2200") {
    alert("It's 10pm")
}
else if (time === "2300") {
    alert("It's 11pm")
} else {
    alert("Please enter a correct time!")
}

////// CHAPTER 12-13 IF...ELSE & ELSE IF, TESTING SET OF CONDITIONS END //////
















//////////// HOME PDF ////////////


// Chapter 10 (if statements)


// Question no 1

var city = "Karachi";

if (city === "Karachi") {
    console.log("The city of Lights..");
}


// Question no 2

var x = 1;
var y = 1;

if (x === y) {
    var z = prompt("Please enter a value for z:");
}
var zValue = z


// Question no 3

var zipCode = +prompt("Please enter ZIPCODE");

if (zipCode === 10010) {
    alert("Karachi")
} else {
    alert("Please write correct city.")
}




// Chapter 11 (Comparison Operators)


// Question no 1

var chek = 20;

if (chek !== 15) {
    alert(true)
}


// Question no 2

var chek = 20;

if (chek >= 20) {
    alert("YES")
}


// Question no 3

var first1 = 10;
var second2 = 20;

if (first1 !== second2) {
    first1 = 20
    alert("false")
}


// Question no 4

var v1 = 10;
var v2 = 11;

if (v1 !== v2) {
    alert("Congratulations!")
}


// Question no 5

var firstName1 = prompt("Enter first name.");
var name1 = "Ahmed";

if (firstName1 !== name1) {
    alert("No match");
}



// Chapter 12 (if…else and else if statements)


// Question no 1

var testNum = 20;

if (testNum >= 20) {
    alert("Correct! You got it right.")
} else {
    alert("Wrong! Try again.")
}


// Question no 2

var sub1 = +prompt("Enter total marks of ENGLISH", 100);
var sub2 = +prompt("Enter total marks of URDU", 100);
var sub3 = +prompt("Enter total marks of MATHS", 100);

var totalMarks = sub1 + sub2 + sub3;

var sub1obt = +prompt("Enter marks obtained in ENGLISH");
var sub2obt = +prompt("Enter marks obtained in URDU");
var sub3obt = +prompt("Enter marks obtained in MATHS");

var totalObtMarks = sub1obt + sub2obt + sub3obt;
var percentage = (totalObtMarks / totalMarks) * 100;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Need Improvement";
} else {
    grade = "F";
    remarks = "Fail";
}

document.write("<h2>Marks Sheet</h2><br>");
document.write("Total Marks: ", totalMarks, "<br>");
document.write("Marks Obtained: ", totalObtMarks, "<br>");
document.write("Percentage: ", percentage, "%<br>");
document.write("Grade: ", grade, "<br>");
document.write("Remarks: ", remarks, "<br>");


// Question no 3

var a = 10;
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of 'a' is 10")
}


// Question no 4

var city = prompt("Enter city name.");

if (city === "karachi") {
    alert("YES, it is karachi")
} else if (city === "lahore") {
    alert("YES, it is lahore")
} else {
    alert("Wrong Answer")
}



// Chapter 13 (Testing sets of conditions)


// Question no 1

var a = "1";
var b = "1";
var c = "2";
var d = "2";

if (a === b) {
    alert("A,B are correct")
}
if (c === d) {
    alert("C,D are correct")
}


// Question no 2

var a = "1";
var b = "1";
var c = "2";
var d = "2";

if (a === b) {
    alert("A,B are correct")
}
if (c === d) {
    alert("C,D are correct")
}


// Question no 3

var name_1 = prompt("Enter Name 1");
var name_2 = prompt("Enter Name 2");
var age1 = prompt("Enter Age");;

if (name_1 === "Hamza" || name_2 === "Arsalan") {
    alert("YES You're in..")
} else if (age1 <= 60) {
    alert("YES..")
} else {
    alert("Not allowed")
}


// Question no 4

var num_1 = 25;
var num_2 = 15;

if (num_1 > name_2) {
    alert("First number is greater")
} else if (name_1 < num_2) {
    alert("First number is lesser")
} else {
    alert("Nothing")
}


// Question no 5

var firstName = "Saeed";
var lastName = "Ahmed";

var userName = prompt("What is your first name?")
var userName1 = prompt("What is your last name?")

if (userName === firstName && userName1 === lastName) {
    alert("Right Answer")
} else {
    alert("Try again")
}



// Chapter 14 (If statements nested)

// Question no 1

var pass = prompt("Enter Password");

if (pass !== null) {
    if (pass < 5) {
        alert("Password must be greater than 5")
    } else if (pass > 5) {
        alert("OK")
    }

} else {
    alert("Try again")
}


// Question no 2

var a = +prompt("Enter any number (1-10)");
var c = "Max";

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}


// Question no 3

var a = +prompt("Enter any number (1-10)");
var c = "Max";

if (a === 1 && c === "Max") {
    alert("OK");
}


// Question no 4

var num1 = 2;
var num2 = 2;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("Correct")
    }
};



// ================= THE END =================

