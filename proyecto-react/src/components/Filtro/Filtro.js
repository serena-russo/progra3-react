import React, {Component} from "react";

class Filtro extends Component{
    constructor(props){
        super (props);
        this.state={
            textoDelInput: ""
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
        console.log("no me mande");
        return true
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoDelInput: eventoEnElInput.target.value}, ()=> this.props.filtrado(this.state.textoDelInput))
        return true
    }
    
    render(){
        return(
            <div>
                <form action="" method="GET" onSubmit={(e)=> this.controlarEnvio(e)}>
                    <label htmlFor="">Texto a filtrar:</label>
                    <input type="text" name="filtro" onChange={(e)=> this.guardarDatosDelInput(e)} value={this.state.textoDelInput}/>
                    <button type="submit">filtrar</button>
                </form>
            </div>
        )
    }
}



export default Filtro