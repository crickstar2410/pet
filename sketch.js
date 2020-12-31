var dog,happyDog,database,foodS,foodStock;

function preload()
{
dog_image = loadImage("images/dogImg.png")
dog_image1 = loadImage("images/dogImg1.png")




}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(200,250,30,10)
  dog.addImage(dog_image);
  dog.scale = 0.1
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dog_image1);


}




  drawSprites();
  textSize(20);
  fill("blue")
  text("press up arrow",30,50)
text("food remaining"+foodS,30,80)
}
function readStock(data){
foodS=data.val();



}

function writeStock(x){
  if(x<=0){
    x=0;
    
    
    
    
    }
    else{
    
      x=x-1;
    }
database.ref('/').update({


Food:x



})





}

