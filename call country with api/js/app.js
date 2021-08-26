const countryApi = ()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Response => Response.json())
    .then(contry => internationalConutry(contry))
}
countryApi()

// const internationalConutry= (contry)=>{
//     console.log(contry)
//     const mainContainer = document.getElementById('mainContainer')
//     for (const singleCountry of contry){
//         // console.log(singleCountry.name)
//         const p = document.createElement('p')
//         p.innerText = singleCountry.name
//         mainContainer.appendChild(p)
//     }

// }
// NEW IMPLEMENT FOREACH 
const internationalConutry = (contry)=>{
    console.log(contry)
    const mainContainer = document.getElementById('mainContainer')
    contry.forEach (worldCountry =>{
        // console.log(worldCountry.name)
        const p = document.createElement('p')
        p.classList.add('perp')
        p.innerText = worldCountry.name
        mainContainer.appendChild(p)

    })
}
