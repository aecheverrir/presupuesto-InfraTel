import React, { Component } from 'react';
import { Glyphicon, Button, Modal } from 'react-bootstrap';
import '../App.css';
import TransporteAdd from "./TransporteAdd";
import TransporteEditForm from "./TransporteEdit"

class Transporte extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transportes: [],
      show: false,
      editId: "",
      unidad: "",
      descripcion: "",
      costoUnit: 0
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.editTransportes = this.editTransportes.bind(this);
    this.udpateCosto = this.udpateCosto.bind(this);
    this.udpateDescripcion = this.udpateDescripcion.bind(this);
    this.udpateUnidades = this.udpateUnidades.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  udpateCosto(event) {
    this.setState({ costoUnit: event.target.value });
  }

  udpateDescripcion(event) {
    this.setState({ descripcion: event.target.value });
  }

  udpateUnidades(event) {
    this.setState({ unidad: event.target.value });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(nuevoID) {
    this.setState({ show: true, editId: nuevoID });
  }

  componentDidMount() {
    fetch("/transportes")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error");
          console.log(res.status);
        }
        return res.json();
      })
      .then((json) => {
        this.setState({
          transportes: json
        });
      })
  }

  deleteTransporte(id) {
    fetch("/transportes/" + id, {
      method: "DELETE"
    }).then((res) => {
      if (res.status !== 200) {
        console.log("Error");
        console.log(res.status);
      }
      return res.json();
    })
      .then((json) => {
        alert(json.message);
      })
      .then(this.componentDidMount);
  }

  editTransportes(evt) {
    let id = this.state.editId;
    evt.preventDefault();
    fetch("/transportes/" + id, {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.status !== 200) {
        console.log("Error");
        console.log(res.status);
      }
      return res.json();
    })
      .then((json) => {
        alert(json.message);
      })
      .then(this.componentDidMount);
  }

  onAdd(evt) {
    evt.preventDefault();
    fetch("/transportes", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.status !== 200) {
        console.log("Error");
        console.log(res.status);
      }
      return res.json();
    })
      .then((json) => {
        alert(json.message);
      })
      .then(this.componentDidMount);
  }

  render() {
    let transportes = this.state.transportes;
    let idEditar = this.state.editId;
    return (
      <div className="Transporte container-fluid">
        <h3 className="centerAlign">Transportes</h3>
        <table className="table transportesTable">
          <thead>
            <tr><th>Descripción</th><th>Unidades</th><th>Costo Unitario</th><th className="textCenter">Editar</th><th className="textCenter">Borrar</th></tr>
          </thead>
          <tbody>
            {transportes.map((mat) => <tr key={mat._id}>
              <td>{mat.descripcion}</td>
              <td>{mat.unidad}</td>
              <td>{mat.costoUnit}</td>
              <td className="textCenter"><Button onClick={() => this.handleShow(mat._id)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.deleteTransporte(mat._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
            </tr>)
            }
          </tbody>
        </table>
        <div className="container-fluid">
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TransporteEditForm idi={idEditar} udpateUni={this.udpateUnidades} udpateDes={this.udpateDescripcion} udpateCost={this.udpateCosto} editarT={this.editTransportes} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <TransporteAdd udpateUni={this.udpateUnidades} udpateDes={this.udpateDescripcion} udpateCost={this.udpateCosto} onAdd={this.onAdd} />
      </div>
    );
  }
}

export default Transporte;