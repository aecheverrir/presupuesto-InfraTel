import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class ItemEditForm extends Component {

    render() {
        return (
            <form className="form form-horizontal" id="EditMaterialModal" onSubmit={this.props.editarM}>
                <div className="row">
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
                                type="text" placeholder="Subtotal."
                                name="unidad" onChange={this.props.udpateUni}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Cantidad: </ControlLabel>
                            <FormControl
                                type="text" placeholder="A."
                                name="cantidad" onChange={this.props.udpateCantidad}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Valor Unitario Total: </ControlLabel>
                            <FormControl
                                type="text" placeholder="I."
                                name="valorUnitarioTotal" onChange={this.props.udpateVUT}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-12">
                        <FormGroup>
                            <ControlLabel>Valor Total: </ControlLabel>
                            <FormControl
                                type="text" placeholder="U."
                                name="valorTotal" onChange={this.props.udpateVT}
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
export default ItemEditForm;