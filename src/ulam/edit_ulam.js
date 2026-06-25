import { ulams, updateUlam, deleteUlam } from '../script.js'
import { toArray } from '../utils.js'

const form = document.querySelector('form')
const ulamNameInput = document.getElementById('ulam-name')
const ingredients = document.getElementById('ingredients')
const steps = document.getElementById('steps')

const params = new URLSearchParams(location.search)
let ulamName = params.get('ulamName')

let selectedUlam = ulams.find(ulam => ulam.name === ulamName) // find() returns undefined when no match
ulamNameInput.value = selectedUlam.name
ingredients.value = selectedUlam.ingredients.map(ingredient => `${ingredient}\n`).join('')
steps.value = selectedUlam.steps.map(step => `${step}\n`).join('')

form.onsubmit = (event) => {
        event.preventDefault()

        let invalidInputs = []

        if (!ulamNameInput.value) invalidInputs.push('ulamName')
        if (!ingredients.value) invalidInputs.push('ingredients')
        if (!steps.value) invalidInputs.push('steps')

        if (invalidInputs.length > 0) {
                alert(invalidInputs)
                return
        }

        const ulam = {
                name: ulamNameInput.value,
                ingredients: toArray(ingredients.value),
                steps: toArray(steps.value)
        }

        updateUlam(ulam, selectedUlam.name)

        window.location.href = "../index.html"
}

const deleteUlamButton = document.getElementById('delete-ulam-button')
deleteUlamButton.onclick = (event) => {
        event.preventDefault()

        if (!confirm(`Sure ka delete mo lutong ulam na ${selectedUlam.name}?`)) {
                return
        }
        deleteUlam(selectedUlam)

        window.location.href = "../index.html"
}

const goBackButton = document.getElementById('go-back-button')
goBackButton.href = `/pages/ulam_profile_page.html?ulamName=${encodeURIComponent(ulamName)}`