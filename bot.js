const Discord = require("discord.js");
const client = new Discord.Client();
const TextCommand = require("./modules/commands.js")
const config = require(".//configs/config.json")

function help(array, message){
	let string = "";
	array.forEach(
		function addString(value) {string += value.name + "\n";}
	);
	message.channel.send(string);
}

function implying(message){
	message.channel.send("```css\n >"+message.content.substring(message.content.indexOf(">")+1,message.content.lenght)+"\n```");
	message.delete(0);
	return true;
}

let prefix = "!";
let pasta = "What the fuck did you just fucking say about me, you little bitch? I\'ll have you know I graduated top of my class in the Navy Seals, and I\'ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I\'m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You\'re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that\'s just with my bare hands.";
let pasta2 = "Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn\'t, you didn\'t, and now you\'re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You\'re fucking dead, kiddo.";
let a = new TextCommand("a", "b");
let navyseals = new TextCommand("navyseals", pasta+pasta2);
let butthurt = new TextCommand("butthurt", " ```Powiem wam coś. Nie dlatego że czuję się butthurt czy coś, tylko dlatego że jest to prawda.\nJesteście ŻAŁOŚNI. Jedyne czym jesteście(w szczgólności ty crh i ty Filip) to bandą debili która nie ma nic lepszego do roboty jak tylko pisać same chujstwa na tej pomyłce(chodzi mi o to forum).\nJesteście ŻAŁOŚNI. Bo jedyne co potraficie to ubliżać sobie nawzajem i pokazywać jacy z was twardzi internetowi goście.\nWchodziłem tu jedynie z przyzwyczajenia i z małej nadzieji że znajdę tu jeszcze coś zabawnego. Ale chuj. Już nie będę wchodził. I tak, tak. Wiem \"No one gives a shit\" To jest właśnie postawa którą wy utrzymujecie i która czyni z was bandę zacofanych debili.\nWięc proszę bardzo! Wyzywajcie mnie! Śmiejcie się! Ponieważ to jest to co daje wam pociechę w waszych pustych i nic nie wartych życiach.\nalso, IN B4 SERIOUS BUSINESS!```");
let hymn = new TextCommand("hymn","Spierdalaj, Gral. Pierdoliiiiiisz,\nSpierdalaj, Gral, Spierdalaaaaaaj.\n,nie będę sobie kórwa\noków wypalał\nto co ty robisz to jest bracie rzenada\nfailujesz, koleś failujesz\n\nnasz prorok phil powróci niebawem\nwezwie lavosa i rozjebie ten burdel\nwięc się fakaj\nfakaj się, kurde\n\nmy kpftardy fapujemy się\nprzy hentajah lorda forte\nomijają nas szerokim łukiem\nrozjebie ci zaraz morde\n\nna obiad ścierwo twe\na na deser lol cake lol\nwięc się, kórwa\npierdol\n\ngrollu grollu bież pszykuad z phila\non naszym masterem i to w nim drzemie siła");

let fug = new TextCommand("fug",":DDDDDDDD");
let gral = new TextCommand("spierdalaj gral", "Pierdolisz");
let loss = new TextCommand("loss", "``` | || || |_ ```");
let fuck = new TextCommand("fuck you bot", "no you.");
let no = new TextCommand("you", "no u", 6);
let tube = new TextCommand("youtube", "No, you're a tube!");
let canIget = new TextCommand("can i get f", "F");
let thanks = new TextCommand("thanks bot", "You're welcome");
let youtube = new TextCommand("youtube", "no, you are tube", 6);
let xd = new TextCommand("xd", "This expression is now forbidden by law. Thus said I, Brian Bennis.");
let done = false;
let allActions = [navyseals, butthurt, hymn];
let allInclude = [gral, fug, thanks, loss, fuck, canIget];
let allChance = [no, youtube];
let allIncludeAndDelete = [xd];


client.on("ready", () => {
	console.log("I am ready");
});

client.on("message", (message) => {
	done = false;
	if (message.content === (prefix + "help") && !(message.author.bot) && !(message.content.includes("powiedz"))) {
		message.channel.send("Text Commands: \n");
		help(allActions, message);
	}
	//Powiedz bedzie kiedy indziej zmienione, fuck off
	else if (message.content.includes("powiedz") && !(message.author.bot)){
		let mow = message.content.substring(message.content.indexOf("powiedz") + 8, message.content.lenght);
		message.channel.send(mow);
	}
	//Dice rolls beda w rpg bocie kiedys
	else if (message.content.startsWith(prefix + "d") && !(message.author.bot) && !(message.content.includes("powiedz"))) {
    let dots = message.content.substring(message.content.indexOf("d")+1,);
		let dupa = '';
	    amount = message.content.substring(message.content.indexOf(" ") + 1, message.content.indexOf(" ")+3);
			if(amount > 20){
				message.channel.send('Cmon guys. Dont');
			}
			else if(amount == '!d'){
				message.channel.send((Math.floor((Math.random()*parseInt(dots))+1)));
			}
			else{
			for(i = 0; i<parseInt(amount);i++){
				if(i !== amount-1){
				dupa = dupa.concat((Math.floor((Math.random()*parseInt(dots))+1)),', ');
				}
				else{
				dupa = dupa.concat((Math.floor((Math.random()*parseInt(dots))+1)));
				}
			}
			message.channel.send(dupa);
		}
	}
	allIncludeAndDelete.forEach(
			function(value){ if(done == false){done = value.includeAndDelete(message)}}
	);
	if(message.content.startsWith(">") && !(message.author.bot) && !(message.content.includes("powiedz")) && done == false){
		done = implying(message);
	}
	allActions.forEach(
		function(value){ value.generateAction(prefix,message)}
	);
	allInclude.forEach(
			function(value){ if(done == false){done = value.generateInclue(message)}}
	);
	allChance.forEach(
			function(value){ if(done == false){done = value.generateRandom(message)}}
	);


});
client.on("error", console.error);
client.login(config.token);
