import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class TransporteAdd extends Component {

    render() {
        return (
            <div className="TransporteAdd container-fluid">
                <form className="form form-horizontal" id="addTransporteForm" onSubmit={this.props.onAdd}>
                    <div className="row">
                        <h3 className="centerAlign">Nuevo Transporte</h3>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Descripción: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Descripción del transporte."
                                    name="descripcion" onChange={this.props.udpateDes}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Unidades: </ControlLabel>
                                <FormControl
                                    componentClass="textarea" placeholder="Unidades del transporte."
                                    name="unidad" onChange={this.props.udpateUni}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Costo Unitario: </ControlLabel>
                                <FormControl
                                    componentClass="textarea" placeholder="Costo unitario del transporte."
                                    name="costoUnit" onChange={this.props.udpateCost}
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

export default TransporteAdd;