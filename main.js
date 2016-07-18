//main.js
// The purpose of this is to allow the 'terminal' to work properly.
var termHistory = '';
var projects = ['1','2','3','4'];
function ls(arg){//displays all available projects
	termHistory+= 'arg is' + arg + '<br/>';
	document.getElementById('history').innerHTML = termHistory; 
}
function cat(arg){//reads out the historys of the javascript file
	termHistory+= 'arg is' + arg + '<br/>';
	document.getElementById('history').innerHTML = termHistory;
}
function help(arg){//Writes out the list of available commands and what they do
	termHistory+= 'Available commands are:<br/>ls - Displays all files.<br/>cat - Reads out code from file.<br/>info - gives project Euler challenge description.<br/>run - Runs the file that is typed in as an argument.<br/>';
	document.getElementById('history').innerHTML = termHistory;
}
function info(arg){//gives project euler challenge description 
	termHistory+= 'arg is' + arg + '<br/>';
	document.getElementById('history').innerHTML = termHistory;
}
function run(arg){//runs a javascript script
	termHistory+= 'Running ' + arg + '. This may take a moment to load.<br/>';
	document.getElementById('history').innerHTML = termHistory;
	if (arg==1){
		go1();
	}else if(arg==2){
		go2();
	}else if(arg==3){
		go3();
	}else if(arg==4){
		go4();
	}else if(arg==5){
		go5();
	}else if(arg==6){
		go6();
	}else if(arg==7){
		go7();
	}
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
		if (value.indexOf('ls')==0){
			ls('frank');
			console.log('ls');
			document.getElementById('textArea').value='';
			
		}else if( value.indexOf('cat')==0){
			cat('joe');
			console.log('cat');
			document.getElementById('textArea').value='';
			
		}else if(value.indexOf('help')==0){
			help('taco');
			console.log('help');
			document.getElementById('textArea').value='';
		
		}else if(value.indexOf('run ')==0){
			run(value.substring(4));
			console.log('run');
			document.getElementById('textArea').value='';
		
		}else if(value.indexOf('info')==0){
			info('fred');
			console.log('info');
			document.getElementById('textArea').value='';
		
		}else{
			invalid(document.getElementById('textArea').value);
			console.log('nope');
		}
	}
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