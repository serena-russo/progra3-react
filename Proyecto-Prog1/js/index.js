// peliculas populares
let Contenedor = document.querySelector(".PeliculasPopulares") //document representa al html cargado en el navegador y queryS capturar
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) // Api donde se intercambia info. entre aplicacions, mediante archivos de texto
       .then(function(response){
           return response.json(); // Transforma en una cadena de texto para que intercambie los datos 
})  // Se utiliza los dos parentes, luego del JSON porque es un metodo
        .then(function(datos){
             console.log(datos.results);

            for (let i = 0; i < 5; i++) {
                Contenedor.innerHTML += 
                `<article>
                    <div>
                        <img class="img-js" src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                    </div>
                    <h5>${datos.results[i].title}</h5>
                    <p>${datos.results[i].release_date}</p>
                    <a href="./detail_movie.html?id=${datos.results[i].id}">Ver mas informacion</a>
                </article>`
                
            }
            })
        .catch(function (error) {
            return error
        })

// Series mas vistas
let contenedor2= document.querySelector(".SeriesMasVistas")
fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) // Api donde se intercambia info. entre aplicacions, mediante archivos de texto
       .then(function(response){
           return response.json(); // Transforma en una cadena de texto para que intercambie los datos 
})  // Se utiliza los dos parentes, luego del JSON porque es un metodo
        .then(function(datos){
             console.log(datos.results);

            for (let i = 0; i < 5; i++) {
                contenedor2.innerHTML += 
                `<article>
                    <div>
                        <img class="img-js" src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                    </div>
                    <h5>${datos.results[i].original_name}</h5>
                    <p>${datos.results[i].first_air_date}</p>
                    <a href="./detalle_serie.html?id=${datos.results[i].id}">Ver mas informacion</a>
                </article>`
                
            }
            })
        .catch(function (error) {
            return error
        })
// Peliculas mas vistas
let contenedor3 = document.querySelector(".PeliculasMasVistas")
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`)
.then(function(response){
    return response.json(); // Transforma en una cadena de texto para que intercambie los datos 
})  // Se utiliza los dos parentes, luego del JSON porque es un metodo
 .then(function(datos){
      console.log(datos.results);

     for (let i = 0; i < 5; i++) {
         contenedor3.innerHTML += 
         `<article>
             <div>
                 <img class="img-js" src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
             </div>
             <h5>${datos.results[i].title}</h5>
             <p>${datos.results[i].release_date}</p>
             <a href="./detail_movie.html?id=${datos.results[i].id}">Ver mas informacion</a>
         </article>`
         
     }
     })
 .catch(function (error) {
     return error
 })
