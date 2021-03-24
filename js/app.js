var fistname = document.querySelector("#firstname");
var nom = document.querySelector("#name");
var groupe = document.querySelector("#groupe");
var bio = document.querySelector("#bio");
var btnAdd = document.querySelector("#btn-create");
var personnes = [];
var listBtnDeletes = [];

var flexCont = document.querySelector(".card-id");

// Creation de l'objet Personne
function Personne(fistnamep, nomp, groupep, biop) {
	this.fistname = fistnamep;
	this.nom = nomp;
	this.groupe = groupep;
	this.bio = biop;
}

// Fonction add: on ajute les personnes(objets)

function add(e) {
	e.preventDefault();
	personne = new Personne(fistname.value, nom.value, groupe.value, bio.value);
	personnes.push(personne);
	addOnDom();
}

// Fonction addDom: on creer et ajute nos element au Dom

function addOnDom() {
	var content = document.createElement("div");
	var imgdiv = document.createElement("div");
	var img = document.createElement("img");
	var title = document.createElement("h3");
	var spanNom = document.createElement("span");
	var spanPrenom = document.createElement("span");
	var title2 = document.createElement("h3");
	var myparagraphe = document.createElement("p");
	var btnDelete = document.createElement("button");
	var contents = document.createElement("div");
	var i = document.createElement("i");
	content.classList.toggle("flex-contact");
	img.classList.add("img-profile");
	img.setAttribute("src", "images/profile.svg");
	img.setAttribute("alt", "profile-contact");
	img.classList.add("img-circle");
	imgdiv.style.marginRight="3rem";
	title.style.textAlign="center";
	title2.style.textAlign="center";

	for (const perso of personnes) {
		spanNom.textContent = perso.nom;
		spanNom.style.marginRight = "10px";
		spanPrenom.textContent = perso.fistname;

		title2.textContent = perso.groupe;

		myparagraphe.textContent = perso.bio;

		btnDelete.textContent = "x";
		btnDelete.style.cursor = "pointer";
		btnDelete.style.border = "0px";
		btnDelete.style.backgroundColor = "white";
		btnDelete.style.width = "3rem";
		btnDelete.style.height = "3rem";
		btnDelete.style.color = "#eb5757";
		btnDelete.style.fontSize = "35px";
		btnDelete.id = "delete";
	}

	imgdiv.appendChild(img);
	content.appendChild(imgdiv);
	title.appendChild(spanNom);
	title.appendChild(spanPrenom);
	contents.appendChild(title);
	contents.appendChild(title2);
	contents.appendChild(myparagraphe);
	content.appendChild(contents);
	content.appendChild(btnDelete);
	flexCont.appendChild(content);
	listBtnDeletes.push(btnDelete);
	
}

// btnAdd: on ecute et execute l'evenement clique du bouton creer

btnAdd.addEventListener("click", add);

// Suppression
function deleteItems() {
	listBtnDeletes.forEach(element => {
		
		element.addEventListener("click", function (e) {

			
			flexCont.removeChild(element.parentElement);
			console.log(element.parentElement)
			
		});
	});
}
deleteItems()
