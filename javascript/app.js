var q1 = false;
var q2 = false;
var q3 = false;
var q4 = false;
var q5 = false;

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
}

$("#sumbit").on("click", function () {
    checkResponse();
});