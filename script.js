score=0;
cross=true;

audio=new Audio('game.mp3');
audiogo=new Audio('gameover.wav');
setTimeout(()=>{
    audio.play()
},1000);
document.onkeydown=function(e){
    console.log("key code is :",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        } ,700);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px"; 
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left=dinoX - 112 + "px"; 
    }
}
setInterval(()=>{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obsctacle=document.querySelector('.obsctacle');

    dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obsctacle, null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obsctacle, null).getPropertyValue('top'));
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    // console.log(offsetX,offsetY);
    if(offsetX< 93 && offsetY<52){
        gameOver.innerHTML="Game over- Reload to play again";
        gameOver.style.color="teal";
        obsctacle.classList.remove('obsctacleAn')
        audiogo.play();

        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX<73 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDar=parseFloat(window.getComputedStyle(obsctacle, null).getPropertyValue('animation-duration'));
            newDur=aniDar- 0.1;
            obsctacle.style.animationDuration = newDur + 's';
        },500);
        
    }
},10);
function updateScore(score){
    scoreCount.innerHTML="your score : "+score;
}