//Shit needed for Discord
const Discord = require("discord.js");
const config = require("./configs/config.json");
const client = new Discord.Client();

//Shit needed for text commands
const TextCommand = require("./modules/commands.js");
const PicCommand = require("./modules/pics.js")
const pastas = require("./commands/pastas.json");
const including = require("./commands/including.json")
const prefix = config.prefix;
const shit = config.shit;
var i;
var talk;

//Shit needed for pics
var fs = require('fs');
var pics = fs.readdirSync('./pics/');

//Initialize flag
let done = false;

//Function responsible for generating help message
function generateHelp(textHelp, picsHelp, message, flag){
	if (message.content === (prefix + "help") && !(message.author.bot) && !(message.content.includes("powiedz"))) {
		let string = "";
		let pictures = "";
		textHelp.forEach(
			function addString(value) {string += value.name + "\n";}
		);
		picsHelp.forEach(
			function addString(value) {pictures += value.name + "\n";}
		);
		message.channel.send("**Text Commands:** \n");
		message.channel.send(string);
		message.channel.send("**Pics Commands:** \n");
		message.channel.send(pictures);
		return true;
	}
	else{
		return flag;
	}
}

//Function responsible for >implying
function generateImplying(message, flag){
	if(message.content.startsWith(">") && !(message.author.bot) && flag == false){
		message.channel.send("```css\n >"+message.content.substring(message.content.indexOf(">")+1,message.content.lenght)+"\n```");
		message.delete(0);
		return true;
	}
	else{
		return flag;
	}
}

//Function responsible for saying shit
function talkWithMe(message, shit, flag){
	if (message.content.includes(shit) && !(message.author.bot) && flag == false){
		talk = message.content.split(shit,2);
		actualmessage = talk[1].substring(talk[1].indexOf(" ")+1);
		console.log(actualmessage);
		message.channel.send(actualmessage);
		return true;
	}
	else{
		return flag;
	}
}

//Function responsible for dice rolls
function rollDice(message, flag){
	if (message.content.startsWith(prefix + "d") && !(message.author.bot) && !(message.content.includes(shit)) && flag == false) {
    let dots = parseInt(message.content.split("d",2)[1]);
		console.log(dots);
		if(!(isNaN(dots))){
			message.channel.send((Math.floor((Math.random()*parseInt(dots))+1)));
		}
		else{
			message.channel.send("Not an integer, fuck you.")
		}
	}
	else{
		return flag;
	}
}

//All text actions with prefix.
let allActions = [];
for (i = 0; i < pastas.pasta.length; i++) {
  allActions.push(new TextCommand(pastas.pasta[i].command, pastas.pasta[i].fulltext));
	//console.log(pastas.pasta[i]);
}

//All pics actions with prefix
let allPics = [];
for (i = 0; i < pics.length; i++){
	allPics.push(new PicCommand(pics[i].split(".")[0],pics[i]))
}

//All inclide and chances
let allInclude = [];
for (i = 0; i < including.include.length; i++) {
  allInclude.push(new TextCommand(including.include[i].what, including.include[i].answer, including.include[i].chance));
	//console.log(including.include[i].what);
}

//Confirming that client IS actualy ready.
client.on("ready", () => {
	console.log("I am ready");
});

//What should happen once message is sent
client.on("message", (message) => {

	//done flag to stop evaluating message
	done = false;

	//List of all comands for prefix
	done = generateHelp(allActions,allPics,message,done);

	//Message starting with > is going to be green because implying and original message will be removed
	done = generateImplying(message,done);

	//Checking if bot is supposed to talk shit
	done = talkWithMe(message,shit,done);

	//Rolling the dice
	done = rollDice(message, done);

	//Checks all prefix pastass
	allActions.forEach(
		function(value){ if(done == false){value.generateAction(prefix,message)}}
	);
	//Checks for all pics
	allPics.forEach(
		function(value){ if(done == false){value.generateAction(prefix,message)}}
	);
	//Checks for all including
	allInclude.forEach(
		function(value){ if(done == false){done = value.generateInclude(message)}}
	);


});

//Error "handling"
client.on("error", console.error);
//Loging in
client.login(config.token);
