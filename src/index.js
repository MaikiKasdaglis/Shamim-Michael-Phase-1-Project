let usefulURL
let query         

document.addEventListener('DOMContentLoaded', () => {
    fetch(` http://localhost:3000/current-stored-dreams`)
    .then(res => res.json())
    .then(data => {
        data.forEach(dream => {
            pastDreamList(dream)
            dreamImageBar(dream)
        })
        selectedDreamDetails(data[0])
    }) 
    
})


// async function imageQuery(query){
//     const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`,{
//                 method : "GET",
//                 mode  : 'cors',
//                 headers : {
//                     "Authorization":"kZLIYkxusXzOsvUbw9OAZaadOKSuJVzhvnHgS2oJOXAcUQ8kzZUn4uVo",
//                 }
//              })
//     const images = await response.json()
//     return images
// }



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
//let titleTitle = document.querySelector('#title-title')
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

    //titleTitle.innerText = dream.title
    title.innerText = `Title: ${dream.title }`
    theme.innerText = ` Theme: ${dream.theme}`
    rating.innerText = `Rating: ${dream.rating}`
    details.innerText = `Details: ${dream.details}`
    image.src = dream.image

   //selectedDream.style.backgroundImage = `url(${dream.image})`
    selectedDream.append(title, theme, rating, details, image)
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
    dreamImage.addEventListener('mouseover', e => {
        // relevantImage = dreamImage
        photoClassChanger(dreamImage)
    })
    dreamImage.addEventListener('mouseout', e => {
        photoChangBack(dreamImage)
    })
    photoBox.appendChild(dreamImage)
}

function photoClassChanger (element) {
        element.classList.remove('display-image')
        element.classList.add('display-image-larger')
      }
function photoChangBack (element) {
    element.classList.remove('display-image-larger')
    element.classList.add('display-image')
    }

//========Dream form stuff ===============

let button = document.querySelector('#text-form')
let dreamDetails = document.querySelector("#dream-text-area")
let titleEntry = document.querySelector('#title-entry')
let themeEntry = document.querySelector('#theme-entry')
let ratingEntry = document.querySelector('#rating-entry')
let imageEntry = document.querySelector('#image-entry')

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
    console.log(titleEntry.value)
    dreamObject.details = dreamDetails.value
    dreamObject.title = titleEntry.value
    query = themeEntry.value
    dreamObject.rating = ratingEntry.value 
    dreamObject.image = imageEntry.value 
    pastDreamList(dreamObject)
    dreamImageBar(dreamObject)
    e.target.reset()

   postFunction(dreamObject)
   
   
})


function postFunction(dreamObject) {
    fetch(`http://localhost:3000/current-stored-dreams`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dreamObject
        })
        })

}

//===========image query stuff 

// function imageQuery(query) {
//     fetch(`https://api.pexels.com/v1/search?query=${query}`,{
//         method : "GET",
//         mode  : 'cors',
//         headers : {
//             "Authorization":"kZLIYkxusXzOsvUbw9OAZaadOKSuJVzhvnHgS2oJOXAcUQ8kzZUn4uVo",
//         }
//      }) .then(res => res.json())
//         .then(data => {
//             console.log(`photo querey`, data)
//             pictureArrayMaker(data)
//         })
           
//     }

// function pictureArrayMaker(data) {
//     usefulImage = data.photos[0].url
//     console.log(usefulImage)
//     console.log(`i'm being called`)
// }



//we hella need to figure out the rating as well as the theme functionality 


               


