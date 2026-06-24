import { getIngredients, ulams } from '../script.js'

const searchForm = document.getElementById('search-form')
const inputIngredient = document.getElementById('ingredient')

const availableIngredientsContainer = document.getElementById('available-ingredients-container')
const matchedUlamsContainer = document.getElementById('matched-ulams')

let ingredients = getIngredients()
let ingredientsNaMeron = []
// let unknownIngredients = []
let matchedUlams = []

appendIngredientsDatalist()

searchForm.onsubmit = (event) => {
        event.preventDefault()

        let ingredient = inputIngredient.value

        if (!ingredients.includes(ingredient)) {
                inputIngredient.value = ''
                // unknownIngredients.push(ingredient)
                alert("Wala sa listahan ng mga ingredients yan")
                return
        }

        if (ingredientsNaMeron.includes(ingredient)) {
                inputIngredient.value = ''
                alert("Meron na yan sa listahan")
                return
        }

        ingredientsNaMeron.push(ingredient)
        displayAvailableIngredients()
        
        getMatchedUlams()
        displayMatchedUlams()

        if (ingredientsNaMeron.length !== 0) {
                availableIngredientsContainer.style.display = 'block'
        }

        inputIngredient.value = ''
}

function appendIngredientsDatalist() {
        const datalistEl = document.createElement('datalist')
        datalistEl.id = 'ingredients-list'
        
        datalistEl.innerHTML = ingredients.map(ingredient => `<option value="${ingredient}"></option>`).join('')
        
        searchForm.appendChild(datalistEl)
        inputIngredient.setAttribute('list', 'ingredients-list')
}

function displayAvailableIngredients() {
        availableIngredientsContainer.innerHTML = ingredientsNaMeron.map(ingredient => `
                <div class="available-ingredient">
                        <div class="content">
                                <p>${ingredient}</p>
                                <button data-ingredient="${ingredient}">x</button>
                        </div>
                </div>
        `).join('')
}

function displayMatchedUlams() {
        matchedUlamsContainer.innerHTML = matchedUlams.map(ulam => `
                <div class="ulam">
                        <h4>${ulam.name}</h4>
                        <p>${ulam.matchCount} matches</p>
                </div>        
        `).join('')
}

function getMatchedUlams() {
        matchedUlams = [] // empty the array first before adding new matched ulams 
        for (const ulam of ulams) {
                let matchCount = 0

                for (const ingredient of ingredientsNaMeron) {
                        if (ulam.ingredients.includes(ingredient)) {
                                matchCount ++
                        }
                }
                
                if (matchCount > 0) {
                        matchedUlams.push({
                                name: ulam.name,
                                matchCount
                        })
                }
        }

        // matchedUlams = ulams.map(ulam => {
        //         const matchCount = ulam.ingredients.filter(ingredient => 
        //                 ingredientsNaMeron.includes(ingredient)
        //         ).length

        //         return {
        //                 name: ulam.name,
        //                 matchCount
        //         }
        // }).filter(ulam => ulam.matchCount > 0)
}

availableIngredientsContainer.addEventListener('click', (event) => {
        if (event.target.tagName !== "BUTTON") return

        let ingredientToRemove = event.target.dataset.ingredient
        ingredientsNaMeron = ingredientsNaMeron.filter(ingredient => ingredient !== ingredientToRemove)

        if (ingredientsNaMeron.length === 0) {
                availableIngredientsContainer.style.display = 'none'
        }

        getMatchedUlams()
        displayAvailableIngredients()
        displayMatchedUlams()
})

// use datalist to auto suggest ingredients that already exist
// check if the typed ingredients is in the ingredients already
        // disable button when no match
// once added, display the available ingredients
// filter the ulam using the available ingredients