let targets = document.querySelectorAll(".targets");

for (var i = 0; i < targets.length; i++) {
  targets[i].addEventListener('mouseover', (el)=>{
    let target = el.target.text;
    if (target.toLowerCase() === "home" || target.toLowerCase() === "resume") {
      document.querySelector(`.${target.toLowerCase()}`).style.display = "block";
    }
  });
  targets[i].addEventListener('mouseout', (el)=>{
    let target = el.target.text;
    if (target.toLowerCase() !== "home" || target.toLowerCase() !== "resume") {
      document.querySelector(`.${target.toLowerCase()}`).style.display = "none";
    }
  });
};
console.log(targets);
