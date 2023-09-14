import React, { Component } from 'react';
import Card from "../Card/Card"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Favs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: []
        }
    }

    componentDidMount() {
        let arrayFavs = [];
        let getStoragePelis = localStorage.getItem('arrayFavs')
        if (getStoragePelis !== null) {
            let toArray = JSON.parse(getStoragePelis);
            arrayFavs = toArray
        }
        
        arrayFavs.map((id) => {
            let url = ``
            fetch (url)
            .then(response => response.json())
                .then(fav => {
                    let listadoPelis = this.state.favs;
                    listadoPelis.push(fav);
                    this.setState({ favs: listadoPelis });
                })
                .catch(error => console.log(error))
            return true
        })
        }

        render() {
            return (
                <React.Fragment>
                    <h2 className="">Favoritos</h2>
                    <section className="">
                        <div className="">
                            {this.state.favs.map(
                                (movieFavorita, idx) => <Card key={movieFavorita + idx} datosPeli={movieFavorita} />
                            )}
                        </div>
                    </section>
                </React.Fragment>
            )
        }
    }
    
    export default Favs