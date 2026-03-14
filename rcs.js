let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissors");
let compscore = document.querySelector(".compscore2");
let youscore = document.querySelector(".youscore2");
let message= document.querySelector(".choice");
let restart=document.querySelector(".reset");

let choice;
let comscore=0, yourscore=0;

$(restart).hide();

playgame();
function rockchoose() {
    choice="rock";
    console.log("Rock choosen");
    playtime("rock");
}

function paperchoose() {
    choice="paper";
    console.log("Paper choosen");
    playtime("paper");
}

function scissorchoose() {
    choice="scissor";
    console.log("scissor choosen");
    playtime("scissor");
}

function playgame() {
    rock.addEventListener('click', rockchoose, false);
    paper.addEventListener('click', paperchoose, false);
    scissor.addEventListener('click', scissorchoose, false);
}

function playtime(choice){
    let arr=["rock","paper","scissor"];
    let rand= Math.floor(Math.random()*arr.length);
    let randchoose=arr[rand];
    if(randchoose=="paper"&&choice=="rock"){
        message.textContent=`You chose ${choice} computer chose ${randchoose} you lost`;
        comscore=comscore+1;
        compscore.textContent=comscore;
        youscore.textContent=yourscore;
    } else if(randchoose=="rock"&&choice=="paper"){
        message.textContent=`You chose ${choice} computer chose ${randchoose} you won`;
        yourscore=yourscore+1;
        youscore.textContent=yourscore;
        compscore.textContent=comscore;
    } else if(randchoose=="scissor"&&choice=="paper"){
        message.textContent=`You chose ${choice} computer chose ${randchoose} you lost`;
        comscore=comscore+1;
        youscore.textContent=yourscore;
        compscore.textContent=comscore;
    } else if(randchoose=="paper"&&choice=="scissor"){
         message.textContent=`You chose ${choice} computer chose ${randchoose} you won`;
        yourscore=yourscore+1;
        youscore.textContent=yourscore;
        compscore.textContent=comscore;
    } else if(randchoose=="rock"&&choice=="scissor"){
        message.textContent=`You chose ${choice} computer chose ${randchoose} you lost`;
        comscore=comscore+1;
        youscore.textContent=yourscore;
        compscore.textContent=comscore;
    } else if(randchoose=="scissor" && choice=="rock"){
        message.textContent=`You chose ${choice} computer chose ${randchoose} you won`;
        yourscore=yourscore+1;
        youscore.textContent=yourscore;
        compscore.textContent=comscore;
    } else{
        message.textContent=`You chose ${choice} computer chose ${randchoose} nobody won`;
        youscore.textContent=yourscore;
        compscore.textContent=comscore;
    }
    $(restart).fadeIn(1000);
}

restart.addEventListener('click',resgame,false);

function resgame() {
    comscore=0;
    yourscore=0;
    youscore.textContent=yourscore;
    compscore.textContent=comscore;
    message.textContent="Choose rock or paper or scissors";
    $(restart).fadeOut(1000);
}

