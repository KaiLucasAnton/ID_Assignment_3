var power = 0;
var answer ;
function randNo() {
    power = power + 1;
    answer = Math.floor(Math.random()*Math.pow(10,power));
    return answer
} 
function check(ans) {
    if(answer = ans){
        alert("You are correct")
    }
    else{
        alert("You are wrong")
        break
    }
}