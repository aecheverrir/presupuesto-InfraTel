import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import './App.css';
import MaterialAdd from "./MaterialAdd";

class Material extends Component {

  constructor(props) {
    super(props);
    this.state = {
      materiales: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/materiales")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error");
          console.log(res.status);
        }
        return res.json();
      })
      .then((json) => {
        this.setState({
          materiales: json
        });
      })
  }

  render() {
    let materiales = this.state.materiales;
    return (
      <div className="Material container-fluid">
        <h3 className="centerAlign">Materiales</h3>
        <table className="table materialesTable">
          <thead>
            <tr><th>Descripción</th><th>Unidades</th><th>Costo Unitario</th><th className="textCenter">Editar</th><th className="textCenter">Borrar</th></tr>
          </thead>
          <tbody>
            {materiales.map((mat) => <tr key={mat._id}>
              <td>{mat.descripcion}</td>
              <td>{mat.unidad}</td>
              <td>{mat.costoUnit}</td>
              <td className="textCenter"><Button onClick={() => this.showEditModal(mat)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.showDeleteModal(mat)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
            </tr>)
            }
          </tbody>
        </table>
        <MaterialAdd />
      </div>
    );
  }
}

export default Material;
