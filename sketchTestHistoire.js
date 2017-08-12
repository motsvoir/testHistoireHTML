var oldTexte;
var element;
var init=true;
var canvasLateral;
var y = 0;

function initialiser(){// pas setup sinon crée un nouveau canvas par p5
	element = document.getElementById("textInit");
	//oldTexte = element.textContent||element.innerText||"erreur";
	oldTexte = element.innerHTML;
	//console.log(oldTexte);
}
function setup(){
	canvasLateral = createCanvas(200,600);
	canvasLateral.parent("canvasAnim");
	background(255,217,204);
	frameRate(15);
	initialiser();
}

function draw(){
	background (255,217,204);
	rect(50,y,50,50);
	y++;
}

function generer(){ // appellé par bouton générer
	if (init){
		element.innerHTML = "Je ne suis pas un lorem ipsum";		
	} else {
		element.innerHTML = oldTexte;
	}
	init=!init;
}