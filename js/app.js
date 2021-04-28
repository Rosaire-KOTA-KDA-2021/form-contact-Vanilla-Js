let firstName = document.querySelector("#first-name");

let lastName = document.querySelector("#last-name");
let group = document.querySelector("#group");
let biography = document.querySelector("#biography");
let btnAdd = document.querySelector("#btn-create");
let contactList = [];
let listBtnDeletes = [];
let contactListContainer = document.querySelector(".card-id");
// File
let avatar = document.querySelector("#image-file"); // file from input
let imagePreview = document.querySelector("#image-preview-avatar");
// let req = new XMLHttpRequest();
// let formData = new FormData();

// formData.append("avatar", avatar);
// req.open("POST", 'images/');
// req.send(formData);

// Upload de l'image

function uploadFile(e) {
  e.preventDefault();
  if (this.files[0]) {
    imagePreview.src = URL.createObjectURL(this.files[0]);
    //imagePreview.onload=imgLoaded;
  }
}
avatar.addEventListener("change", uploadFile);

// Creation de l'objet Contact
function Contact(firstName, lastName, group, biography, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.group = group;
  this.biography = biography;
  this.avatar = avatar;
}

// Fonction add: on ajute les contactList(objets)

function addContact(e) {
  e.preventDefault();
  let contact = new Contact(
    firstName.value,
    lastName.value,
    group.value,
    biography.value,
    imagePreview.src
  );

  contactList.push(contact);

  let vide = contactList.every(() => " ");
  console.log(vide);
  if (validation(contact)) {
  } else {
    renderItems();
  }
  // on rend les items sur le DOM
}

function validation(contact) {
  if (contact.firstName == "") {
    valide.style.border = "1px solid red";
    let labelMessage = document.querySelector(".labelMessage");
    labelMessage.textContent = "Veuillez remplir tous les champs";
    labelMessage.style.color = "red";
    labelMessage.style.marginLeft = "4rem";
    labelMessage.style.marginTop = "-14rem";
    valide.classList.toggle("border-danger");
    return true;
  } else {
    return false;
  }
}
// btnAdd: on ecute et execute l'evenement clique du bouton creer

btnAdd.addEventListener("click", addContact);

// Fonction addDom: on creer et ajute nos element au Dom

function renderItems() {
  let card = document.createElement("div");
  let imgContainer = document.createElement("div");
  let imgProfile = document.createElement("img");
  let titleContainer = document.createElement("h3");
  let titleLastName = document.createElement("span");
  let titleFirstName = document.createElement("span");
  let titleGroup = document.createElement("h4");
  let textBiography = document.createElement("p");
  let btnDelete = document.createElement("button");
  let cardContent = document.createElement("div");

  card.classList.add("flex-contact");

  imgProfile.setAttribute("src", imagePreview.src);
  imgProfile.setAttribute("alt", "profile-contact");
  imgProfile.classList.add("img-circle");

  imgContainer.classList.add("img-container");
  titleContainer.classList.add("title-container");
  titleGroup.classList.add("title-group");

  for (const perso of contactList) {
    titleLastName.textContent = perso.lastName;
    titleLastName.classList.add("title-last-name");
    titleFirstName.textContent = perso.firstName;

    titleGroup.textContent = perso.group;

    textBiography.textContent = perso.biography;

    btnDelete.textContent = "x";
    btnDelete.classList.add("btn-delete");
    btnDelete.id = "delete";
  }

  imgContainer.appendChild(imgProfile);
  card.appendChild(imgContainer);
  titleContainer.appendChild(titleLastName);
  titleContainer.appendChild(titleFirstName);
  cardContent.appendChild(titleContainer);
  cardContent.appendChild(titleGroup);
  cardContent.appendChild(textBiography);
  card.appendChild(cardContent);
  card.appendChild(btnDelete);
  contactListContainer.appendChild(card);
  listBtnDeletes.push(btnDelete);

  //
  addToDeleteItems();
}
function createChilds() {}
// Suppression
function addToDeleteItems() {
  for (const element of listBtnDeletes) {
    element.addEventListener("click", function (e) {
      contactListContainer.removeChild(element.parentElement);
      console.log(element.parentElement);
    });
  }
}

// (function(){
// 	console.log()
// })()
