class TextCommand {
    constructor(name, work, chance){
      this.name = name;
      this.work = work;
      this.chance = chance || 100
    }

    generateAction(prefix, message, TextCommand){
      	 if (message.content.toLowerCase() === (prefix + this.name.toLowerCase()) && !(message.author.bot) && !(message.content.includes("powiedz"))) {
        	message.channel.send(this.work);
      	}
    }
    generateInclude(message){
      var done = false;
      if (message.content.toLowerCase().includes(this.name.toLowerCase()) && !(message.author.bot) && !(message.content.includes("powiedz"))){
        if(Math.floor((Math.random() * 100) + 1) <= this.chance){
          message.channel.send(this.work);
          done = true;
        }
      }
      return done;
    }

};
module.exports = TextCommand;
