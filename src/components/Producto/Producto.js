import React from 'react';
import PropTypes from 'prop-types';

import './Producto.css';

import { Card, Button, ButtonGroup } from 'react-bootstrap';

class Producto extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
    }
    render() {
       
        return(
            <div className="producto">
                <Card className="CardProducto">
                    <Card.Img className="CardImagen" src={this.props.imagen} />
                    <Card.Body className="CardBody" >
                            <div className="CardTitulo">
                                <p>{this.props.nombre}</p>
                                <p>{this.props.precio} €</p>
                            </div>
                            <div className="CardBoton">
                                <ButtonGroup>
                                    <Button variant="btn btn-warning"  onClick={this.props.restarProducto}>-</Button>
                                    <Button variant="btn btn-ligth" enabled>{this.props.cantidad}</Button>
                                    <Button variant="btn btn-warning"  onClick={this.props.sumarProducto}>+</Button>
                                </ButtonGroup>
                            </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

Producto.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,
    sumarProducto: PropTypes.func,
    restarProducto: PropTypes.func
};

export default Producto;