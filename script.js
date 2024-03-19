let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".newgame");
let msg = document.querySelector(".msg");
let cont = document.querySelector(".container");
let body = document.querySelector("body");
let theme = document.querySelector(".theme");

let turnO = true;
const match=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            turnO=false;
            box.innerHTML = "O";
        }
        else{
            turnO = true;
            box.innerHTML = "X";
        }
        box.disabled = true;
        check();
    })
})
const enablebtn = () =>{
    for(let i of boxes){
        i.disabled = false;
        i.innerText = "";
    }
}
reset.onclick=()=>{
    turnO = true;
    enablebtn();
}
newbtn.onclick = () =>{
    msg.classList.add("hide");
    newbtn.classList.add("hide");
    turnO = true;
    enablebtn();
    cont.classList.remove("hide");
    reset.classList.remove("hide");
}
const disablebtn = () =>{
    for(let i of boxes){
        i.disabled = true;
    }
    msg.classList.remove("hide");
    newbtn.classList.remove("hide");
}
const winner = (pos1) =>{
    console.log(pos1);
    msg.innerText = `Winner is ${pos1}`;
    disablebtn();
    cont.classList.add("hide");
    reset.classList.add("hide");
}
const check= () =>{
    for(let i of match){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1===pos2 && pos2 === pos3){
            winner(pos1);
        }
    }
    }
}

let th = true;
theme.innerText = "LIGHT";
theme.onclick=()=>{
    if(th){
        th = false;
        body.classList.remove("light");
        body.classList.add("dark");
        theme.innerText = "LIGHT";
    }
    else{
        th = true;
        body.classList.remove("dark");
        body.classList.add("light");
        theme.innerText = "DARK";
    }
}