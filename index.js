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

  function updateFirst(event) {
    var p = document.querySelector(".selected");

    if (p) {
      p.style.backgroundColor = event.target.value;
    }
  }

  function updateAll(event) {
    document.querySelectorAll(".selected").forEach(function (p) {
      p.style.backgroundColor = event.target.value;
      p.classList.remove('selected');
    });
  }
}


const keys = document.querySelectorAll('.key1');

for (const key of keys) {
  key.addEventListener('click', function() {
    this.classList.add('selected');
  })
}



