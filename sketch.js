var matPointStrt = []
var matPointCrnt = []

function setup() {
	background(15,15,15);
	let doc = document.getElementById("topCard-graphic");
	createCanvas(doc.clientWidth,doc.clientHeight).parent('topCard-graphic');

	for(let i = 1; i < 12; i+=1.2){
		let rowA = [];
		let rowB = [];
		for(let j = 1; j < 12; j+=1.2){
			rowA.push([j,i]);
			rowB.push([j,i]);
		}
		matPointStrt.push(rowA);
		matPointCrnt.push(rowB);
	}

	stroke(211, 212, 202);
	fill(211, 212, 202);
	strokeWeight(4);
	
	frameRate(40);
}



var cOne = 1/Math.sqrt(2*Math.PI)
function computeValueFunction(x, dist){
	return cOne * Math.pow(Math.E, -(x-dist)*(x-dist));
	//return 0;
}


var distVal  = 0;
var size = 30;
function draw() {
	background(15,15,15);
	distVal += 0.05;
	distVal = distVal % 20;
	for(let i = 0; i < matPointCrnt.length; i++){
		for(let j = 0; j < matPointCrnt[i].length; j++){

			let p =  (matPointCrnt[i][j][0] + matPointCrnt[i][j][1]) /2 
			if (Math.abs(distVal - p) < 2 ){
				matPointCrnt[i][j][0] = matPointStrt[i][j][0] + computeValueFunction(p, distVal) * 0.8;
				matPointCrnt[i][j][1] = matPointStrt[i][j][1] + computeValueFunction(p, distVal) * 0.8;
			}else{
				matPointCrnt[i][j][0] = matPointStrt[i][j][0];
				matPointCrnt[i][j][1] = matPointStrt[i][j][1];
			}
			
			let vecDist = [matPointCrnt[i][j][0]*size - mouseX,matPointCrnt[i][j][1]*size - mouseY];
			let distFromMouse = Math.sqrt(Math.pow(vecDist[0],2) + Math.pow(vecDist[1],2))

			if(distFromMouse != 0 && distFromMouse < 200){
				let vX = vecDist[0] * 1/(distFromMouse*distFromMouse)*10
				let vY = vecDist[1] * 1/(distFromMouse*distFromMouse)*10
				offsetX = Math.min(Math.abs(vX),0.2)
				offsetY = Math.min(Math.abs(vY),0.2)
				matPointCrnt[i][j][0] += offsetX * Math.sign(vX);
				matPointCrnt[i][j][1] += offsetY * Math.sign(vY);
			}

		
			circle(matPointCrnt[i][j][0]*size,matPointCrnt[i][j][1]*size,7);
			
			if(j < matPointCrnt[i].length - 1){
				line(matPointCrnt[i][j][0]*size,matPointCrnt[i][j][1]*size,matPointCrnt[i][j+1][0]*size,matPointCrnt[i][j+1][1]*size);
			}	
			if(i < matPointCrnt.length - 1){
				line(matPointCrnt[i][j][0]*size,matPointCrnt[i][j][1]*size,matPointCrnt[i+1][j][0]*size,matPointCrnt[i+1][j][1]*size);
			}
			if(i < matPointCrnt.length - 1 && j < matPointCrnt[i].length - 1){
				line(matPointCrnt[i][j][0]*size,matPointCrnt[i][j][1]*size,matPointCrnt[i+1][j+1][0]*size,matPointCrnt[i+1][j+1][1]*size);
			}
		}
	}
}
