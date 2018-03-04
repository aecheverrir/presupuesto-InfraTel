import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './App.css';

class MaterialAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unidad: "",
            descripcion: "",
            costoUnit: 0
        }
        this.udpateCosto = this.udpateCosto.bind(this);
        this.udpateDescripcion = this.udpateDescripcion.bind(this);
        this.udpateUnidades = this.udpateUnidades.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(evt) {
        evt.preventDefault();
        fetch("http://localhost:8080/materiales", {
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

    render() {
        return (
            <div className="MaterialAdd container-fluid">
                <form className="form form-horizontal" id="addMaterialForm" onSubmit={this.onAdd}>
                    <div className="row">
                        <h3 className="centerAlign">Nuevo Material</h3>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Descripción: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Descripción del material."
                                    name="descripcion" onChange={this.udpateDescripcion}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Unidades: </ControlLabel>
                                <FormControl
                                    componentClass="textarea" placeholder="Unidades del material."
                                    name="unidad" onChange={this.udpateUnidades}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Costo Unitario: </ControlLabel>
                                <FormControl
                                    componentClass="textarea" placeholder="Costo unitario del material."
                                    name="costoUnit" onChange={this.udpateCosto}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <FormGroup>
                        <Button type="submit" bsStyle="success" bsSize="large" block>Crear</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default MaterialAdd;
