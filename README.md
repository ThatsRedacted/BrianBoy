# BrianBoy
  
  He's our lovely Discord shittalking bot. He was designed after Dad Bot, but edited to be funny in polish.
  His official name is Brian Bennis, named after one of clients of our long dead friend Grolly. Godspeed you filthy coward.
  
# Installation
  
   1. Clone or download and extract repository
   2. Install node ```npm install```
   3. Install discord.js ```npm install discord.js```   
   4. Fill out config file  
   5. Run bot ```node bot.js```
  
# Customization
  ## Config File    
   1. _Token_ is your token from discord dev site to authenticate your bot     
   2. _Prefix_ is your prefix for commands in ```./commands/pastas.json```
   3. _Shit_ is, uh, you know Dad Bot? Like if you say "I'm hungry", he'll say "Hi hungry, I'm dad". Well, shit is thing that triggers Brian. In our case it is "powiedz", because we are polish and it's considered funny I guess.
  ## Pastas
   This is used to create new commands with _prefix_. It needs _ID_, _Name_ and _Fulltext_. _ID_ is ID, duh. _Name_ is what will the command. _Fulltext_ will be what bot will post to the server. You can use ```\n``` to create new line in fulltext.
  ## Including
   This is used to create new commands that will happen when something is said out of context. It needs _ID_, _What_, _Answer, _Chance_. _ID_ is ID. _What_ is what will bot look for. _Answer_ is what will be sent to channel. _Chance_ is percentage chance to happen.
  
