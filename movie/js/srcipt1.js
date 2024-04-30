


// Needed Variable
let imgBaseUrl = 'https://image.tmdb.org/t/p/'
let imgSize = {
    normal: 'original',
    small: 'w500'
}

// Get Movie Data into an array
let movies = [];
fetch('database/movies.json')
.then((res) => res.json())
.then((data) => {
    loadMovies(data)
})

let loadMovies = (movieList) => {
    movies= movieList
    // let cards = '';
    // movieList.forEach((movie) => {
    //     cards += `
    //                 <div class="bg-red-600">
    //                     <img src="${imgBaseUrl + imgSize.small}/${movie.poster_path}" alt="" class="w-64 rounded-xl">
    //                     <div>
    //                         <h1 class="font-bold text-lg">${movie.title}</h1>
    //                         <h2>${movie.ove}</h2>
    //                         <a href = "moviedetails.html?id=${movie.movie_id}"><i class="fa-solid fa-circle-info"></i></p>
    //                     </div>
    //                 </div>`
    // });

            
    // document.getElementById('movie').innerHTML = cards;
}
document.getElementById('loadMovies').addEventListener('click', () => {
    console.log(movies);
})


