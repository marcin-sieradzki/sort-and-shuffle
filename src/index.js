const sortButton = document.getElementById("sort");
const shuffleButton = document.getElementById("shuffle");

const state = {
	cards: [
		{ number: 1, decoratorColor: "#6f98a8" },
		{ number: 2, decoratorColor: "#2b8ead" },
		{ number: 3, decoratorColor: "#2f454e" },
		{ number: 4, decoratorColor: "#2b8ead" },
		{ number: 5, decoratorColor: "#2f454e" },
		{ number: 6, decoratorColor: "#bfbfbf" },
		{ number: 7, decoratorColor: "#bfbfbf" },
		{ number: 8, decoratorColor: "#6f98a8" },
		{ number: 9, decoratorColor: "#2f454e" },
	],
};

function render(cards) {
	const cardElements = buildCardElements(cards);
	const cardsElement = document.querySelector(".app-cards");
	cardsElement.innerHTML = "";
	cardElements.forEach((card) => {
		cardsElement.appendChild(card);
	});
}

function buildCardElements(cards) {
	return cards.map((card) => {
		const cardElement = document.createElement("div");
		cardElement.classList.add("app-cards__card");
		cardElement.innerText = card.number;
		const cardDecorator = document.createElement("div");
		cardDecorator.classList.add("app-cards__card-decorator");
		cardDecorator.style.background = card.decoratorColor;
		cardElement.appendChild(cardDecorator);
		return cardElement;
	});
}

function sort(cards) {
	return [...cards].sort((a, b) => a.number - b.number);
}

function shuffle(cards) {
	let cardsCopy = [...cards];
	for (let i = cardsCopy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
	}
	return cardsCopy;
}

sortButton.addEventListener("click", () => {
	state.cards = sort(state.cards);
	render(state.cards);
});

shuffleButton.addEventListener("click", () => {
	state.cards = shuffle(state.cards);
	render(state.cards);
});

render(state.cards);
