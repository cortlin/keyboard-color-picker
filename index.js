console.log("It WOrks!");

let colorChange;
const defaultColor = "#2fdaa7";

window.addEventListener("load", startup, false);

function startup() {
    colorChange = document.querySelector("#picker");
    colorChange.value = defaultColor;
    colorChange.addEventListener("input", updateFirst, false);
    colorChange.addEventListener("change", updateAll, false);
    colorChange.select();
};

function updateFirst(event) {
    var p = document.querySelector(".key1");
  
    if (p) {
      p.style.backgroundColor = event.target.value;
    }
  }

function updateAll(event) {
    document.querySelectorAll(".key1").forEach(function(p) {
        p.style.backgroundColor = event.target.value;
    });
}