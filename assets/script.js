var baliseDot = document.querySelector(".dot");
baliseDot.classList.add("dot_selected");

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span> en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span> pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const banner = document.getElementById("banner");
i = 0;
var currentIndex = 0

arrow_left.addEventListener("click", () => {
	console.log("Vous avez cliqué sur le bouton gauche")


	currentIndex = currentIndex - 1;

	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}

	afficherSlider();
});

arrow_right.addEventListener("click", () => {
	console.log("Vous avez cliqué sur le bouton droit")

	currentIndex = currentIndex + 1;

	if (currentIndex === slides.length) {
		currentIndex = 0;
	}
	afficherSlider();

});

function afficherSlider() {
	let baliseImage = document.querySelector(".banner-img");
	baliseImage.src = "./assets/images/slideshow/" + slides[currentIndex].image;

	let textTagline = document.querySelector("#banner p")
	textTagline.innerHTML = slides[currentIndex].tagLine

	let dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}







