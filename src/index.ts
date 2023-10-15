import * as el from "./simple_html";

function buildCards() {
	const cardsDiv = el.get<HTMLDivElement>("cards");

	console.log(cardsDiv);
}

window.addEventListener('load', _ => {
	buildCards();
});