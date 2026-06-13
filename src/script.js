
export let ulams = JSON.parse(localStorage.getItem("ulams")) || [] // get only once 

export function addUlam(ulam) {
        ulams.push(ulam)
        localStorage.setItem('ulams', JSON.stringify(ulams))
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