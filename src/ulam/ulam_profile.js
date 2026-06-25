import { ulams } from '../script.js'

const params = new URLSearchParams(location.search)
let ulamName = params.get('ulamName')

let selectedUlam = ulams.find(ulam => ulam.name === ulamName) // find() returns undefined when no match

// let selectedUlam = null
// for (const ulam of ulams) {
//         if (ulam.name === ulamName) {
//                 selectedUlam = ulam
//         }
// }

const ulamTitle = document.getElementById('ulam-title')
ulamTitle.textContent = selectedUlam.name

const ingredientsContainer = document.getElementById('ingredients')
ingredientsContainer.innerHTML = selectedUlam.ingredients.map(ingredient => `
        <label class="ingredient"><input type="checkbox">  ${ingredient}</label>
`).join('')

const stepsContainer = document.getElementById('steps')
stepsContainer.innerHTML = selectedUlam.steps.map(step => `
        <li class="step">${step}</li>
`).join('')

const editButton = document.getElementById('edit-button')
editButton.addEventListener('click', (event) => {
        window.location.href = `/pages/edit_ulam_page.html?ulamName=${encodeURIComponent(ulamName)}`
})