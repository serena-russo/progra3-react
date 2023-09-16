import React from "react";
import {Route, Switch} from "react-router-dom";


import ResultadoBuscador from "./components/ResultadoBuscador/ResultadoBuscador";
import Favs from "./components/Favs/Favs";
import NotFound from "./components/NotFound/NotFound";
import Detalle from "./components/Detalle/Detalle";
import Peliculas from "./components/Peliculas/Peliculas";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PeliculasNow from "./components/PeliculasNow/PeliculasNow";
import PeliculasTrending from "./components/PeliculasTrending/PeliculasTrending";

function App() {

 
 return (
  <React.Fragment>
    <Header/>
    <br/>
    <Switch>
      <Route  path="/" exact={true} component={Peliculas}></Route>
      <Route  path="/PeliculasTrending" component={PeliculasTrending}></Route>     
      <Route  path="/PeliculasNow" component={PeliculasNow}></Route>
      <Route  path="/Favs" component={Favs}></Route>
      <Route  path="/resultado-busqueda/:buscado" component={ResultadoBuscador}></Route>
      <Route path="/detalle/:id" component={Detalle}></Route>
      <Route  path="" component={NotFound}></Route>
     </Switch>
     <br/>
     <Footer/>
 </React.Fragment>

 );
}
 export default App;
