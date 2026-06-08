import { toArray } from "./utils.js"

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
                return
        }

        const ulam = {
                name: ulamName.value,
                ingredients: toArray(ingredients.value),
                steps: toArray(steps.value)
        }

        ulamName.value = ''
        ingredients.value =''
        steps.value = ''
}