console.log("Hello World");

let cont = document.querySelector("#container");
let love = document.querySelector("i");

cont.addEventListener("dblclick", ()=>{
  love.style.opacity = 0.8;
  love.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(()=>{
  love.style.opacity = 0;
  // love.style.transform = "translate(-50%, -50%) scale(0)";
  },1000) 
})
