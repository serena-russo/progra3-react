//Capturar qs (3 lineas)
let qs = location.search; // Obj que trae info. de toda la URL y el search busca una parte de la URL
let qsOBJ = new URLSearchParams(qs);  //  ObJ manipulable
let info = qsOBJ.get("Buscador");  // Obtiene la busqueda (nombre qs)

//DOM de "Tu resultado:""
document.querySelector(".Titulo-search").innerText = " Tu resultado fue:"+ " " + info;

// Fetch
let url = `https://api.themoviedb.org/3/search/multi?query=${info}&api_key=8316164d28e6834ac04fce13a384de41`; //Dinamismo

fetch(url)
.then(function (response) {
    return response.json() //Metodo de intercambio de datos que deriva de la notacion de OBj
})
.then(function (data) {
    console.log(data);
    //Sin resultado
    if (data.results.length == ""){
        alert("No hay resultados en tu busqueda")
    }
    else{
    //codigo
        for (let i = 0; i < data.results.length; i++) {
            document.querySelector('.container').innerHTML += `
                        <article>
                            <div>
                            <img  class="img-js" src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="Imagen">
                            </div>
                            <h5 class="Titulo-search"> ${data.results[i].original_title}</h5>
                            <a href="./detail_movie.html?id=${data.results[i].id}">Ver mas informacion</a>
                        </article>
                    `;
        }
        return data
    }
})
.catch(function (error) {
    return error
})