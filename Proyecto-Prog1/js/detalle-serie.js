let favorito = document.querySelector(".clicFav")
let qs = location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");
let fav = document.querySelector(".clicFav")
let apiKey = "f2acabc2f1f7dfa29f6493c2fcca003f"

const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=es`


fetch(url)
    .then(function (response) {
        return response.json();

    })
    .then(function (datos) {

        console.log(datos);

        document.querySelector('.Contenedorpadre').innerHTML = `
            <article class=d-pelicula>
                <div class="foto-pelicula-popular">
                <img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="pelicula">
                </div>
                <h5 class="titulo"> Titulo: ${datos.name}</h5>
                <p>Rating: ${datos.vote_average}</P>
                <p>Fecha de lanzamiento: ${datos.first_air_date}</p>
                <p> Duracion:${datos.number_of_seasons} temporadas</p>
                <p>Sinopsis:${datos.overview}</p>
                <p>Genero:${datos.genres[0].name}</p>
                
            `

    }).catch(function (error) {
        return error;
    })
let url_plataformas = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${apiKey}`

fetch(url_plataformas)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let plataformas = document.querySelector(".plataforma");

        if (data.results.AR == null) {
            plataformas.innerHTML += "No se encontraron plataformas en Argentina"
        } else {
            for (let i = 0; i < data.results.AR.flatrate.length; i++) {
                plataformas.innerHTML += data.results.AR.flatrate[i].provider_name + ", "
            }
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

let favoritos = []

let recuperoStorage = localStorage.getItem("favoritoss")

if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage)
}
if (favoritos.includes(id)) {
    fav.innerText = "Quitar de Favoritos";
}
fav.addEventListener("click", function (e) {
    e.preventDefault();

    if (favoritos.includes(id)) {
        let indice = favoritos.indexOf(id)
        favoritos.splice(indice, 1);
        fav.innerText = "Agregar a Favoritos"
    } else {
        favoritos.push(id)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritoss", favsToString)
})

let recomen_url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`

fetch(recomen_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.results);

        let recomArray = []
        console.log(recomArray)
        let peli_recom = document.querySelector("peli-recom")

        for (let i = 1; i < 5; i++) {
            recomArray += ` <section class="section-recom">
            <p class="btn_recomendaciones">(${data.results[i].name})</p>
            <a href= ".detail_movie.html?id=${data.results[i].id}">
                <img class="img" src="https://image.tmdb.org/t/p/w500/${data.result[i].poster_path}" alt="${data.results[i].name}">
            </a>
            
            </section>` 
        }
        peli_recom.innerHTML = recomArray

        let btn_recom = document.querySelector(".btn_recomendaciones")
        console.log(btn_recom)
        let ver_recom = document.querySelector(".peli-recom")
        
        btn_recomendaciones.addEventListener("click", function (){
        
            if (ver_recom.style.display == "none") {
                ver_recom.sytle.display == "flex"
                this.innerText = "Esconder recomendaciones";
           
            } else {
                ver_recom.style.display = "none"
                this.innerText = "Recomendaciones"
            }
        })
    
    })
.catch(function(error){
        console.log('El error es: ' + error);
    })