import React, { Component } from 'react';
import { Glyphicon, Button, Modal } from 'react-bootstrap';
import "../App.css";
import ManoObraAdd from "./ManoObraAdd";
import ManoObraEditForm from "./ManoObraEdit"

class ManoObra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trabajadores: [],
      show: false,
      editId: "",
      unidad: "",
      descripcion: "",
      costoUnit: 0
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.editManoObra = this.editManoObra.bind(this);
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
    fetch("/mo")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error");
          console.log(res.status);
        }
        return res.json();
      })
      .then((json) => {
        this.setState({
          trabajadores: json
        });
      })
  }

  deleteManoObra(id) {
    fetch("/mo/" + id, {
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

  editManoObra(evt) {
    let id = this.state.editId;
    evt.preventDefault();
    fetch("/mo/" + id, {
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
    fetch("/mo", {
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
    let trabajadores = this.state.trabajadores;
    let idEditar = this.state.editId;
    return (
      <div className="Trabajador container-fluid">
        <h3 className="centerAlign">Trabajadores</h3>
        <table className="table manoObraTable">
          <thead>
            <tr><th>Tipo De Persona</th><th>Unidades Laborales</th><th>Costo Unitario</th><th className="textCenter">Editar</th><th className="textCenter">Borrar</th></tr>
          </thead>
          <tbody>
            {trabajadores.map((mo) => <tr key={mo._id}>
              <td>{mo.descripcion}</td>
              <td>{mo.unidad}</td>
              <td>{mo.costoUnit}</td>
              <td className="textCenter"><Button onClick={() => this.handleShow(mo._id)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.deleteManoObra(mo._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
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
              <ManoObraEditForm idi={idEditar} udpateUni={this.udpateUnidades} udpateDes={this.udpateDescripcion} udpateCost={this.udpateCosto} editarMo={this.editManoObra} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <ManoObraAdd udpateUni={this.udpateUnidades} udpateDes={this.udpateDescripcion} udpateCost={this.udpateCosto} onAdd={this.onAdd} />
      </div>
    );
  }
}

export default ManoObra;