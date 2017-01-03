
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ():;,.!?'\"-";
var target = setTarget(document.getElementById("textIn"));
function setTarget(targetIn){
	target = targetIn;

}

function newString(genes){
	if(genes){
		genes = genes;
	} else{
	return randString(target.length);
	}
}
function fitness(genes){

	var fitness = 0;
	genes.split('').map(function(gene, index){
		if(target[index]==gene){
			fitness++;
		}
	
		
	});


	if(genes==target){
		return fitness * 5;
	}
	return fitness;
}

function randString(leng){
	var text = "";

	for( var i=0; i < leng; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}
function crossover(a,b){

	var am = a.split();
	var bm = b.split();
	var c = '';
	for( var i = 0; i < a.length; i++){
		if (Math.random()*1<.5){
			c+=(a[i]);
		}else{
			c+=(b[i]);
		}
	}

	return c;
}
function mutate(string, order){
 	var mutation = randString(target.length);
 	for (var i = 0; i < order; i++){
	mutation = crossover(mutation, string)
	}
	return mutation;
}