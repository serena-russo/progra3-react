let apiKey = "20342717cddddd7790a3d41e00d1854d"

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es?`

fetch(url)
  .then(function(response){
      return response.json();
  })
  .then(function(datos){
      console.log(datos.genres);
      for(let i = 0; i < 5; i++){
        document.querySelector('.generosPeliculas').innerHTML += `
          <article class="peliculas-art">
               <div class="peliculas-div">
               <a class="geneross"href="./detail-genres.html?idGenero=${datos.genres[i].id}&genero=${datos.genres[i].name}"><h2>${datos.genres[i].name}</h2></a>
               </div>
          </article>
          `;
        };
})

.catch(function(error){
      console.log("error:" + error);
      let mensaje = "Intentar en otro momento"
      alert(mensaje);
})