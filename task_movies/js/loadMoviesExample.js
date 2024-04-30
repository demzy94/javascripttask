// Menu bar on small screen

const toggleBtn = document.querySelector('.toggleBtn');
const dropdown = document.querySelector(".dropdown-Menu");

    toggleBtn.addEventListener("click",()=>{
    dropdown.classList.toggle('top-16');
})

// Needed Variable
let imgBaseUrl = 'https://image.tmdb.org/t/p/'
let imgSize = {
    normal: 'origanal',
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
    let cards = '';
    movieList.forEach((movie) => {
                    cards += `
                        <div class="max-w-44 h-[200px] pb-20">
                            <img src="${imgBaseUrl + imgSize.small}/${movie.poster_path}" alt="" class="w-48 h-20  cursor-pointer ">
                            <div class="pb-10 bg-[#ffffff13] h-20 ">
                                <h1 class="font-bold text-sm">Title: ${movie.title}</h1>
                                <h2 class="font-bold text-xs">Release Date: ${movie.release_date}</h2>
                                <h2 class="font-bold text-xs">Director: ${movie.Director}</h2>
                                <a href="movie_detail.html?id=${movie.movie_id}" class="posters"> <i class="fa-solid fa-circle-info cursor-pointer"></i></a>
                            </div>
                        </div> `
                        
        });
    
                
        document.getElementById('movie').innerHTML = cards;
        
        
    }
        
        
        
                    // <div>
                    //     <a href="movie_detail.html?id=${movie.movie_id}" class="posters">
                    //         <img src="${imgBaseUrl + imgSize.small}/${movie.poster_path}" alt="">
                    //     </a>
                    //     <p>${movie.title}</p>
                    // </div>
    // });

    // document.getElementById('images').innerHTML = cards;
// }
