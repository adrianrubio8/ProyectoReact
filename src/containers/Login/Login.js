import React from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.myRef = React.createRef();
    }

    
    postLoginHandler = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqt4PVaI1ziPaAaGZn0Ee3wlij0WmWMX8', authData)
            .then(response => {
                localStorage.setItem('token', JSON.stringify(response.data));
                this.props.setAuthentication(true, response.data);
                window.location.reload(false);
            })
            .catch(err => {
                this.props.setAuthentication(false, {});
            });
    }

    postRegisterHandler = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqt4PVaI1ziPaAaGZn0Ee3wlij0WmWMX8', authData)
            .then(response => {
                localStorage.setItem('token', JSON.stringify(response.data));
                this.props.setAuthentication(true, response.data);
                window.location.reload(false);
            })
            .catch(err => {
                this.props.setAuthentication(false, {});
            });
    }

    render() {
        return (
            <Form className="Login">
                
                <Form.Group className="ancho">
                    <Form.Label>
                        E-MAIL
                    </Form.Label>
                    <Form.Control  ref={this.myRef} value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                </Form.Group>

                <Form.Group className="ancho">
                    <Form.Label>
                        PASSWORD
                        </Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                    <Form.Text >
                        La contraseña debe de tener al menos seis caracteres
                    </Form.Text>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} md="2">
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <div className="LoginBoton">
                            <Button onClick={this.postLoginHandler} variant="btn btn-outline-warning" >
                                INICIAR SESIÓN
                            </Button>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <div className="LoginBoton">
                            <Button onClick={this.postRegisterHandler} variant="btn btn-outline-warning" >
                                REGISTRARSE
                            </Button>
                        </div>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}

export default Login;