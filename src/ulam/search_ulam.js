import { getIngredients, ulams } from '../script.js'
import { capitlize } from '../utils.js'

const searchForm = document.getElementById('search-form')
const inputIngredient = document.getElementById('ingredient')

const availableIngredientsContainer = document.getElementById('available-ingredients-container')
const matchedUlamsContainer = document.getElementById('matched-ulams')

const ingredients = getIngredients()
let ingredientsNaMeron = []
// let unknownIngredients = []
let matchedUlams = []

appendIngredientsDatalist()

/* 
        Instead of pushing the entered ingredient,
        we use it to find and get the actall ingredient from the ingredients array,
        then that is what we push to the ingredients na meron.
*/
searchForm.onsubmit = (event) => {
        event.preventDefault()

        let enteredIngredient = inputIngredient.value.trim().toLowerCase() // trim() removes spaces from input
        let ingredient = ingredients.find(ingredient => ingredient.toLowerCase() === enteredIngredient)

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
        
        matchedUlams = getMatchedUlams()
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
                <div class="ulam" data-ulam="${ulam.name}">
                        <h4>${ulam.name}</h4>
                        <p>${ulam.matchCount} matches</p>
                </div>        
        `).join('')
}

function getMatchedUlams() {
        let matchedUlams = [] // empty the array first before adding new matched ulams 
        for (const ulam of ulams) {
                let matchCount = 0

                for (const ingredient of ulam.ingredients) { // more readable
                        if (ingredientsNaMeron.includes(ingredient)) {
                                matchCount ++
                        }
                }

                /*
                        Similar performance (both O(a × b)).
                        Use Set.has() instead of Array.includes()
                        when the dataset becomes large.
                */
                
                // for (const ingredient of ingredientsNaMeron) { // less readbale
                //         if (ulam.ingredients.includes(ingredient)) {
                //                 matchCount ++
                //         }
                // }
                
                if (matchCount > 0) {
                        matchedUlams.push({
                                ...ulam,
                                matchCount
                        })
                }
        }
        return matchedUlams.sort((a, b) => b.matchCount - a.matchCount)
}

availableIngredientsContainer.addEventListener('click', (event) => {
        if (event.target.tagName !== "BUTTON") return

        let ingredientToRemove = event.target.dataset.ingredient
        ingredientsNaMeron = ingredientsNaMeron.filter(ingredient => ingredient !== ingredientToRemove)

        if (ingredientsNaMeron.length === 0) {
                availableIngredientsContainer.style.display = 'none'
        }

        matchedUlams = getMatchedUlams()
        displayAvailableIngredients()
        displayMatchedUlams()
})