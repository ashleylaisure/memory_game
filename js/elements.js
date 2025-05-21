class Elements {
    constructor(cardsNumber) {
        this.cardsNumber = cardsNumber
        this.playground = document.querySelector('.playground')
        this.cardsIndex = []
        this.shuffledIndex = []
        this.doubleIndex()
        this.shuffleIndexes()
        this.createCard()


        this.cards = document.querySelectorAll(".card")
        this.attempts = {
            correct: 0,
            wrong: 0,
            click: 0,
        }
    }

    createCard() {
        console.log(this.cardsNumber)
        this.playground.style.gridTemplateRows = 
            `repeat(${Math.sqrt(this.cardsNumber)}, 1fr)`
        this.playground.style.gridTemplateColumns = 
            `repeat(${Math.sqrt(this.cardsNumber)}, 1fr)`

        this.shuffledIndex.forEach((index) => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.setAttribute("data-index", index)

            const img = document.createElement("img")
            img.src = `../images/icon-${index}.png`
            card.append(img)
            this.playground.append(card)
        })
    }

    doubleIndex() {
        for(let i=1; i <= this.cardsNumber; i++) {
            // and array with numbers one through cardsNumber/2 twice
            i <= this.cardsNumber / 2 ? this.cardsIndex.push(i) 
            : this.cardsIndex.push(i - this.cardsNumber / 2)
        }
        console.log(this.cardsIndex)
    }

    shuffleIndexes() {
        this.shuffledIndex = this.cardsIndex.sort(() => Math.random() - 0.5)
        console.log(this.shuffledIndex)
        return this.shuffledIndex
    }

}

export default Elements