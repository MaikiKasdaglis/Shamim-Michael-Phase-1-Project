document.addEventListener('DOMContentLoaded', () => {
    fetch(`http://localhost:3000`)
    .then(res => res.json)
    .then(data => {
        console.log(`dbjson werks`)
    })
})





button = document.querySelector('#text-button')
dreamDetails = document.querySelector("#dream-text-area")
let dreamObject = {
    title: '',
    rating: '',
    theme: '',
    details: '',
    image: '',
}
button.addEventListener('submit', e => {
    e.preventDefault()
    console.log(dreamDetails.value)
    dreamObject.details = dreamDetails.value
    console.log(dreamObject)
})