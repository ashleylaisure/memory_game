import Elements from "./elements.js";

class Controller {
    constructor(cardsNumber) {
        this.elements = new Elements(cardsNumber)
        this.clickCard()
    }

    clickCard() {
        const { attempts, cards} = this.elements
        console.log(cards)
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                attempts.click++
                card.classList.add("change")
            })
        })
    }
}

export default Controller