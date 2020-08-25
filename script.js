//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;
var losAngelesScore = 0;
var newYorkCityScore = 0;
var dallasScore = 0;
var kenaiScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

// question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#add other variables for other questions

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", losAngeles);
q1a2.addEventListener("click", nyc);
q1a3.addEventListener("click", kenai);
q1a4.addEventListener("click", dallas);

q2a1.addEventListener("click", nyc);
q2a2.addEventListener("click", kenai);
q2a3.addEventListener("click", dallas);
q2a4.addEventListener("click", losAngeles);

q3a1.addEventListener("click", kenai);
q3a2.addEventListener("click", dallas);
q3a3.addEventListener("click", losAngeles);
q3a4.addEventListener("click", nyc);

q4a1.addEventListener("click", dallas);
q4a2.addEventListener("click", nyc);
q4a3.addEventListener("click", losAngeles);
q4a4.addEventListener("click", kenai);

q5a1.addEventListener("click", nyc);
q5a2.addEventListener("click", dallas);
q5a3.addEventListener("click", losAngeles);
q5a4.addEventListener("click", kenai);

function updateResult() {
  if (losAngelesScore >= 3) {
    result.innerHTML = "Your result is... Los Angeles, California!";
    //add descriptions?
  } else if (newYorkCityScore >= 3) {
    result.innerHTML = "Your result is... New York City!";
  }else if (dallasScore >= 3) {
    result.innerHTML = "Your result is... Dallas, Texas!";
  } else if (kenaiScore >= 3) {
    result.innerHTML = "Your result is... Kenai, Alaska!";
  }
   else {
    result.innerHTML = "Your result is... Chicago, Illinois!";
  }
}

//#TODO: Define quiz functions here
// remember that its += not =+ !!
function losAngeles() {
  losAngelesScore += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function nyc() {
  newYorkCityScore += 1;
  questionCount = +1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function dallas() {
  dallasScore += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function kenai() {
  kenaiScore += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

//# conditional statements

// add one more question so it can be an odd number
