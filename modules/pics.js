const picPath = "./pics/"
class PicCommand {
    constructor(name, picture){
      this.name = name;
      this.picture = picture;
    }

    generateAction(prefix, message, PicCommand){
      if(message.content.includes(" ")){
        if (message.content.toLowerCase().split(" ")[0] === (prefix + this.name.toLowerCase()) && !(message.author.bot)) {
            message.channel.send(message.content.substring(message.content.indexOf(" ")+1), {files: [picPath+this.picture]});
            message.delete(0);
          }
      }
      else{
        if (message.content.toLowerCase() === (prefix + this.name.toLowerCase()) && !(message.author.bot)) {
            message.channel.send({files: [picPath+this.picture]});
            message.delete(0);
          }
      }
    }

};

module.exports = PicCommand;
