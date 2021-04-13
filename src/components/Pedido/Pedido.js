import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';

import './Pedido.css';

class Pedido extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detalles: []
        };
    }
    render() {
        let carrito = []
        let detalles = null
        for (let key in this.props.carrito) {
            carrito.push(
                <div>    
                      {this.props.carrito[key].nombre}: {this.props.carrito[key].cantidad} ({this.props.carrito[key].precio } €)
                </div>
            )
        }
        
        if (this.props.detalles === this.props.referencia) {
            detalles =
                <>
                    <Row >
                        <Col>
                            <p>Nombre: {this.props.nombre}</p>
                            <p>Apellidos: {this.props.apellido1} {this.props.apellido2} </p>
                            
                        </Col>
                        <Col>
                            <p>País: {this.props.pais}</p>
                            <p>Ciudad: {this.props.ciudad}</p>
                            <p>Direccion: {this.props.direccion}</p>
                        </Col>
                    </Row>

                </>
        }

        return (
            <Row className="Pedido">
                <Col sm={10}>
                        <div className="PedidoDatos">
                            <p> INFO PEDIDO: {this.props.referencia}</p>
                        </div>
                        <hr></hr>
                         
                         <Row className="PedidoDatos">
                             <Col >
                                {carrito}
                             </Col>
                             <Col className="Flecha">
                                ➪
                             </Col>
                             <Col >
                                <p>Total: {this.props.total} €</p>
                             </Col>
                         </Row>
                        <hr></hr>
                        <div onClick={this.props.pedirDetalles}>
                            <div className="PedidoDatos">
                                <p> HAZ CLICK PARA MÁS DETALLES</p>
                             </div>
                        </div>
                        <div >
                            {detalles}
                        </div>
                    
                </Col>
                <Col sm={2}>
                    <div className="Boton">
                        <Button variant="outline-danger" onClick={this.props.activarAlerta}  alt="borrar">
                         BORRAR
                        </Button>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Pedido;