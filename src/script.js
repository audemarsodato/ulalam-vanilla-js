
export let ulams = JSON.parse(localStorage.getItem("ulams")) || [] // get only once 

export function addUlam(ulam) {
        ulams.push(ulam)
        localStorage.setItem('ulams', JSON.stringify(ulams))
}

export function getIngredients() {
        let ingredients = []

        for (let i = 0; i < ulams.length; i++) { // loops through all the ulams
                let ulamIngredients = ulams[i].ingredients
                for (let j = 0; j < ulamIngredients.length; j++) { // loops through all the ingredients of the current ulam in the iteration
                        if (!ingredients.includes(ulamIngredients[j])) { // check if the current ulam is already in the ingredients array
                                ingredients.push(ulamIngredients[j])
                        }
                }
        }

        return ingredients
}

/* DYNAMIC LINK NAVIGATION */
const ulamsEl = document.getElementById('ulams')
const ulamsElSearchPage = document.getElementById('matched-ulams')

if (ulamsEl) {
        ulamsEl.addEventListener('click', (event) => {
                redirectToProfile(event)
        })
}

if (ulamsElSearchPage) {
        ulamsElSearchPage.addEventListener('click', (event) => {
                redirectToProfile(event)
        })
}

function redirectToProfile(event) {
        const ulam = event.target.closest('.ulam')

        if (!ulam) return
        
        let ulamName = ulam.dataset.ulam
        
        // redirect using location href
        window.location.href = `/pages/ulam_profile_page.html?ulamName=${encodeURIComponent(ulamName)}`
}

// Mismwa

// Sibuyas
// Bawang
// 2 Mega sardines
// Mismwa
// Paminta powder
// Asin
// Toyo

// Igisa bawang and sibuyas
// Lagay dalawang sardinas
// Lagyan toyo habang ginigisa
// Lagyan water
// Hintayin kumulo
// Timplahan ng asin at paminta
// Lagay miswa ng hiwa hiwalay wag buo buo
// Patayin apoy at hayaan maluto mismwa