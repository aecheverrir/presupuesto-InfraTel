import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class ItemAdd extends Component {

    render() {
        return (
            <div className="ItemAdd container-fluid">
                <form className="form form-horizontal" id="addItemForm" onSubmit={this.props.onAdd}>
                    <div className="row">
                        <h3 className="centerAlign">Nuevo Item</h3>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Código: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Código del item."
                                    name="codigo" onChange={this.props.udpateCod}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Nombre: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Nombre del item."
                                    name="nombre" onChange={this.props.udpateNom}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Unidad: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Unidad del item."
                                    name="unidad" onChange={this.props.udpateUni}
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

export default ItemAdd;
