document.addEventListener('DOMContentLoaded', () => {
    fetch(` http://localhost:3000/current-stored-dreams`)
    .then(res => res.json())
    .then(data => {
        console.log(`this is the array we will push our dream objects too`, data)
        data.forEach(dream => {
            pastDreamList(dream)
            dreamImageBar(dream)
        })
    }) 
        const query = 'nature'
        fetch(`https://api.pexels.com/v1/search?query=${query}`,{
            method : "GET",
            mode  : 'cors',
            headers : {
                "Authorization":"kZLIYkxusXzOsvUbw9OAZaadOKSuJVzhvnHgS2oJOXAcUQ8kzZUn4uVo",
            }
         }) .then(res => res.json())
            .then(data => 
                console.log(data))
    
})




let pastDreams =document.querySelector(`.stored-dreams`)
//formatting is so bad. not even sure where to start. 
function pastDreamList(dream) {
    let dreamTitle = document.createElement('h3')
    let dreamTheme = document.createElement('h5')
    let dreamRating = document.createElement('h5')
    dreamTitle.classList.add('dream-title')
    dreamTheme.classList.add('dream-theme')
    dreamRating.classList.add('dream-rating')


    dreamTitle.innerText = `Title: ${dream.title}`
    dreamTheme.innerText = `Theme: ${dream.theme}`
    dreamRating.innerText = `Rating: ${dream.rating}`

    dreamTitle.addEventListener('click', e => {
        console.log(`title clicker works`)
        selectedDreamDetails(dream)
    })

    pastDreams.append(dreamTitle, dreamTheme, dreamRating)
}

// =======photoBar Size Change 



// = document.querySelector('')

// function photoClassChanger (element) {
//     element.classList.remove('display-image')
//     element.classList.add('display-image-larger')
//     console.log(`photoClassChanger is called`)
//   }

  

let selectedDream = document.querySelector('.selected-dream')
let selectedDreamWrapper = document.querySelector('.wrapper-selected-dream')
function selectedDreamDetails(dream) {
    removeAllChildNodes(selectedDream)
    let title = document.createElement('h3')
    let theme = document.createElement('h5')
    let rating = document.createElement('h5')
    let details = document.createElement('p')
    let image = document.createElement('img')
    title.id = 'selected-title'
    theme.id = 'selected-theme'
    rating.id = 'selected-rating'
    details.id = 'selected-details'
    image.id = 'selected-image'

    title.innerText = `Title: ${dream.title }`
    theme.innerText = ` Theme: ${dream.theme}`
    rating.innerText = `Rating: ${dream.rating}`
    details.innerText = `Details: ${dream.details}`
    
   selectedDream.style.backgroundImage = `url(${dream.image})`
    selectedDream.append(title, theme, rating, details)
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//===========PHOTO BOX STUFF=======================
let photoBox = document.querySelector('.photo-box')
function dreamImageBar(dream) {
    let dreamImage = document.createElement('img')
    dreamImage.classList.add("display-image")
    dreamImage.src = dream.image
    photoBox.appendChild(dreamImage)

      //how do we achieve all images get resized uniformly before posting to dom? 

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
    dreamObject.title = titleEntry.value
    console.log(dreamObject)
    pastDreamList(dreamObject)

})



//we hella need to figure out the rating as well as the theme functionality 





