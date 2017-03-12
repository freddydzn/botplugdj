bot = '[RHCP Brazil]'
v = '5.5'
vbot = '[RHCP Brazil 5.0]'
autor = 'FreddyGamerBR'
API.sendChat(vbot + " Bot iniciado com sucesso!")

function msc(music){
var media = API.getMedia();
API.sendChat(bot + " Tocando: " + media.author + " - " + media.title)
}

function usrjn(userjoin){
  API.sendChat(bot + " Seja bem-vindo(a) Ao Red Hot Chili Peppers Brasil! " + userjoin.username + " Para Ver Os Comando Digite !comandos")
}
function cmds(cmd){
  var id=cmd.uid;
  var msg=cmd.message;
  var perm=API.getUser(id).role;
  var use=API.getUser(id);
  if(msg=="!bot"){
    API.sendChat(vbot + " Bot criado por " + autor)
  }
  if(msg=="!pular"){
    if(perm >= 2){
      API.sendChat(bot + " Sua musica foi pulada!")
      API.moderateForceSkip();
    }else{
      API.sendChat(bot + " Permissão insuficiente!")
    }
  }
  if(msg=="!v"){
    API.sendChat(bot + " " + v + " beta.")    
  }   
   if(msg=="!musica"){
   var media = API.getMedia();
   API.sendChat(bot + " Tocando:" + media.author + " - " + media.title)    
   } 
   if(msg=="!californication"){
      API.sendChat(bot + " Its Californication")
   } 
   if(msg=="!cantstop"){
      API.sendChat(bot + " The World I Love")       
  }   
   if(msg=="!comandos"){
      API.sendChat(bot + "!bot, !v, !musica, ")
  }
  }

API.on(API.HISTORY_UPDATE,msc);
API.on(API.USER_JOIN,usrjn);
API.on(API.CHAT,cmds);
API.moderateMuteUser(userID, reason, duration)
