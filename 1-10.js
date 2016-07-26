//1-10
//Code written in string format with <br/> tags to display for "cat" command. Remove all instances of <br/> from string and then run as eval

function send(arg){


/*
prj 1 -
Completed by Gavin Plesko 7/11/16

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

function euler1(){
	var sum = 0;
	toHistory('Finding multiples of 5 <br />' );
	for(var i = 0; i<1000; i+=5){
		sum+=i;
	
		}
	toHistory('Current sum: ' + sum + '<br />');
	
	toHistory('Finding multiples of 3 that are not multiples of 5 <br />' );
	for(var j= 0; j<1000; j+=3){

		if(j%5!=0){
			sum+=j;
		}
	}
	toHistory('Final sum: ' + sum + '<br />');

}
*/

var euler1 = "	var sum = 0;<br/>	toHistory('Finding multiples of 5 <br />' );<br/>	for(var i = 0; i<1000; i+=5){<br/>		sum+=i;<br/>	<br/>		}<br/>	toHistory('Current sum: ' + sum + '<br />');<br/>	<br/>	toHistory('Finding multiples of 3 that are not multiples of 5 <br />' );<br/>	for(var j= 0; j<1000; j+=3){<br/><br/>		if(j%5!=0){<br/>			sum+=j;<br/>		}<br/>	}<br/>	toHistory('Final sum: ' + sum + '<br />');";

/*
prj 2 -
Completed by Gavin Plesko 7/13/16

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function euler2(){
	var sum = 0;
	var a = 0;
	var b = 1;
	var c = 0;
	var d = 4000000;
	while(c<d){
		c=a+b;
		if(c%2==0){
			toHistory(c + ' ');
			sum+=c;
		}
		a=b;
		b=c;
	}
	toHistory('<br/> The final sum is ' + sum + '<br/>');

}
*/
var euler2 = "var sum = 0;<br/>	var a = 0;<br/>	var b = 1;<br/>	var c = 0;<br/>	var d = 4000000;<br/>	while(c<d){<br/>		c=a+b;<br/>		if(c%2==0){<br/>			toHistory(c + ' ');<br/>			sum+=c;<br/>		}<br/>		a=b;<br/>		b=c;<br/>	}<br/>	toHistory('<br/> The final sum is ' + sum + '<br/>');";

/*
prj 3 -
Completed by Gavin Plesko 7/13/16

What is the largest prime factor of the number 600851475143 ?

function euler3(){
	var num = 600851475143;
	var i = 2; //first prime
	var remaining = num;
	var answer = 0;
	while(i<=remaining){
		//toHistory('Testing '+ i + ' against ' + remaining + '.<br/>');
		if(remaining%i===0){
			remaining = remaining/i;
			toHistory(i+' is a factor of ' + num + '. The remaining amount is ' + remaining + '. <br/>');
			//console.log(remaining);
			answer = i;
		}
		i++;
	}
	toHistory(answer + ' is the largest factor of ' + num + '. <br/>');
}
*/
var euler3 = "var num = 600851475143;<br/>	var i = 2; //first prime<br/>	var remaining = num;<br/>	var answer = 0;<br/>	while(i<=remaining){<br/>		//toHistory('Testing '+ i + ' against ' + remaining + '.<br/>');<br/>		if(remaining%i===0){<br/>			remaining = remaining/i;<br/>			toHistory(i+' is a factor of ' + num + '. The remaining amount is ' + remaining + '. <br/>');<br/>			//console.log(remaining);<br/>			answer = i;<br/>		}<br/>		i++;<br/>	}<br/>	toHistory(answer + ' is the largest factor of ' + num + '. <br/>');";

/*
prj 4 -
Completed by Gavin Plesko 7/14/16

Find the largest palindrome made from the product of two 3-digit numbers.


function euler4(){
	function isPal(arg){
		var string = arg.toString();
		for(i in string){
			if(string.charAt(i) === string.charAt(string.length-i-1)){
			}
			else{
				return false;
			}
		}
		return true;
	}
	var pal = 0;
	var a = 999;
	while (a >= 100){
		var b = 999;
		while (b >= 100){
			if ((a * b > pal) && isPal(a * b) ){
				pal = a * b;
				toHistory('Current largest palindrome: ' + pal + '<br />');	
			} 
			b--;
		}
		a--;
	}
	toHistory('Final result: ' + pal + '<br/>');
}
*/
var euler4 = "function isPal(arg){<br/>		var string = arg.toString();<br/>		for(i in string){<br/>			if(string.charAt(i) === string.charAt(string.length-i-1)){<br/>			}<br/>			else{<br/>				return false;<br/>			}<br/>		}<br/>		return true;<br/>	}<br/>	var pal = 0;<br/>	var a = 999;<br/>	while (a >= 100){<br/>		var b = 999;<br/>		while (b >= 100){<br/>			if ((a * b > pal) && isPal(a * b) ){<br/>				pal = a * b;<br/>				toHistory('Current largest palindrome: ' + pal + '<br />');	<br/>			} <br/>			b--;<br/>		}<br/>		a--;<br/>	}<br/>	toHistory('Final result: ' + pal + '<br/>');";

/*
prj 5 -
Completed by Gavin Plesko 7/14/16 

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function euler5(){
	var Check = false;
	var curNum= 10000;
	while(Check===false){
		Check = true;
		for(var i=2;i<=19;i++){
			if(curNum%i===0){

			}else{
				Check=false;
				break;
			}
		}
		if (Check){
			toHistory('The smallest number that is evenly divisible by all numbers 1-20 is ' + curNum + '. <br/>');
			return curNum;
		}else{
			curNum+=20;
		}
	}
}

*/
var euler5 = "var Check = false;<br/>	var curNum= 10000;<br/>	while(Check===false){<br/>		Check = true;<br/>		for(var i=2;i<=19;i++){<br/>			if(curNum%i===0){<br/>			}else{<br/>				Check=false;<br/>				break;<br/>			}<br/>		}<br/>		if (Check){<br/>			toHistory('The smallest number that is evenly divisible by all numbers 1-20 is ' + curNum + '. <br/>');<br/>			return curNum;<br/>		}else{<br/>			curNum+=20;<br/>		}<br/>	}";

/*
prj 6 -
Completed by Gavin Plesko 7/14/16 

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function euler6(){
	var numbers = range(0,100,1);
	var squares = [];
	var sum = 0;
	var squareSum = 0;
	for (i in numbers){
		squares[i]=Math.pow(numbers[i],2);
		sum += numbers[i];
		squareSum += squares[i];
	}
	sum = Math.pow(sum,2);
	toHistory('Sum of squares is ' + sum + '. <br/> Square of sums is ' + squareSum + '. <br/> The difference is ' + (sum-squareSum) + '<br/>');
}
*/
var euler6="<br/>	var numbers = range(0,100,1);<br/>	var squares = [];<br/>	var sum = 0;<br/>	var squareSum = 0;<br/>	for (i in numbers){<br/>		squares[i]=Math.pow(numbers[i],2);<br/>		sum += numbers[i];<br/>		squareSum += squares[i];<br/>	}<br/>	sum = Math.pow(sum,2);<br/>	toHistory('Sum of squares is ' + sum + '. <br/> Square of sums is ' + squareSum + '. <br/> The difference is ' + (sum-squareSum) + '<br/>');";


/*
prj 7 - 
Completed by Gavin Plesko 7/15/16

Find the 10001st prime number.

function euler7(){
	var primeIndex = 1;
	var counter=0;
	var curPrime= 0;
	while(primeIndex<=10001){
		counter++;
		if(isPrime(counter)){

			primeIndex++;
			curPrime= counter;
			//toHistory(curPrime+'<br/>');
		}
		//console.log(curPrime);
	}
	toHistory(curPrime + ' is the 10001st prime.<br/>')
}
*/
var euler7 ="<br/>	var primeIndex = 1;<br/>	var counter=0;<br/>	var curPrime= 0;<br/>	while(primeIndex<=10001){<br/>		counter++;<br/>		if(isPrime(counter)){<br/><br/>			primeIndex++;<br/>			curPrime= counter;<br/>			//toHistory(curPrime+'<br/>');<br/>		}<br/>		//console.log(curPrime);<br/>	}<br/>	toHistory(curPrime + ' is the 10001st prime.<br/>')";





	if(arg=='euler1'){
		return euler1;
	}else if(arg=='euler2'){
		return euler2;
	}else if(arg=='euler3'){
		return euler3;
	}else if(arg=='euler4'){
		return euler4;
	}else if(arg=='euler5'){
		return euler5;
	}else if(arg=='euler6'){
		return euler6;
	}else if(arg=='euler7'){
		return euler7;
	}
}
