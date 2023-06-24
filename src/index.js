document.addEventListener('DOMContentLoaded', () => {
    fetch(` http://localhost:3000/current-stored-dreams`)
    .then(res => res.json())
    .then(data => {
        console.log(`this is the array we will push our dream objects too`, data)
        data.forEach(dream => {
            pastDreamBar(dream)
            dreamImageBar(dream)
        })
    })
})
let pastDreams =document.querySelector(`.stored-dreams`)
function pastDreamBar(dream) {
    let dreamTitle = document.createElement('h3')
    let dreamTheme = document.createElement('h5')
    let dreamRating = document.createElement('h5')

    dreamTitle.innerText = dream.title
    dreamTheme.innerText = dream.theme
    dreamRating.innerText = dreamRating

    pastDreams.append(dreamTitle, dreamTheme, dreamRating)
}
let photoBox = document.querySelector('.photo-box')
function dreamImageBar(dream) {
    let dreamImage = document.createElement('img')
    dreamImage.src = dream.image
    photoBox.appendChild(dreamImage)

}




button = document.querySelector('#text-button')
dreamDetails = document.querySelector("#dream-text-area")
titleEntry = document.querySelector('#title-entry')
let dreamObject = {
    title: '',
    rating: '',
    theme: '',
    details: '',
    image: '',
}
button.addEventListener('click', e => {
    e.preventDefault()
    console.log(dreamDetails.value)
    console.log(titleEntry.value)
    dreamObject.details = dreamDetails.value
    dreamObject.details = titleEntry.value
    console.log(dreamObject)
})





