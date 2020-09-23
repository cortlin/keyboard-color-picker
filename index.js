console.log("It WOrks!");

let colorChange;
const defaultColor = "#2fdaa7";
let recentColors = [];


colorChange = document.querySelector("#picker");
colorChange.value = defaultColor;

const updateAll = (event) => {
  document.querySelectorAll(".selected").forEach((p) => {
    p.style.backgroundColor = event.target.value;
    p.classList.remove('selected');
  });
  recentColors.unshift(event.target.value);
  if (recentColors.length > 5) {
    recentColors.pop();
  }
  console.log(recentColors)
  
}


colorChange.addEventListener("change", updateAll, false);



const keys = document.querySelectorAll('.key');

for (const key of keys) {
  key.addEventListener('click', () => key.classList.toggle('selected'))
}



