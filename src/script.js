
export let ulams = JSON.parse(localStorage.getItem("ulams")) || [] // get only once 

export function addUlam(ulam) {
        ulams.push(ulam)
        localStorage.setItem('ulams', JSON.stringify(ulams))
}

/*
        find the specific ulam using index or .map()
        update its content
        this changes the ulam inside the ulams initself
*/
export function updateUlams(ulam, originalName) {
        for (let i = 0; i < ulams.length; i++) {
                if (ulams[i].name === originalName) {
                        ulams[i] = ulam
                }
        }

        // ulams = ulams.map(currentUlam => {
        //         if (currentUlam.name === ulam.name) {
        //                 return ulam
        //         }
        //         return currentUlam
        // })

        /*
                For loop is better here because we are looking for one specific item
                to transform and not transforming every item.
                .map function aims to transform every item and return a new array.
        */

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