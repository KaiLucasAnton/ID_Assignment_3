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
    $('#num').show();
    var fade_out = setInterval(function() {
        $('#num').hide();
        $('#submittion').show();
        clearInterval(fade_out)
    }, 5000);
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
    }
    $('#ans')[0].value = "";
});

cont.addEventListener("click", function(){
    $('#cont').hide();
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
    randNo();
    $('#num').show();
    var fade_out = setInterval(function() {
        $('#num').hide();
        $('#submittion').show();
        clearInterval(fade_out)
    }, 5000);
    console.log(answer);
});

