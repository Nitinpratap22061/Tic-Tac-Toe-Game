let btn=document.querySelectorAll(".btn");
console.log(btn);
let winnermsg=document.querySelector(".winner")
let reset=document.querySelector(".reset")
let turnO=true;
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
   btn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
             if(turnO){
                button.innerText="O";
                turnO=false;
             }
             else{
                button.innerText="X";
                turnO=true;
             }
             button.disabled=true;
             
    })
   })
   btn.forEach((button) => {
    button.addEventListener("click", (e) => {
        checkWinner();
    });
});

   reset.addEventListener("click",()=>{
          btn.forEach((button)=>{
            button.innerText="";
            button.disabled=false;
            document.querySelector(".winner").innerText="";
          })
   })
   const disabledButton = ()=>{
    for(let button of btn){
        button.disabled=true;
    }
   }
   const showWinner = (winnerName)=>{
   winnermsg.innerText= `Congrats, Winner is ${winnerName}` ;
         }
   const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1Value = btn[pattern[0]].innerText;
        let pos2Value = btn[pattern[1]].innerText;
        let pos3Value = btn[pattern[2]].innerText;


        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                showWinner(pos1Value) ;
                 disabledButton(pos1Value);
            }
        }
    }
}
