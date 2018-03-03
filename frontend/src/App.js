import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      materiales : []
    };
  }

  componentDidMount(){
    fetch("http://localhost:8080/materiales")
    .then((res)=>{
      if(res.status!==200){
        console.log("Error");
        console.log(res.status);
      }
      return res.json();
    })
    .then((json)=>{
      this.setState({
        materiales:json
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container-fluid">
            <div className="row">
              <p className="col-sm-2">s</p>
              <h1 className="App-title col-sm-6 text-center">Presupuesto InfraTel</h1>
              <nav className="col-sm-4 text-right">
                Proyectos
                  </nav>
            </div>
          </div>
        </header>
        <div>
        {this.state.materiales.map(
          (f) => f.descripcion
        )}
        </div>
      </div> 
    );
  }
}

export default App;
