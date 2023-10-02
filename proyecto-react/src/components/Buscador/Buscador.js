import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Buscador extends Component {
    constructor(props){
        super(props);
        this.state ={
            textoInputForm: ''
        }
    }

    evitarSubmit(evento){
        evento.preventDefault();
        console.log("No me mande :-(");
    }

    guardarDatosInput(eventoInput) {
        this.setState({
            textoInputForm: eventoInput.target.value
        })

        //console.log(this.setState.textoInputForm)

        return true
    }

    render (){
        return(
            <div>
                <form className= "busqueda" method="GET" onSubmit={(evento) => this.evitarSubmit(evento)}>
                    <input className="cuadro_buscar" type="text" name="Buscador" placeholder=" Iniciar busqueda" onChange={(e)=> this.guardarDatosInput(e)} value={this.setState.textoInputForm}/>
                    <Link to = {`/resultado-busqueda/${this.state.textoInputForm}`}><button className="" type="submit">Search</button></Link>
                </form>
            </div>
        ) //
    }

}

export default Buscador
