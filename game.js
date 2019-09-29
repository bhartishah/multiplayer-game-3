class Game{
    constructor () {}
  getState (){
      var gamestateRef =database.ref('gamestate');
      gamestateRef.on("value",function(data){
          gamestate=data.val();
      })
  }  
  update(state){
      database.ref ('/').update({
          gamestate:state
      })

  }
  start(){
      if (gamestate == 0){
          form=new Form();
          form.display;
          player=new player();
          player.getCount(); 
      }
  }
} 