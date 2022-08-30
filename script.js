const API_KEY = "api_key=e4b88636ce6a49bd9c4ed9b8ee7f3725"
const base_url = "https://api.themoviedb.org/3"

const netflixOriginal_url = base_url + "/discover/tv?" + API_KEY
const trendingNow_url = base_url + "/trending/movie/week?" + API_KEY
const topRated_url = base_url + "/movie/top_rated?" + API_KEY

const image_path = "https://image.tmdb.org/t/p/w500"
const originalImage_path = "https://image.tmdb.org/t/p/original"



const netflixDiv = document.getElementById("netflix");
const wishlistDiv = document.getElementById("wishlist")
const trendingDiv = document.getElementById("trending")
const topRatedDiv = document.getElementById("top-rated")
const titleDiv = document.getElementById("title")
const descriptionDiv = document.getElementById("description")
const feature = document.getElementById("feature")



const getOriginals = async (url) => {

    try{
        let response = await fetch(url)
        let data = await response.json()
        console.log(data.results)
        movie_database = data.results
        showOriginals(movie_database)
       
        
        
    }

    catch(error){
        console.log("Something went wrong!")
    }
}

getOriginals(netflixOriginal_url)


function showOriginals(movies){
    netflixDiv.innerHTML = '';
    wishlistDiv.innerHTML = '';
    

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        const picture = document.createElement("img");
        picture.src = image_path + `${movie.poster_path}`

       

        movieElement.appendChild(picture);
        netflixDiv.appendChild(movieElement);

        movieElement.onclick = () => {
            // console.log(movie.overview)
            // console.log(movie.name)
            titleDiv.innerHTML = `<h2>${movie.name}</h2>`
            descriptionDiv.innerHTML = `${movie.overview.substring(0,200) + '...'}`
            feature.style.backgroundImage = `url(${originalImage_path}${movie.backdrop_path})`
            feature.style.backgroundSize = 'cover'
            feature.style.backgroundPosition = 'center'
        }

        // movieElement.onclick = () => {
        //     if (movie.key){
        //         console.log(movie.key)
        //     } else {
        //         console.log("no key")
        //     }
        // }
       
        
    })


}

const getTrending = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    let movie_info = data.results
    showTrending(movie_info)

}

getTrending(trendingNow_url);

function showTrending(movies){
    trendingDiv.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement("div")
        const image = document.createElement("img")
        image.src = image_path + `${movie.backdrop_path}`

        movieElement.appendChild(image);
        trendingDiv.appendChild(movieElement)

        movieElement.onclick = () => {
            // console.log(movie.title)
            titleDiv.innerHTML = `<h2>${movie.title}</h2>`
            descriptionDiv.innerHTML = `${movie.overview.substring(0,200) + '...'}`
            feature.style.backgroundImage = `url(${originalImage_path}${movie.backdrop_path})`
            feature.style.backgroundSize = 'cover'
            feature.style.backgroundPosition = 'center'
        }
    })

}

const topRated = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    let movie_database = data.results
    showTopRated(movie_database)

}

function showTopRated(movies){
    topRatedDiv.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement("div")
        const image = document.createElement("img")
        image.src = image_path + `${movie.backdrop_path}`

        movieElement.appendChild(image);
        topRatedDiv.appendChild(movieElement);

        movieElement.onclick = () => {
            console.log(movie.title)
            titleDiv.innerHTML = `<h2>${movie.title}</h2>`
            descriptionDiv.innerHTML = movie.overview.substring(0,200) + '...'
            feature.style.backgroundImage = `url(${originalImage_path}${movie.backdrop_path})`
            feature.style.backgroundSize = 'cover'
            feature.style.backgroundPosition = 'center'
        }
    })
}

topRated(topRated_url)
