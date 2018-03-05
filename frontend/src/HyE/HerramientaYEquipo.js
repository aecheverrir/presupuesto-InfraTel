import React, { Component } from "react";
import { Glyphicon, Button, Modal } from "react-bootstrap";
import "../App.css";
import HyEAdd from "./HerramientaYEquipoAdd";
import HyEEditForm from "./HerramientaYEquipoEdit";

class HyE extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hyes: [],
      show: false,
      editId: "",
      unidad: "",
      descripcion: "",
      costoUnit: 0
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.editHyE = this.editHyE.bind(this);
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
    fetch("/hye")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error");
          console.log(res.status);
        }
        return res.json();
      })
      .then((json) => {
        this.setState({
          hyes: json
        });
      });
  }

  deleteHyE(id) {
    fetch("/hye/" + id, {
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

  editHyE(evt) {
    let id = this.state.editId;
    evt.preventDefault();
    fetch("/hye/" + id, {
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
    fetch("/hye", {
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
    let hyes = this.state.hyes;
    let idEditar = this.state.editId;
    return (
      <div className="Material container-fluid">
        <h3 className="centerAlign">Herramientas Y Equipos</h3>
        <table className="table hyeTable">
          <thead>
            <tr><th>Descripción</th><th>Unidades</th><th>Costo Unitario</th><th className="textCenter">Editar</th><th className="textCenter">Borrar</th></tr>
          </thead>
          <tbody>
            {hyes.map((hye) => <tr key={hye._id}>
              <td>{hye.descripcion}</td>
              <td>{hye.unidad}</td>
              <td>{hye.costoUnit}</td>
              <td className="textCenter"><Button onClick={() => this.handleShow(hye._id)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.deleteHyE(hye._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
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
              <HyEEditForm idi={idEditar} udpateUni={this.udpateUnidades} udpateDes={this.udpateDescripcion} udpateCost={this.udpateCosto} editarHyE={this.editHyE} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <HyEAdd udpateUni={this.udpateUnidades} udpateDes={this.udpateDescripcion} udpateCost={this.udpateCosto} onAdd={this.onAdd} />
      </div>
    );
  }
}

export default HyE;
