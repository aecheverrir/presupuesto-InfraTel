import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class MaterialEditForm extends Component {

    render() {
        return (
            <form className="form form-horizontal" id="EditMaterialModal" onSubmit={this.props.editarM}>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Código: </ControlLabel>
                            <FormControl
                                type="text" placeholder="Código del proyecto."
                                name="codigo" onChange={this.props.udpateCod}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Nombre: </ControlLabel>
                            <FormControl
                                type="text" placeholder="Nombre del proyecto."
                                name="nombre" onChange={this.props.udpateNom}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Subtotal: </ControlLabel>
                            <FormControl
                                type="text" placeholder="Subtotal."
                                name="nombre" onChange={this.props.udpateSub}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>A: </ControlLabel>
                            <FormControl
                                type="text" placeholder="A."
                                name="nombre" onChange={this.props.udpateA}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>I: </ControlLabel>
                            <FormControl
                                type="text" placeholder="I."
                                name="codigo" onChange={this.props.udpateI}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>U: </ControlLabel>
                            <FormControl
                                type="text" placeholder="U."
                                name="nombre" onChange={this.props.udpateU}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>IVA: </ControlLabel>
                            <FormControl
                                type="text" placeholder="Valor IVA."
                                name="codigo" onChange={this.props.udpateIVA}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Total: </ControlLabel>
                            <FormControl
                                type="text" placeholder="Precio total del proyecto."
                                name="codigo" onChange={this.props.udpateTot}
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