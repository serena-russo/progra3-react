// Acceso Query String
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let id = objetoQueryString.get('idGenero');
console.log(id);
let genero = objetoQueryString.get(`genero`);
console.log(genero);
 
//API Key
let apiKey = "20342717cddddd7790a3d41e00d1854d"
 
// Fetch
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&with_genres=${id}`)
  .then(function(response){
      return response.json();
  })
  .then(function(datos){
      console.log(datos);
      console.log(datos.genres);
      for(let i = 0; i < 8; i++){
          document.querySelector('.detalleGenero').innerHTML += `
          <article>
              <div>
              <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
              </div>
              <h2>${datos.results[i].title}</h2>
              <a href="detail_movie.html?id=${datos.results[i].id}">Ver mas informacion</a>
          </article>
          `;
      };
})
 
.catch(function(error){
    console.log("error:" + error);
})