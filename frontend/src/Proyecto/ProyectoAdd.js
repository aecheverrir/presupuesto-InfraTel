import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class ProyectoAdd extends Component {

    render() {
        return (
            <div className="ProyectoAdd container-fluid">
                <form className="form form-horizontal" id="addProyectoForm" onSubmit={this.props.onAdd}>
                    <div className="row">
                        <h3 className="centerAlign">Nuevo Proyecto</h3>
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
                    </div>
                    <FormGroup>
                        <Button type="submit" bsStyle="success" bsSize="large" block>Crear</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default ProyectoAdd;
