
function preload() {
    bg=loadImage("images/garden.png");
    tomImg1=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");

    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(900,600);
    tom.addAnimation("tomSource",tomImg1);
    tom.scale=0.15;

    jerry=createSprite(200,600);
    jerry.addAnimation("tomSource",jerryImg1);
    jerry.scale=0.10;
    
}

function draw() {

    background(bg);
    
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0;
        tom.addAnimation("tomImg3",tomImg3);
        tom.scale=0.15;
        tom.changeAnimation("tomImg3");

        jerry.addAnimation("jerryImg3",jerryImg3);
        jerry.scale=0.10;
        jerry.changeAnimation("jerryImg3");
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        jerry.addAnimation("jerryteasing",jerryImg2);
        jerry.changeAnimation("jerryteasing");
        jerry.frameDelay = 25;
    }

    if(keycode === LEFT_ARROW){
        
    }

}
