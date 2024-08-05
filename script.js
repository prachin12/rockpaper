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
});

btn1.addEventListener('click', function(){
d = decision.value;
const random = Math.random();
       let num = Math.floor(random*3);
       play();
    function play(){
    for(i=1;i<=r;i++){
        let compchoice=comp(num);
        function comp(num){
if(num==0){
 return "rock";
}
else if(num==1){
    return "paper";
}
else{
    return "scissor";
}

        }

      if(compchoice==d){
        console.log("It's a draw");
      }
      else if(d=="rock" && compchoice=="scissor" || d=="paper" && compchoice=="rock" || d=="scissor" && compchoice=="paper"){
hs++;

}
else{
    cs++;
}
}
    }
    hScore.innerHTML=hs;
    cScore.innerHTML=cs;
   

});

