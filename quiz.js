var score = 0;

var timeleft = 60;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
    document.getElementById("finish").click();
  }
}, 1000);

function submitAnswer() {
    var radios = document.getElementsByName("choice");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;

    for (; i < len; i++) {
        if (radios[i].checked) {
            checked = true;
            userAnswer = radios[i].value;
        }
    }
    if (userAnswer === "Correct1") {
        score++;
    }

    var radios = document.getElementsByName("choice2");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;

    for (; i < len; i++) {
        if (radios[i].checked) {
            checked = true;
            userAnswer = radios[i].value;
        }
    }
    if (userAnswer === "Correct2") {
        score++;
    }

    var radios = document.getElementsByName("choice3");
    var i = 0, len = radios.length;
    var checked = false;
    var userAnswer;

    for (; i < len; i++) {
        if (radios[i].checked) {
            checked = true;
            userAnswer = radios[i].value;
        }
    }
    if (userAnswer === "Correct3") {
        score++;
        alert("Your score is: " + score);
        clearInterval(downloadTimer);        
        document.getElementById("finish").style.visibility = "hidden"; 
    }
    else {
        alert("Your score is: " + score);
        clearInterval(downloadTimer);        
        document.getElementById("finish").style.visibility = "hidden"; 
    }
}
