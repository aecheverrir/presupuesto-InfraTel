import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class HyEEditForm extends Component {
    render() {
        return (
            <form className="form form-horizontal" id="EditHyEModal" onSubmit={this.props.editarHyE}>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Descripción: </ControlLabel>
                            <FormControl
                                type="text" placeholder="Descripción de la herramienta o equipo."
                                name="descripcion" onChange={this.props.udpateDes}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Unidades: </ControlLabel>
                            <FormControl
                                componentClass="textarea" placeholder="Unidades de la herramienta o equipo."
                                name="unidad" onChange={this.props.udpateUni}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Costo Unitario: </ControlLabel>
                            <FormControl
                                componentClass="textarea" placeholder="Costo unitario de la herramienta o equipo."
                                name="costoUnit" onChange={this.props.udpateCost}
                            />
                        </FormGroup>
                    </div>
                </div>
                <FormGroup>
                    <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
                </FormGroup>
            </form>
        );
    }
}

export default HyEEditForm;