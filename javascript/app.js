var q1 = false;
var q2 = false;
var q3 = false;
var q4 = false;
var q5 = false;
var delay;
var count = 60;

var checkResponse = function () {
    if ($("#q1b:checked").length > 0) {
        console.log("correct");
        q1 = true;
    }
    else {
        console.log("incorrect");
        q1 = false;
    }

    if ($("#q2c:checked").length > 0) {
        console.log("correct");
        q2 = true;
    }
    else {
        console.log("incorrect");
        q2 = false;
    }

    if ($("#q3b:checked").length > 0) {
        console.log("correct");
        q3 = true;
    }
    else {
        console.log("incorrect");
        q3 = false;
    }

    if ($("#q4a:checked").length > 0) {
        console.log("correct");
        q4 = true;
    }
    else {
        console.log("incorrect");
        q4 = false;
    }

    if ($("#q5d:checked").length > 0) {
        console.log("correct");
        q5 = true;
    }
    else {
        console.log("incorrect");
        q5 = false;
    }

    printer()
}

var printer = function () {
    if (q1 === true) {
        $("#q1").text("Correct!");
    }
    else {
        $("#q1").text("Incorrect! the right answer was 94.");
    }

    if (q2 === true) {
        $("#q2").text("Correct!");
    }
    else {
        $("#q2").text("Incorrect! the right answer was Elvarg.");
    }

    if (q3 === true) {
        $("#q3").text("Correct!");
    }
    else {
        $("#q3").text("Incorrect! the right answer was 175.");
    }

    if (q4 === true) {
        $("#q4").text("Correct!");
    }
    else {
        $("#q4").text("Incorrect! the right answer was 70.");
    }

    if (q5 === true) {
        $("#q5").text("Correct!");
    }
    else {
        $("#q5").text("Incorrect! the right answer was Dharok.");
    }


}

function run() {
    clearInterval(delay);
    delay = setInterval(decrement, 1000);
}

function decrement() {
    if (count > 0) {
        count--;
        $("#timer").text(count);
        if (count === 0) {
            checkResponse();
            alert("Time Up!");
            scorechecker();
            return;
        }
    }
}

function scorechecker(){
    var score = 0;
    if(q1 === true){
        score++;
    }
    if(q2 === true){
        score++;
    }
    if(q3 === true){
        score++;
    }
    if(q4 === true){
        score++;
    }
    if(q5 === true){
        score++;
    }
    $("#score").text("You got " + score + "/5 Questions correct!")
}

run()
