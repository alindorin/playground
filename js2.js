function addTime() {
     var num = document.getElementById("minutes").value;
     var button = document.getElementById("button");

     var hourText = document.getElementById("hour");
     var minText = document.getElementById("min");

     var m = num % 60;
     var h = num / 60;

     hourText.innerText = parseInt(h);
     minText.innerText = m;
}
