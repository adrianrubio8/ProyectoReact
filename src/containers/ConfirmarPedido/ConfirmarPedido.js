import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Carrito from '../../components/Carrito/Carrito';

import './ConfirmarPedido.css'

class ConfirmarPedido extends React.Component {
    render() {
        let confirmacion = []
        let botones = []
      
        if (this.props.total !== 0) {
            for (let key in this.props.carrito) {    
                    let total = this.props.carrito[key].precio * this.props.carrito[key].cantidad
                    confirmacion.push(
                        <div className='ConfirmacionLista'>
                            <Carrito
                                nombre={this.props.carrito[key].nombre}
                                imagen={this.props.carrito[key].imagen}
                                precio={this.props.carrito[key].precio}
                                cantidad={this.props.carrito[key].cantidad}
                                total={total} />
                        </div>
                    )
                
            }
            confirmacion.push(
                <div className='Total'>
                    <p>Total del pedido: {this.props.total}€</p>
                </div>
            )

            botones =
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={4} className='Boton'>
                            <Link to={{ pathname: '/home' }} >
                                <Button variant="outline-danger">
                                    VOLVER
                                    </Button>
                            </Link>
                    </Col>
                    <Col sm={4} className='Boton'>
                            <Link to={{ pathname: '/formulario' }} >
                                <Button variant="outline-success">
                                    CONTINUAR
                                </Button>
                            </Link>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
        } else {
            confirmacion =
                <div className='Texto'>
                    Selecciona por favor algún producto
                </div>
            botones =
                <div className='Boton'>
                    <Link to={{ pathname: '/home' }} >
                        <Button variant="outline-danger">
                            VOLVER
                        </Button>
                    </Link>
                </div>
        }
        return (
            <>
            <div className="Fondo">
                <div>
                    {confirmacion}
                </div>
                <div>
                    {botones}
                </div>
            </div>
            </>
        );
    }

}

export default ConfirmarPedido;