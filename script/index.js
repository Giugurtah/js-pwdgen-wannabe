

var userName = prompt("Dimmi il tuo nome");
var userSurname = prompt("Dimmi il tuo cognome");
var userFavoriteColor = prompt("Dimmi il tuo colore preferito");

var passwordPlaceHolder = document.getElementById("password");
var namePlaceHolder = document.getElementById("name");
var surnamePlaceHolder = document.getElementById("surname");
var colorPlaceHolder = document.getElementById("color");

console.log(userName);
console.log(userSurname);
console.log(userFavoriteColor);
console.log(passwordPlaceHolder);
console.log(namePlaceHolder);
console.log(surnamePlaceHolder);
console.log(colorPlaceHolder);

var userPassword = userName + userSurname + userFavoriteColor + "21";
console.log(userPassword);

namePlaceHolder.innerHTML = userName;
surnamePlaceHolder.innerHTML = userSurname;
colorPlaceHolder.innerHTML = userFavoriteColor;
passwordPlaceHolder.innerHTML = userPassword;

