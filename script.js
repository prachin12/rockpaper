const random = Math.random();
       let num = Math.floor(random*3);
       play();
    function play(){
        const rounds= prompt("Enter the number of round you want to play");
    for(i=1;i<=rounds;i++){
        const inp = prompt("Enter rock/paper/scissor");
        let compchoice=comp(num);
        console.log(compchoice);
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

      if(compchoice==inp){
        console.log("It's a draw");
      }
      else if(inp=="rock" && compchoice=="scissor" || inp=="paper" && compchoice=="rock" || inp=="scissor" && compchoice=="paper"){
console.log("You won")

}
else{
    console.log("You lost");
}
}
    }
   
 let decision= prompt("Do you wanna play again?");

   if(decision=="yes"){
    play();
}
else{
    console.log("Have a good day!");
}