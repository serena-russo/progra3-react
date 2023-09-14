import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PeliculasTrending from "./components/PeliculasTrending/PeliculasTrending";
import PeliculasNow from "./components/PeliculasNow/PeliculasNow";
import Buscador from "./components/Buscador/Buscador";
import ResultadoBuscador from "./components/ResultadoBuscador/ResultadoBuscador";
import Favs from "./components/Favs/Favs";
import NotFound from "./components/NotFound/NotFound";


function App() {

 
 return (
  <React.Fragment>
  
  <main>
    <Switch>
      <Route path="/" exact={true} component={Header}></Route>
      <Route path="/"  component={Buscador}></Route>
      <Route path="/PeliculasTrending" component={PeliculasTrending}></Route>
      <Route path="/Cartelera" component={PeliculasNow}></Route>
      <Route path="/Favoritos" component={Favs}></Route> 
      <Route path="/search-results/:bussscado" component={ResultadoBuscador}></Route>
      <Route path="" component={NotFound}></Route>
    </Switch>
  </main>

  <Footer />
 </React.Fragment>

 );
}
 export default App;
