var c=document.getElementById("canvas");
var context = c.getContext("2d");

var size = 600;
var mazeH = document.getElementById("rooms").value;
var mazeW = document.getElementById("rooms").value;
var maze = [];//2d array in 1d, 
var crawlStack = [];
var scl = size/mazeH || 20;
for (var i = 0; i < mazeH*mazeW; i++) {
  	var room = new Room(getRow(i), getCol(i));
  	maze.push(room);
}
function run(){
	mazeH = document.getElementById("rooms").value;
	mazeW = document.getElementById("rooms").value;

	scl = size/mazeH || 20;
	for (var i = 0; i < mazeH*mazeW; i++) {
	  	var room = new Room(getRow(i), getCol(i));
	  	maze[i] = room;
	}
	crawl(0,0);

}
function Room(row,col){
	this.row = row;
	this.col = col;
	this.walls = [true, true, true, true];//down up right left
	this.visited = false;

	this.draw = function(){
      	//down
      	if(this.walls[0]){
	      	context.beginPath();
	      	context.moveTo((this.col+1)*scl, (this.row+1)*scl);
	      	context.lineTo(this.col*scl, (this.row+1)*scl);
	      	context.stroke();
		}
      	//up
      	if(this.walls[1]){
  	      	context.beginPath();
  	      	context.moveTo(this.col*scl, this.row*scl);
  	      	context.lineTo((this.col+1)*scl, this.row*scl);
  	      	context.stroke();}

      	//right
      	if(this.walls[2]){
  	      	context.beginPath();
  	      	context.moveTo((this.col+1)*scl, (this.row+1)*scl);
  	      	context.lineTo((this.col+1)*scl, this.row*scl);
  	      	context.stroke();}

      	//left
      	if(this.walls[3]){
  	      	context.beginPath();
  	      	context.moveTo(this.col*scl, this.row*scl);
  	      	context.lineTo(this.col*scl, (this.row+1)*scl);
  	      	context.stroke();}    
    }

	this.available = function(){
		var available = [];
		var down = maze[coordinate(row+1, col)];//down
		var up = maze[coordinate(row-1, col)];//up
		var right = maze[coordinate(row, col+1)];//right
		var left = maze[coordinate(row, col-1)];//left
		if (down && !down.visited){
			available.push(down);
		}
		if (up && !up.visited){
			available.push(up);
		}
		if (right&& !right.visited){
			available.push(right);
		}
		if (left && !left.visited){
			available.push(left);
		}
		if (available.length>0){
			var r = available[Math.floor(Math.random()*available.length)];;
			return r;
		}else{
			return undefined;
		}

	}

}

function coordinate(row, col){//Takes row, col pair and returns value of index in array.
	if(row > mazeH || row < 0 || col < 0 || col > mazeW){
		return -1;
	}
	return (mazeW * row + col);
}
function getRow(index){
	return Math.floor(index/mazeW);
}
function getCol(index){
	return index % mazeW;
}
function breakWalls(cur, next){//down up right left 0 1 2 3
	if (cur.row<next.row){//cur is above next, cur = 0, next = 1
		cur.walls[0]=false;
		next.walls[1]=false;
	}if (cur.row>next.row){//cur is below next, cur = 1, next = 0
		cur.walls[1]=false;
		next.walls[0]=false;
	}if (cur.col<next.col){//cur is left of next, cur = 2, next = 3
		cur.walls[2]=false;
		next.walls[3]=false;
	}if (cur.col>next.col){//cur is right of next, cur = 3, next = 2
		cur.walls[3]=false;
		next.walls[2]=false;
	}

}

function crawl(row, col){

	var cur = maze[coordinate(row,col)];
	cur.visited = true;
	var next = cur.available();
	if (next){
		next.visited=true;
		crawlStack.push(cur);
		breakWalls(cur, next);
		cur = next;
	}else{

		cur = crawlStack.pop();
	}
	context.clearRect(0, 0, size, size);
	for(i in maze){
		maze[i].draw();
		if(maze[i].visited==false){

			crawl(cur.row, cur.col);
			break;
		}

	}
	
}
