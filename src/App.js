import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Pelicula from "./screens/DetallePelicula/DetallePelicula";
import Serie from "./screens/DetalleSerie/DetalleSerie";
import VerTodasPeliculas from "./screens/VerTodasPeliculas/VerTodasPeliculas";
import VerTodasSeries from "./screens/VerTodasSeries/VerTodasSeries";
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/favoritos" component={Favoritos} />
          <Route path="/pelicula/:id" component={Pelicula} />
          <Route path="/serie/:id" component={Serie} />
          <Route path="/todas-las-peliculas" component={VerTodasPeliculas} />
          <Route path="/todas-las-series" component={VerTodasSeries} />
          <Route path="/resultado-busqueda" component={ResultadoBusqueda} />
          <Route path="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
