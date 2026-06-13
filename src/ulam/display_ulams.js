import { ulams } from '../script.js'

let ulamList = document.getElementById("ulams")

let ulamsHTML = ''

for (const ulam of [...ulams].reverse()) {
        ulamsHTML += ulamEl(ulam)
}

ulamList.innerHTML = ulamsHTML

function ulamEl(ulam) {
        return `
                <div class="ulam">
                        <h4>${ulam.name}</h4>
                        <p>Ingredients ${ulam.ingredients.length}, Steps ${ulam.steps.length}</p>
                </div>
        `
}