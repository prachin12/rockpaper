let rounds= document.querySelector('#input');
let decision= document.querySelector('#input2');
const btn= document.querySelector('#btn');
const btn1= document.querySelector('#btn-1');
let hScore= document.querySelector('#score-value');
let cScore= document.querySelector('#computer-score-value');
let cDecision= document.querySelector('#comp-decision');
let r;
let d;
let hs=0;
let cs=0;

btn.addEventListener('click', function(){
r = rounds.value;
console.log(r);
});

btn1.addEventListener('click', function(){
d = decision.value;
console.log(d);
let creturn= play(d);
});

function play(d){
let num= Math.floor(Math.random()*3);
if(num==0){cDecision.innerText='rock';}
else if(num==1){cDecision.innerText='paper';}
else{cDecision.innerText='scissors';}
}

