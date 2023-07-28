var countDownDate = new Date("July 28,2023 00:00:00").getTime();
var x=setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var Days= Math.floor(distance / (1000*60*60*24));
    var Hrs= Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var Mins= Math.floor((distance % (1000*60*60)) / (1000*60));
    var Secs= Math.floor((distance % (1000*60)) / 1000);
    document.getElementById("Days").innerHTML=Days;
    document.getElementById("Hrs").innerHTML=Hrs;
    document.getElementById("Mins").innerHTML=Mins;
    document.getElementById("Secs").innerHTML=Secs; 

},1000);