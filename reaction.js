
function randRange(data) {
    var newTime = data[Math.floor(data.length * Math.random())];
    return newTime;
}
function toggleSomething() {
    // do stuff, happens to use jQuery here (nothing else does)
    $("#box").toggleClass("green");
    
    clearInterval(timer);
    timer = setInterval(toggleSomething, parseInt(Math.random() * randomWidth));
}

var randomWidth = 3000;
// The random range will be from 0 to 3000, or whatever you want !
var timer = setInterval(toggleSomething, 1000);
// 1000 = Initial timer when the page is first loaded