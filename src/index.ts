import * as el from "./simple_html";
import "./style.sass";

const cardInfo: [string, string, string][] = [
	["icon", "header", "description"],
	["", "Games", ""]
];

let glow: HTMLDivElement;

function buildCards() {
	const cardsDiv = el.get<HTMLDivElement>("cards");

	//el.append(cardsDiv, "div");
}

window.addEventListener('load', _ => {
	buildCards();
});

window.addEventListener("mousemove", event => {
	if (!glow) {
		glow = document.getElementById("glow") as HTMLDivElement;

		if (!glow)
			return;
	}

	let glowStyle = glow.style;
	let parent = glow.parentElement;

	if (!parent)
		return;
	
	let rect = parent.getBoundingClientRect();
	let x = event.clientX - rect.x;
	let y = event.clientY - rect.y

	console.log(rect.left, rect.top)

	glowStyle.left = x + "px";
	glowStyle.top = y + "px";

	//console.log(target, target?.tagName, target?.className);

	//top right bottom left
	//glowStyle.clipPath = `inset(160px 41px 78px -${x}px round 8px)`;
});

window.addEventListener("mouseenter", event => {
	console.log("event!");
	console.log(event.currentTarget, event.target);
});
