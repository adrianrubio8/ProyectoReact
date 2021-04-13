import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Carrito.css'

const carrito = (props) => (
    <Row className="Lista">
        <Col sm={3}>
            <img className="InfoPedidoImagen" src={props.imagen} alt={props.nombre}></img>
        </Col>
        <Col sm={3} >
            <div className="InfoPedidoNombre">
                <p>{props.nombre}</p>
            </div>
        </Col>
        <Col sm={2} >
            <div className="InfoPedidoNombre">
                <p>➪</p>
            </div>
        </Col>
        
        <Col sm={3} >
            <div className="InfoPedidoPrecio">
                <p>{props.cantidad}x{props.precio}€ = {props.total}€</p>
            </div>
        </Col>
    </Row>
    
);

carrito.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,
    total: PropTypes.number
};

export default carrito;