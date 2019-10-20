class TextCommand {
    constructor(name, work, chance){
      this.name = name;
      this.work = work;
      if(chance == null){
        this.chance = 100;
      }
      else{
        this.chance = chance;
      }
    }

    generateAction(prefix, message, TextCommand){
      	 if (message.content === (prefix + this.name) && !(message.author.bot) && !(message.content.includes("powiedz"))) {
        	message.channel.send(this.work);
      	}
    }
    generateInclue(message){
      var done = false
       if (message.content.toLowerCase().includes(this.name) && !(message.author.bot) && !(message.content.includes("powiedz"))) {
        message.channel.send(this.work);
        done = true;
      }
      return done;
    }
    includeAndDelete(message){
      var done = false;
      if (message.content.toLowerCase().includes(this.name) && !(message.author.bot) && !(message.content.includes("powiedz"))) {
       message.channel.send(this.work);
       message.delete(0);
       done = true;
     }
     return done;
    }
    generateRandom(message){
      var done = false;
      if (message.content.toLowerCase().includes(this.name) && !(message.author.bot) && !(message.content.includes("powiedz"))){
        if(Math.floor((Math.random() * 100) + 1) <= this.chance){
          message.channel.send(this.work);
          done = true;
        }
      }
      return done;
    }

};
module.exports = TextCommand;

