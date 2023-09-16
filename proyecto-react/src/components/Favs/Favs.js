import React, {Component} from 'react';
import Card from "../Card/Card"


class Favs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: []
        }
    }

    componentDidMount() {
        let arrayFavs = [];
        let recuperoStoragePelis= localStorage.getItem("favoritos");
        if (recuperoStoragePelis !== null){
            let favo = JSON.parse(recuperoStoragePelis);
            arrayFavs=favo

        }
        
        arrayFavs.map((id) => {
            let url = `https://api.themoviedb.org/3/movie/${id}?api_key=6de7dccd8404bc4ded28289d4913aa5f`
            fetch (url)
            .then(response => response.json())
                .then(fav => {
                    let Pelisagregadas = this.state.favs;
                    Pelisagregadas.push(fav);
                    this.setState({ favs: Pelisagregadas });
                })
                .catch(error => console.log(error))
        })
        }

        render() {
            return (
                <div>
                    <h2 className="titulos">Favoritos</h2>
                  
                        <section className="PeliculasPopulares">
                            {this.state.favs.map((movieFavorita, idx) => <Card key={movieFavorita + idx} datosPeliculas={movieFavorita} />
                            )}
                        </section>
                </div>
             
            )
        }
    }
    
export default Favs