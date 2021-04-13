import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'

class Header extends React.Component {

    logoutUser = () => {
        localStorage.removeItem('token');
        window.location.reload(false);
    }

    render() {
        return (
            <>
            <div className="fondo">
                <Row>
                    <div className="cabecera">
                        <h1>COMIC WORLD</h1>
                        
                    </div>
                </Row>
                <Row>
                    <Col >
                        <div className="cabeceraBoton">
                            <Link to={{ pathname: '/home' }} >
                                <Button variant="btn btn-outline-warning">HOME</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="cabeceraBoton">
                            <Link to={{ pathname: '/pedidos' }} >
                                <Button variant="btn btn-outline-warning"> MIS PEDIDOS</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="cabeceraBoton">
                            <Link to={{ pathname: '/login' }} >
                                <Button variant="btn btn-outline-warning">INICIAR SESIÓN</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="cabeceraBoton">
                            <Button onClick={() => this.logoutUser()} variant="btn btn-outline-warning">SALIR</Button>
                        </div>
                    </Col>
                    
                </Row>
                <hr></hr>
            </div>
            
            </>
        )
    }
}

export default Header;