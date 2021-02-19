// const var to store the url
const quote_gen_url = "http://api.quotable.io/random";
// quoteDisplay element
const quoteDisplayELement = document.getElementById("quoteDisplay");
// quoteInput element
const quoteInputElement = document.getElementById("quoteInput");

// comparing each char
quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayELement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");
  var end = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    // to make sure only the entered characters are colored
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      end = false;
    }
    // to make sure its only one class value
    else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
    }
  });
  document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
      words++;
    }
  };
  if (end == true) {
    endGame();
  }
});

// getting the api
function getRandomQuote() {
  return fetch(quote_gen_url)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function NewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayELement.innerHTML = ""; //clears inner html
  // splitting the characters
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");

    characterSpan.innerText = character; //creates a span for each character
    quoteDisplayELement.appendChild(characterSpan);
  });
  // to clear inside box
  quoteInputElement.value = null;
}

NewQuote();

// Stopwatch
const timer = document.getElementById("stopwatch");

var min = 0;
var sec = 0;
var time = 0;
var stoptime = true;
var startTime = false;
var speed;

quoteInput.addEventListener("input", function () {
  startTimer();
  document.getElementById("count").innerHTML =
    Math.floor((words / time) * 60) + "wpm";
  $("#startText").hide();
  $("#count").show();
});
function startTimer() {
  if (stoptime == true && startTime == false) {
    startTime = true;
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    sec = sec + 1;
    time++;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }

    timer.innerHTML = min + ":" + sec;
    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
  timer.innerHTML = "00:00";
}

//typing speed
var words = 0;

//finish game
function endGame() {
  stopTimer();
  words++;
  $(".quote-display").hide();
  $("#quoteInput").hide();
  $("#newGame").show();
  $("#stats").show();
  $("#highestScore").hide();
  $("#aveScore").hide();

  //highscore
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://highscore-2d4d.restdb.io/rest/typingspeed",
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-apikey": "602f62a05ad3610fb5bb6396",
      "cache-control": "no-cache",
    },
  };
  highscore = Math.floor((words / time) * 60);
  $.ajax(settings).done(function (response) {
    var i;
    for (i = 0; i < response.length; i++) {
      if (response[i].highscore > highscore) {
        highscore = response[i].highscore;
      } 
    }
    console.log(highscore);
    document.getElementById("highestScore").innerHTML = "Highscore: " + highscore + "wpm";
  });

  //average score
  $.ajax(settings).done(function (response) {
    var i;
    var total = 0;
    for (i = 0; i < response.length; i++) {
      total += response[i].highscore;
    }
    average = total / i;
    document.getElementById("aveScore").innerHTML = "Average Speed: " + Math.floor(average) + "wpm";
  });

  let settings2 = {
    async: true,
    crossDomain: true,
    url: "https://highscore-2d4d.restdb.io/rest/typingspeed",
    method: "POST", 
    headers: {
      "content-type": "application/json",
      "x-apikey": "602f62a05ad3610fb5bb6396",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      highscore: highscore,
    }),
  };
  $.ajax(settings2).done(function (response) {
    console.log(response);
  });
}

//restDB
var score;
var highscore;
var average;

statsbtn.addEventListener("click", function () {
  $("#newGame").hide();
  $("#highestScore").show();
  $("#aveScore").show();
  $("#stopwatch").hide();
  $("#statsbtn").hide();
  $("#back").show();
});

back.addEventListener("click", function () {
    $("#newGame").show();
    $("#highestScore").hide();
    $("#aveScore").hide();
    $("#stopwatch").show();
    $("#statsbtn").show();
    $("#back").hide();
  });
