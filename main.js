//main.js
// The purpose of this is to allow the 'terminal' to work properly.

$(document).ready(function(){ 

 })



var runnable = ['euler1','euler2','euler3','euler4','euler5','euler6','euler7'];

var termHistory = '';
function ls(){//displays all available projects
	termHistory+= 'Current available projects are: <br/>';
	for(i in runnable){
		termHistory+=runnable[i]+'<br/>';
	}
	document.getElementById('history').innerHTML = termHistory; 
}
function cat(arg){//reads out the javascript file
	termHistory+= send(arg);
	document.getElementById('history').innerHTML = termHistory;
}
function help(arg){//Writes out the list of available commands and what they do
	termHistory+= 'Available commands are:<br/>ls - Displays all files.<br/>cat - Reads out code from file.<br/>info - gives project Euler challenge description.<br/>run - Runs the file that is typed in as an argument.<br/>';
	document.getElementById('history').innerHTML = termHistory;
}
function info(arg){//gives description of arg 
	termHistory+= 'Feature is under developement.';
	document.getElementById('history').innerHTML = termHistory;
}
function run(arg){//runs a javascript script
	termHistory+= 'Running.<br/>';
	document.getElementById('history').innerHTML = termHistory;
	while(arg.indexOf('<br/>')!== -1){
	 	arg = arg.replace('<br/>','');
	}
	console.log(arg + ' this is new');
	eval(arg);
}
function toHistory(input){
	termHistory+=input;
	document.getElementById('history').innerHTML = termHistory;
}

function invalid(arg){
	termHistory+= '"' + arg + '" is not a valid command. Please type help for available commands. <br/>';
	document.getElementById('history').innerHTML = termHistory;	
}

function runScript(e){//pulls text from textfield
	var Key=e.keyCode;
	//console.log(Key);
	if (Key=='13'){//when executed
		var value = document.getElementById('textArea').value;
		console.log(value);
		getArgs(value);
	}
}

function getArgs(arg){
	var args = arg.split(" ");
	if(args[0]=='ls'){
		ls();
	}else if(args[0]=='cat'){
		cat(args[1]);
	}else if(args[0]=='help'){
		help(args[1]);
	}else if(args[0]=='run'){
		if(runnable.indexOf(args[1])!==0){
			var newArg = send(args[1]);
			run(newArg);
		}
	}else if(args[0]=='info'){
		info(args[1]);
	}else{
		invalid(args[0]);
	}
	document.getElementById('textArea').value='';
}

//Useful stuff


function range(bot, top, tick){
  var a=[]
  var b=bot;
  while(b<top){
  	b+=tick;
  	a.push(b)
  }
  return a;
};

function isPrime(num){
	if (num === 1){
		return false;
	}else if(num===2){
		return true;
	}else if(num%2===0){
		return false;
	}
	var count= 3;
	while(count*count<=num){
		if (num%count==0){
			return false;
		}else{
			count+=2;
		}
	}
	return true;
}