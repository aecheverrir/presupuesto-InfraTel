import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class ManoObraAdd extends Component {
    render() {
        return (
            <div className="MoAdd container-fluid">
                <form className="form form-horizontal" id="addMoForm" onSubmit={this.props.onAdd}>
                    <div className="row">
                        <h3 className="centerAlign">Nuevo Trabajador</h3>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Tipo de persona: </ControlLabel>
                                <FormControl
                                    type="text" placeholder="Tipo de trabajador."
                                    name="descripcion" onChange={this.props.udpateDes}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Unidades: </ControlLabel>
                                <FormControl
                                    componentClass="textarea" placeholder="Unidades de jornada laboral."
                                    name="unidad" onChange={this.props.udpateUni}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-12">
                            <FormGroup>
                                <ControlLabel>Costo Unitario: </ControlLabel>
                                <FormControl
                                    componentClass="textarea" placeholder="Costo unitario del trabajador."
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

export default ManoObraAdd;