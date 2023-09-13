import {Route, Switch} from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PeliculasTrending from "./components/PeliculasTrending/PeliculasTrending";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    
    <div>
    <Header/>
    <PeliculasTrending/>
    <Footer/>
    </div>
    
  );
 }
 
 export default App;
