let start=false;
let level=0;
let gameSeq=[];
let userSeq=[];
let h=document.querySelector("h4");
let colors=["yellow","green","blue","red"];

document.addEventListener("keypress",()=>{
    if(start==false){
        start=true;
        levelUp();
    }
    
});

function levelUp(){
    userSeq=[];
    level++;
    h.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*3);
    let color=colors[idx];
    let btn=document.querySelector(`.${color}`);
    gameSeq.push(color);
    gameFlash(btn);
}
function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(()=>{
        btn.classList.remove("gameFlash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },250);
}

function winner(userSeq,gameSeq){
    if(userSeq[userSeq.length-1]===gameSeq[userSeq.length-1]){
        if(userSeq.length==gameSeq.length){
            levelUp();
        }
    } else {
        h.innerHTML=`Nice try you reached level ${level}<br> Press any key to enter`;
        reset();
    }

}

let all=document.querySelectorAll(".btn");
for(let btn of all ){
    btn.addEventListener("click",(e)=>{
        userFlash(btn);
        let clicked =e.target.getAttribute("id");
        userSeq.push(clicked);
        winner(userSeq,gameSeq);
    });
}

function reset(){
    level=0;
    start=false;
    gameSeq=[];
    userSeq=[];
}
    
