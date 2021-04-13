import React from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Formulario.css';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido1: '',
            apellido2: '',
            correo: '',
            pais: '',
            region:'',
            ciudad: '',
            direccion: '',
            codigopostal: '',
            telefono: ''
        };

        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myRef.current.focus();
        const token = JSON.parse(localStorage.getItem('token'));
        if (token != null) {
            this.setState({ correo: token.email });
        }
    }

    postDataHandler = () => {
        const data = {
            nombre: this.state.nombre,
            apellido1: this.state.apellido1,
            apellido2: this.state.apellido2,
            correo: this.state.correo,
            pais: this.state.pais,
            region: this.state.region,
            ciudad: this.state.ciudad,
            direccion: this.state.direccion,
            codigopostal: this.state.codigopostal,
            telefono: this.state.telefono,
            carrito: this.props.carrito,
            total: this.props.total
        };

        axios.post('https://proyectoreact2021-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json', data)
    }


    render() {
        return (
            <Form className="Formulario">
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>
                            NOMBRE
                        </Form.Label>
                        <Form.Control ref={this.myRef} value={this.state.nombre} onChange={(event) => this.setState({ nombre: event.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label>
                            PRIMER APELLIDO
                        </Form.Label>
                        <Form.Control value={this.state.apellido1} onChange={(event) => this.setState({ apellido1: event.target.value })} />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>
                            SEGUNDO APELLIDO
                        </Form.Label>
                        <Form.Control value={this.state.apellido2} onChange={(event) => this.setState({ apellido2: event.target.value })} />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>
                        E-MAIL
                        </Form.Label>
                    <Form.Control type="email" value={this.state.correo} onChange={(event) => this.setState({ correo: event.target.value })} />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>
                            PAÍS
                        </Form.Label>
                        <Form.Control value={this.state.pais} onChange={(event) => this.setState({ pais: event.target.value })} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>
                            REGIÓN
                        </Form.Label>
                        <Form.Control value={this.state.region} onChange={(event) => this.setState({ region: event.target.value })} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>
                            CIUDAD
                        </Form.Label>
                        <Form.Control value={this.state.ciudad} onChange={(event) => this.setState({ ciudad: event.target.value })} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>
                            DIRECCIÓN
                        </Form.Label>
                        <Form.Control value={this.state.direccion} onChange={(event) => this.setState({ direccion: event.target.value })} />
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Form.Label>
                            CÓDIGO POSTAL
                        </Form.Label>
                        <Form.Control value={this.state.codigopostal} onChange={(event) => this.setState({ codigopostal: event.target.value })} />
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Form.Label>
                            TELÉFONO
                        </Form.Label>
                        <Form.Control value={this.state.telefono} onChange={(event) => this.setState({ telefono: event.target.value })} />
                    </Form.Group>
                </Form.Row>
               
                   
                
                    
                <div className="BotonFormulario">
                    <Link to={{ pathname: '/agradecimiento' }} >
                        <Button onClick={() => { this.props.actualizarEstado([], [], 0); this.postDataHandler() }} variant="outline-success" >
                            CONFIRMAR PEDIDO
                    </Button>
                    </Link>
                </div>
            </Form>
        );
    }
}

export default Formulario;