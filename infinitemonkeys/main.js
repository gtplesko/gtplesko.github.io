
var poolSize = 0;
var pool = [];
var generations = 0;
var mutations = 1;
function setup(){

	for( var i = 0; i < poolSize; i++){
		pool[i] = newString();
	}
	return pool;
}
function update(){
	var nextGen = [];
	for (i in pool){
		for (var j = 0; j < fitness(pool[i], 0); j++){
			nextGen.push(pool[i]);
		}
	}
	for (var i = 0; i < poolSize; i++){
		var selA = nextGen[Math.floor(Math.random()*nextGen.length)];
		var selB = nextGen[Math.floor(Math.random()*nextGen.length)];
		var child=crossover(selA, selB);
		if(Math.random()*1>.05){
			pool[i] = child;
		}else{
			
			pool[i] = mutate(child, mutations);
		}
	}
}



function run(){
	setTarget(document.getElementById("textIn").value);
	poolSize = document.getElementById("poolS").value;
	generations = document.getElementById("genS").value;
	mutations = document.getElementById("mutaS").value;
	setup();	
	
	for( var i = 0; i < generations; i++ ){
		(function (i)  {
			setTimeout(function () {
				update();
				if(i%20){
					document.getElementById("textOut").innerHTML = pool.join('\n');
				}
			}, 1);
		} ) (i);
	}
	document.getElementById("textOut").innerHTML = pool.join('\n');


	}


