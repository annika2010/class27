class Player {
  constructor(){

    this.index = null;
    this.name = null;
    this.distance = 0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player/players" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance

    });
  }
  
  //static function is not linked to any particular obj inside the class
  static getPlayerInfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
    allPlayer = data.val();

     } )
  }

}
