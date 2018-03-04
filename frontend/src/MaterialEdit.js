import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class MaterialEditForm extends Component {

    render() {
        return (
            <form className="form form-horizontal" id="EditMaterialModal" onSubmit={this.props.editarM}>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Descripción: </ControlLabel>
                            <FormControl
                                type="text" placeholder="Descripción del material."
                                name="descripcion" onChange={this.props.udpateDes}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Unidades: </ControlLabel>
                            <FormControl
                                componentClass="textarea" placeholder="Unidades del material."
                                name="unidad" onChange={this.props.udpateUni}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Costo Unitario: </ControlLabel>
                            <FormControl
                                componentClass="textarea" placeholder="Costo unitario del material."
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
export default MaterialEditForm;