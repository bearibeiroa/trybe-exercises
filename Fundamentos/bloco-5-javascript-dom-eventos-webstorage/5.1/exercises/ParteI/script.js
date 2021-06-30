const paragraph = document.getElementById("paragraph");
paragraph.style.color = "green";

console.log(document.getElementById("page-title").innerText = "The Truman Show");

console.log(document.getElementById("second-paragraph").innerText = "Lindo filme com Jim Carrey, que conta a história de um homem que nasceu e cresceu em um Big Brother.")

console.log(document.getElementById("subtitle").innerHTML = "Saiba mais sobre o meu filme preferido.")

let movieJimCarrey = document.getElementsByClassName("jim-movie");

for (let index = 0; index < movieJimCarrey.length; index += 1) {
    movieJimCarrey[index].innerText = "Eternal Sunshine of the Spotless Mind";
}