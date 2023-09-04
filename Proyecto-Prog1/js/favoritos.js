let RecuperoStorage = localStorage.getItem("favoritos");    
/* llega en un json */ 

let favoritos = JSON.parse(RecuperoStorage)
/* lo convierto en un dato manipulable para jv (array) */

let section = document.querySelector(".section")

let apiKey = "f2acabc2f1f7dfa29f6493c2fcca003f"

let PersonajeFavoritos = '';

if (favoritos == null || favoritos.length == 0) {
/*si no hay favoritos*/
section.innerHTML = '<strong class="NoFav"> NO hay peliculas en favoritos</strong>'
} 

else {
    for (let i = 0; i < favoritos.length; i++) {
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${apiKey}&language=es`
    
    fetch(url)

    .then(function (response) {
    return response.json()
    })

    .then(function (data) {
    console.log(data);
        PersonajeFavoritos += `<article>
                                <div>
                                <a href="./detail_movie.html?id=${data.id}"><img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.original_title}"></a> 
                                </div>
                                <h5 class="Titulo-search">Titulo: ${data.original_title}</h5>
                                <a href="./detail_movie.html?id=${data.id}">Ver mas informacion</a>
                              </article>`
        
    section.innerHTML = PersonajeFavoritos
    
    return data   
    }   
    )

    .catch(function (error) {
    console.log(error);
    return error
    })
    }
    
}



/* Lo mismo con serie */
let RecuperoStoragex = localStorage.getItem("favoritoss");    
/* llega en un json */ 

let favoritosx = JSON.parse(RecuperoStoragex)
/* lo convierto en un dato manipulable para jv (array) */

let sectionx = document.querySelector(".section2")

let apiKeyx = "f2acabc2f1f7dfa29f6493c2fcca003f"

let PersonajeFavoritosx = '';

if (favoritosx == null || favoritosx.length == 0) {
/*si no hay favoritos*/
sectionx.innerHTML = '<strong class="NoFav"> NO hay series en favoritos</strong>'
} 

else {
    for (let u = 0; u < favoritosx.length; u++) {
    let urls = `https://api.themoviedb.org/3/tv/${favoritosx[u]}?api_key=${apiKeyx}&language=es`
    
    fetch(urls)

    .then(function (responsex) {
    return responsex.json()
    })

    .then(function (datas) {
    console.log(datas);
        PersonajeFavoritosx += `<article>
                                <div>
                                <a href="./detalle_serie.html?id=${datas.id}"><img src="https://image.tmdb.org/t/p/w342${datas.poster_path}" alt="${datas.original_title}"></a> 
                                </div>
                                <h5 class="Titulo-search">Titulo: ${datas.original_name}</h5>
                                <a href="./detalle_serie.html?id=${datas.id}">Ver mas informacion</a>
                              </article>`
        
    sectionx.innerHTML = PersonajeFavoritosx
    
    return datas   
    }   
    )

    .catch(function (errorx) {
    console.log(errorx);
    return errorx
    })
    }
    
}