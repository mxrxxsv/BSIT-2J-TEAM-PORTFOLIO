var Cardgroup = 
[
    "🦄","🍦","🌈",
    "👽","👾","🤖",
    "👹","👺",
]

// var groupCard1 = 
// [
//     "🐈","🐂","🐍",
//     "🐕","🦖","🫏",
//     "🏇","🦝"
// ]

// let groupCard2 =
// [
//     "🦖","🐩","🐯",
//     "🐕‍🦺","🐏","🦨",
//     "👾","🤖"
// ]

let totalCards = Cardgroup.concat(Cardgroup);

function deckCards() {
    let result;

    result = totalCards.sort(function () {
        return 0.5 - Math.random();
    });

    return result;
}

function distributeCard() {
    let table = document.querySelector("#table");
    let shuffledCards = deckCards();
    table.innerHTML = "";

    shuffledCards.forEach(function (element) {
        let card = document.createElement("div");

        card.innerHTML = 
                     "<div class='card' data-value=" +
                     element +
                     ">" +
                     "<div class='card_content'>" +
                     element +
                     "</div>" +
                     "</div>";

    table.appendChild(card);
    });
}

function discover() {
    let discovery;
    let pendingCards;
    let totalDiscovery = document.querySelectorAll(".discovered:not(.successful)");


    if (totalDiscovery.length > 1) {
        return;
    }

    this.classList.add("discovered");

    discovery = document.querySelectorAll(".discovered:not(.successful)");

    if (discovery.length < 2) {
        return;
    }

    compare(discovery);
    startCounter();
    pendingCards = document.querySelectorAll(".card:not(.successful)");
    if (pendingCards.length === 0) {
        finish();
    }
}

function compare(cardsToCompare) {
    if (
        cardsToCompare[0].dataset.value ===
        cardsToCompare[1].dataset.value
    ) {
        success(cardsToCompare);
    } else {
        error(cardsToCompare);
    }
}

function success(lastCard) {
    lastCard.forEach(function(element) {
        element.classList.add("successful");
    });

}

function error(lastCard) {
    lastCard.forEach(function(element) {
        element.classList.remove("discovered");
    });
}

distributeCard();

document.querySelectorAll(".card").forEach(function(element) {
    element.addEventListener("click",discover);
});
