import { ulams } from '../script.js'

let ulamList = document.getElementById("ulams")

let ulamsHTML = ''

for (const ulam of [...ulams].reverse()) {
        ulamsHTML += ulamEl(ulam)
}

if (ulams.length === 0) {
        ulamList.innerHTML = '<p class="no-ulams-prompt">No ulams. <a href="/pages/add_ulam_page.html">Add ulam</a>.</p>'
}
else {
        ulamList.innerHTML = ulamsHTML
}

function ulamEl(ulam) {
        return `
                <div class="ulam" data-ulam="${ulam.name}">
                        <h4>${ulam.name}</h4>
                        <p>Ingredients ${ulam.ingredients.length}, Steps ${ulam.steps.length}</p>
                </div>
        `
}