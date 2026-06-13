import { toArray } from "../utils.js"
import { ulams } from "../script.js"

const form = document.querySelector('form')
const ulamName = document.getElementById('ulam-name')
const ingredients = document.getElementById('ingredients')
const steps = document.getElementById('steps')

form.onsubmit = (event) => {
        event.preventDefault()

        let invalidInputs = []

        if (!ulamName.value) invalidInputs.push('ulamName')
        if (!ingredients.value) invalidInputs.push('ingredients')
        if (!steps.value) invalidInputs.push('steps')

        if (invalidInputs.length > 0) {
                alert(invalidInputs)
                return
        }

        const ulam = {
                name: ulamName.value,
                ingredients: toArray(ingredients.value),
                steps: toArray(steps.value)
        }

        ulams.push(ulam)
        localStorage.setItem('ulams', JSON.stringify(ulams))

        // ulamName.value = ''
        // ingredients.value =''
        // steps.value = ''

        window.location.href = "../index.html"
}