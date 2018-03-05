import React, { Component } from 'react';
import { Glyphicon, Button, Modal } from 'react-bootstrap';
import '../App.css';
import ProyectoAdd from "./ProyectoAdd";
import ProyectoEditForm from "./ProyectoEdit";
import Item from "../Item/Item";


class Proyecto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idProyecto: "",
      viewItems: false,
      proyectos: [],
      show: false,
      editId: "",
      codigo: 0,
      nombre: "",
      subtotal: 0,
      A: 0,
      U: 0,
      I: 0,
      IVA: 0,
      total: 0
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.editProyectos = this.editProyectos.bind(this);
    this.udpateCodigo = this.udpateCodigo.bind(this);
    this.udpateI = this.udpateI.bind(this);
    this.udpateIVA = this.udpateIVA.bind(this);
    this.udpateNombre = this.udpateNombre.bind(this);
    this.udpateSubtotal = this.udpateSubtotal.bind(this);
    this.udpateTotal = this.udpateTotal.bind(this);
    this.udpateU = this.udpateU.bind(this);
    this.udpateA = this.udpateA.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  udpateCodigo(event) {
    this.setState({ codigo: event.target.value });
  }

  udpateNombre(event) {
    this.setState({ nombre: event.target.value });
  }

  udpateA(event) {
    this.setState({ A: event.target.value });
  }

  udpateU(event) {
    this.setState({ U: event.target.value });
  }

  udpateI(event) {
    this.setState({ I: event.target.value });
  }

  udpateIVA(event) {
    this.setState({ IVA: event.target.value });
  }

  udpateTotal(event) {
    this.setState({ total: event.target.value });
  }

  udpateSubtotal(event) {
    this.setState({ subtotal: event.target.value });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(nuevoID) {
    this.setState({ show: true, editId: nuevoID });
  }

  componentDidMount() {
    fetch("/proyectos")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error");
          console.log(res.status);
        }
        return res.json();
      })
      .then((json) => {
        this.setState({
          proyectos: json
        });
      })
  }

  deleteProyecto(id) {
    fetch("/proyectos/" + id, {
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

  editProyectos(evt) {
    let id = this.state.editId;
    evt.preventDefault();
    fetch("/proyectos/" + id, {
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
    fetch("/proyectos", {
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

  mostrarItems(id) {
    this.setState({
      viewItems: !(this.state.viewItems),
      idProyecto: id
    });
  }

  render() {
    let proyectos = this.state.proyectos;
    return (
      <div className="Proyecto container-fluid">
        <h3 className="centerAlign">Proyectos</h3>
        <table className="table proyectosTable">
          <thead>
            <tr><th>Código</th>
              <th>Nombre</th>
              <th>Subtotal</th>
              <th>Total</th>
              <th className="textCenter">Editar</th>
              <th className="textCenter">Borrar</th>
              <th className="textCenter">Ver Items</th></tr>
          </thead>
          <tbody>
            {proyectos.map((p) => <tr key={p._id}>
              <td>{p.codigo}</td>
              <td>{p.nombre}</td>
              <td>{p.subtotal}</td>
              <td>{p.total}</td>
              <td className="textCenter"><Button onClick={() => this.handleShow(p._id)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.deleteProyecto(p._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.mostrarItems(p._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="plus" /></Button></td>
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
              <ProyectoEditForm udpateCod={this.udpateCodigo}
                udpateNom={this.udpateNombre}
                udpateTot={this.udpateTotal}
                udpateA={this.udpateA}
                udpateI={this.udpateI}
                udpateU={this.udpateU}
                udpateIVA={this.udpateIVA}
                udpateSub={this.udpateSubtotal}
                editarM={this.editProyectos} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <ProyectoAdd udpateCod={this.udpateCodigo}
          udpateNom={this.udpateNombre}
          onAdd={this.onAdd} />
        {this.state.viewItems && <Item idp={this.state.idProyecto} name = {this.props.nombre}/>
        }
      </div>
    );
  }
}

export default Proyecto;
