const words = [
"AI Researcher",
"Web Developer",
"Problem Solver",
"Future Engineer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = words[i];

if(!isDeleting){
document.getElementById("typing").textContent =
current.substring(0,j++);
}else{
document.getElementById("typing").textContent =
current.substring(0,j--);
}

if(j === current.length + 1){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(j === 0){
isDeleting = false;
i = (i+1)%words.length;
}

setTimeout(type,isDeleting ? 60 : 120);
}

type();

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x =
e.offsetX/card.offsetWidth - 0.5;

const y =
e.offsetY/card.offsetHeight - 0.5;

card.style.transform =
`rotateY(${x*20}deg)
 rotateX(${-y*20}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"rotateY(0deg) rotateX(0deg)";

});

});