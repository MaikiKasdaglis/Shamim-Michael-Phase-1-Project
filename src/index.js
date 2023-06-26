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
    })

    pastDreams.append(dreamTitle, dreamTheme, dreamRating)
}
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
    dreamObject.rating = starValue
    console.log(dreamObject)
    pastDreamList(dreamObject)
})//we hella need to figure out the rating as well as the theme functionality 

// eventlistner for ratting stars

const stars = document.querySelectorAll(".stars a");
const starwrapper = document.querySelector(".stars ");
let starValue = null

stars.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
        starwrapper.classList.add('disabled');

        stars.forEach((otherStar, otheridx) => {
            if(otheridx <= clickedIdx) {
                otherStar.classList.add('active')

            }

        })
        starValue = clickedIdx + 1;
        console.log(`star of index ${clickedIdx} was clicked`)
    })
})



  