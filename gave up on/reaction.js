
function randRange(data) {
    var newTime = data[Math.floor(data.length * Math.random())];
    return newTime;
}

function startReaction() {
    const box = document.querySelector('#box');
    
    box.addEventListener('click',()=>{
        clearInterval(timer);
        timer = setInterval(startReaction, parseInt(Math.random() * randomWidth));

        setTimeout($("#box").toggleClass("green"),1000);
    });
}
var randomWidth = 3000;
// The random range will be from 0 to 3000, or whatever you want !
var timer = setInterval(startReaction, 1000);
// 1000 = Initial timer when the page is first loaded

//extra stuff
/*
var els = document.querySelectorAll(".boxes > div"),
  ms = 2000,
  interval;

function start(els, ms) {
    var i = 0;
    interval = setInterval(function() {
      [].forEach.call(els, function(el) {
        el.style.backgroundColor = colors[i];
      })
      i += 1;
      i === colors.length ? i = 0 : false;
    }, ms);
  }
  
  function stop() {
    clearInterval(interval);
  }
*/

/*
function toggleSomething() {
    // do stuff, happens to use jQuery here (nothing else does)
    $("#box").toggleClass("green");
    
    clearInterval(timer);
    timer = setInterval(toggleSomething, parseInt(Math.random() * randomWidth));
}
*/