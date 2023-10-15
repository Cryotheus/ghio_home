//there probably is a package that exists for these kinds of this
//but I don't know this ecosystem well enough to know what it is

export function append<K extends keyof HTMLElementTagNameMap>(parent: HTMLElement, tagName: K, classAttribute?: string, innerText?: string): HTMLElementTagNameMap[K] {
	let element = document.createElement(tagName);

	if (classAttribute)
		element.setAttribute("class", classAttribute);

	if (innerText)
		element.innerText = innerText;

	parent.appendChild(element);

	return element;
}

export function get<T extends HTMLElement>(needle: string, by?: string): T;
export function get<K extends keyof HTMLElementTagNameMap>(needle: string, asTag?: K, by: string = "id"): HTMLElementTagNameMap[K] | HTMLElement {
	let element: HTMLElement | null;

	//POST: more get options!
	switch (by) {
		case "id": element = document.getElementById(needle); break;

		default:
			throw new Error("get given invalid 'by' option: " + by);
	}

	if (!element)
		throw new Error("couldn't find element with id: " + needle);

	if (asTag)
		return element as HTMLElementTagNameMap[K];

	return element;
}
