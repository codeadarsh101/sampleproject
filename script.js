console.log("Welcome to my tic tac toe")

let turn='X'

 // function to change the turn 

let changeTurn=()=>{
  return turn==="X"?"0":"X"
}

//function to check win
  let checkwin=()=>{
   
  }
 
  let boxes=document.getElementsByClassName('box');
  Array.from(boxes).forEach(grid=>{
    let boxtext=grid.querySelector('.boxitem')
   grid.addEventListener('click',()=>{
     if(boxtext.innerText===''){
        boxtext.innerText=turn;
    turn= changeTurn();

        checkwin();
    
     }
   })

  })