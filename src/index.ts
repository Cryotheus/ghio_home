import * as el from "./simple_html";
import "./style.sass";

const cardInfo: [string, string, string][] = [
	["icon", "header", "description"],
	["", "Games", ""]
];

function buildCards() {
	const cardsDiv = el.get<HTMLDivElement>("cards");

	//el.append(cardsDiv, "div");
}

window.addEventListener('load', _ => {
	buildCards();
});