import React, { Component } from 'react';
import { Glyphicon, Button, Modal } from 'react-bootstrap';
import '../App.css';
import ItemAdd from "./ItemAdd";
import ItemEditForm from "./ItemEdit"

class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      codigo: "",
      nombre: "",
      unidad: "",
      cantidad: 0,
      valorUnitarioTotal: 0,
      valorTotal: 0
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.editItems = this.editItems.bind(this);
    this.udpateCodigo = this.udpateCodigo.bind(this);
    this.udpateNombre = this.udpateNombre.bind(this);
    this.udpateUnidad = this.udpateUnidad.bind(this);
    this.udpateCantidad = this.udpateCantidad.bind(this);
    this.udpateVUT = this.udpateVUT.bind(this);
    this.udpateVT = this.udpateVT.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  udpateCodigo(event) {
    this.setState({ codigo: event.target.value });
  }

  udpateNombre(event) {
    this.setState({ nombre: event.target.value });
  }

  udpateUnidad(event) {
    this.setState({ unidad: event.target.value });
  }

  udpateVUT(event) {
    this.setState({ valorUnitarioTotal: event.target.value });
  }

  udpateVT(event) {
    this.setState({ valorTotal: event.target.value });
  }

  udpateCantidad(event) {
    this.setState({ cantidad: event.target.value });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(nuevoID) {
    this.setState({ show: true, editId: nuevoID });
  }

  componentDidMount() {
    fetch("proyectos/" + this.props.idp + "/items")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error");
          console.log(res.status);
        }
        return res.json();
      })
      .then((json) => {
        this.setState({
          items: json
        });
      });
  }

  deleteItem(id) {
    fetch("proyectos/" + this.props.idp + "/items/" + id, {
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

  editItems(evt) {
    let id = this.state.editId;
    evt.preventDefault();
    fetch("proyectos/" + this.props.idp + "/items/" + id, {
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
    fetch("proyectos/" + this.props.idp + "/items/", {
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
    let items = this.state.items;
    return (
      <div className="Item container-fluid">
        <h3 className="centerAlign">Items del Proyecto:</h3>
        <table className="table itemsTable">
          <thead>
            <tr><th>Código</th>
              <th>Nombre</th>
              <th>Unidad</th>
              <th>Cantidad</th>
              <th>Valor Unitario Total</th>
              <th>Valor Total</th>
              <th className="textCenter">Editar</th>
              <th className="textCenter">Borrar</th></tr>
          </thead>
          <tbody>
            {items.map((p) => <tr key={p._id}>
              <td>{p.codigo}</td>
              <td>{p.nombre}</td>
              <td>{p.unidad}</td>
              <td>{p.cantidad}</td>
              <td>{p.valorUnitarioTotal}</td>
              <td>{p.valorTotal}</td>
              <td className="textCenter"><Button onClick={() => this.handleShow(p._id)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
              <td className="textCenter"><Button onClick={() => this.deleteItem(p._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
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
              <ItemEditForm udpateCod={this.udpateCodigo}
                udpateNom={this.udpateNombre}
                udpateVT={this.udpateVT}
                udpateVUT={this.udpateVUT}
                udpateUni={this.udpateUnidad}
                udpateCantidad={this.udpateCantidad}
                editarM={this.editItems} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <ItemAdd udpateCod={this.udpateCodigo}
          udpateNom={this.udpateNombre}
          udpateUni={this.udpateUnidad}
          onAdd={this.onAdd} />
      </div>
    );
  }
}

export default Item;
