const Discord = require("discord.js");
const client = new Discord.Client();
const TextCommand = require("./modules/commands.js");
const config = require("./configs/config.json");
const pastas = require("./commands/pastas.json");
const including = require("./commands/including.json")
const prefix = config.prefix;
const shit = config.shit;
var i;
var talk;

//Initialize flag
let done = false;

//Function responsible for generating help message
function generateHelp(array, message, flag){
	if (message.content === (prefix + "help") && !(message.author.bot) && !(message.content.includes("powiedz"))) {
		let string = "";
		array.forEach(
			function addString(value) {string += value.name + "\n";}
		);
		message.channel.send("**Text Commands:** \n");
		message.channel.send(string);
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
		talk = message.content.substring(message.content.indexOf(shit)+1,message.content.length).split(" ",2);
		//console.log(talk[1]);
		message.channel.send(talk[1]);
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

//All actions with prefix.
let allActions = [];
for (i = 0; i < pastas.pasta.length; i++) {
  allActions.push(new TextCommand(pastas.pasta[i].command, pastas.pasta[i].fulltext));
	//console.log(pastas.pasta[i]);
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
	done = generateHelp(allActions,message,done);

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
	//Checks for all including
	allInclude.forEach(
			function(value){ if(done == false){done = value.generateInclude(message)}}
	);


});

//Error "handling"
client.on("error", console.error);
//Loging in
client.login(config.token);
