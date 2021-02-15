class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();
      //.once is a asynchronus listner which will take player count only once and then execute the getCount
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){

        playerCount = playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }  
  }
  
  play(){

    form.hide();
    textSize(30);
    text("The Game Starts Now!!", 50, 100);
    Player.getPlayerInfo();
    if(p !== undefined){
      
        var displayPosition = 130;
        displayPosition+= 20;

        if(p === "player"+player.index){
          fill("purple");
        }
        else{
          fill("black");
        }
        //displayPosition = displayPosition+20;
        textSize(15);
        text(allPlayers[p].name + ": " +allPlayers[p].distance, 120, displayPosition);
      

    }

    if(keyIsDown(UP_ARROW) && player.index!==null){

      player.distance += 50;
      player.update();

    }
  } 
}
