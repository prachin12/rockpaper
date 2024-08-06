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
r = rounds.value-1;
console.log(r);
});

btn1.addEventListener('click', function(){
d = decision.value;
console.log(d);
let creturn= play(d);
winner(d,creturn,r);
r--;
});

function play(d){
    let cd="";
let num= Math.floor(Math.random()*3);
if(num==0){cDecision.innerText='rock';
    cd='rock';
}
else if(num==1){cDecision.innerText='paper';
    cd='paper';
}
else{cDecision.innerText='scissors';
    cd='scissors';
}
return cd;
}
function winner(d,creturn,r)
{

    if(d=='rock' && creturn=='rock')
    {
        console.log('tie');
       
    }
    else if(d=='rock' && creturn=='paper')
    {
        console.log('computer wins');
        cs++;
        cScore.innerText=cs;
    }
    else if(d=='rock' && creturn=='scissors')
    {
        console.log('you win');
        hs++;
        hScore.innerText=hs;
    }
    else if(d=='paper' && creturn=='rock')
    {
        console.log('you win');
        hs++;
        hScore.innerText=hs;
    }
    else if(d=='paper' && creturn=='paper')
    {
        console.log('tie');
    }
    else if(d=='paper' && creturn=='scissors')
    {
        console.log('computer wins');
        cs++;
        cScore.innerText=cs;
    }
    else if(d=='scissors' && creturn=='rock')
    {
        console.log('computer wins');
        cs++;
        cScore.innerText=cs;
    }
    else if(d=='scissors' && creturn=='paper')
    {
        console.log('you win');
        hs++;
        hScore.innerText=hs;
    }
    else
    {
        console.log('tie');
    }

    
console.log(r);
    if(r==0)
    {
        if(hs>cs)
        {
            alert('You win the game');
        }
        else if(hs<cs)
        {
            alert('Computer wins the game');
        }
        else
        {
            alert('Game is a tie');
        }
        
    }
    
}