var power = 0;
var answer;
var test;
function randNo() {
    power = power + 1;
    var num = Math.random()
    while (num < 0.1){
        num = Math.random()
    }
    answer = Math.floor(num*Math.pow(10,power));
    return answer
} 

randNum.addEventListener("click", function(){
    $('#randNum').hide();
    document.getElementById('level').innerHTML = "Level " + power;
    $('#num').show();
    var fade_out = setInterval(function() {
        $('#num').hide();
        $('#submittion').show();
        clearInterval(fade_out)
    }, 3000);
    console.log(answer);
});
subAns.addEventListener("click", function(){
    console.log($('#ans')[0].value);
    
    if(answer == $('#ans')[0].value){
        $('#submittion').hide();
        $('#cont').show();
        test = true;
    }
    else {
        power = 0;
        $('#submittion').hide();
        $('#gameOver').show();
        document.getElementById('correctAns').innerHTML = "Correct answer: " + answer;
        document.getElementById('yourAns').innerHTML = "Your Answer: " + $('#ans')[0].value;
        test = false;
        endGame()
    }
    $('#ans')[0].value = "";
});

cont.addEventListener("click", function(){
    $('#cont').hide();
    document.getElementById('level').innerHTML = "Level " + power;
    $('#num').show();
    var fade_out = setInterval(function() {
        $('#num').hide();
        $('#submittion').show();
        clearInterval(fade_out)
    }, 5000);
    console.log(answer);
});

newGame.addEventListener("click", function(){
    document.getElementById('num').innerHTML = randNo()
    $('#gameOver').hide();
    document.getElementById('level').innerHTML = "Level " + power;
    $('#num').show();
    var fade_out = setInterval(function() {
        $('#num').hide();
        $('#submittion').show();
        clearInterval(fade_out)
    }, 5000);
    console.log(answer);
});
function endGame() {
    $(".quote-display").hide();
    $("#quoteInput").hide();
    $("#newGame").show();
    $("#stats").hide();
  
    //highscore
    let settings = {
      async: true,
      crossDomain: true,
      url: "https://highscore-2d4d.restdb.io/rest/numbermemory",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "602f62a05ad3610fb5bb6396",
        "cache-control": "no-cache",
      },
    };
    highscore = power;
    console.log(power);
    $.ajax(settings).done(function (response) {
      var i;
      for (i = 0; i < response.length; i++) {
        if (response[i].score > highscore) {
          highscore = response[i].score;
        } 
      }
      console.log(highscore);
      document.getElementById("highestScore").innerHTML = "Highscore: level " + highscore;
    });
  
    //average score
    $.ajax(settings).done(function (response) {
      var i;
      var total = 0;
      for (i = 0; i < response.length; i++) {
        total += response[i].score;
      }
      average = total / i;
      document.getElementById("aveScore").innerHTML = "Average Speed: level " + Math.floor(average);
    });
  
    let settings2 = {
      async: true,
      crossDomain: true,
      url: "https://highscore-2d4d.restdb.io/rest/numbermemory",
      method: "POST", 
      headers: {
        "content-type": "application/json",
        "x-apikey": "602f62a05ad3610fb5bb6396",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({
        score: highscore,
      }),
    };
    $.ajax(settings2).done(function (response) {
      console.log(response);
    });
}


var score;
var highscore;
var average;

statsbtn.addEventListener("click", function () {
  $("#newGame").hide();
  $("#anss").hide();
  $("#stats").show();
  $("#statsbtn").hide();
  $("#back").show();
});

back.addEventListener("click", function () {
    $("#newGame").show();
    $("#anss").show();
    $("#stats").hide();
    $("#statsbtn").show();
    $("#back").hide();
  });
