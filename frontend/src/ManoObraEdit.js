import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class ManoObraEditForm extends Component {
    render() {
        return (
            <form className="form form-horizontal" id="EditMoModal" onSubmit={this.props.editarMo}>
                <div className="row">
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
                    <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
                </FormGroup>
            </form>
        );
    }
}

export default ManoObraEditForm;