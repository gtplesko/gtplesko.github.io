//1-10
/*
prj 1 -
Completed by Gavin Plesko 7/11/16

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function go1(){
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

/*
prj 2 -
Completed by Gavin Plesko 7/13/16

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
function go2(){
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

/*
prj 3 -
Completed by Gavin Plesko 7/13/16

What is the largest prime factor of the number 600851475143 ?
*/
function go3(){
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

/*
prj 4 -
Completed by Gavin Plesko 7/14/16

Find the largest palindrome made from the product of two 3-digit numbers.

*/
function go4(){
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

/*
prj 5 -
Completed by Gavin Plesko 7/14/16 

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/
function go5(){
	var Check = false;
	var curNum= 10000;
	while(Check===false){
		Check = true;
		for(var i=1;i<=19;i++){
			if(Check===true&&curNum%i===0){

			}else{
				Check=false;
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

/*
prj 6 -
Completed by Gavin Plesko 7/14/16 

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/
function go6(){
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
function go7(){
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