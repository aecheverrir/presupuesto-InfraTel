import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Proyecto from "./Proyecto/Proyecto";
import Material from './Material/Material';
import ManoObra from "./ManoObra/ManoObra";
import Transporte from "./Transporte/Transporte";
import HyE from "./HyE/HerramientaYEquipo";

const Home = () => {
    return (
      <div className="col-md-12">
        <h1>Sistema de presupuestación de proyectos para Infratel</h1>
        <ul>
          <li>Si desea modificar la base de datos, de click en elemento que desea modificar del menú</li>
          <li>Si desea modificar o crear algún proyecto, de click en Proyectos en el menú</li>
        </ul>
      </div>
    );
  };

ReactDOM.render(<div>
    <App />
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/proyectos" component={Proyecto} />
        <Route path="/materiales" component={Material} />
        <Route path="/mo" component={ManoObra} />
        <Route path="/transportes" component={Transporte} />
        <Route path="/hye" component={HyE} />
      </div>
  </Router>
    </div>, document.getElementById('root'));
registerServiceWorker();
