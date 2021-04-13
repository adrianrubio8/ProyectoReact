import React from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

import Pedido from '../../components/Pedido/Pedido';

import './Pedidos.css';

class Pedidos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pedidos: [],
            detalles: [],
            eliminar: [],
            actualizar: true,
            show: false
        };
    }

    cargarPedidos() {
        axios.get('https://proyectoreact2021-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json')
            .then(response => {
                let pedidos = [];
                for (let key in response.data) {
                    pedidos.push({
                        ...response.data[key],
                        key: key
                    });
                }
                this.setState({ pedidos: pedidos });
            })
    }

    activarAlerta = (id) => {
        this.setState({ eliminar: id });
        this.setState({ show: true });
    }

    eliminarPedido = () => {
        axios.delete('https://proyectoreact2021-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + this.state.eliminar + '.json')
            .then(response => {
                this.setState({ show: false });
                this.setState({ actualizar: true });
            })
    }

    render() {
        if (this.state.actualizar) {
            this.cargarPedidos()
            this.setState({ actualizar: false });
        }

        let pedidos = [];
        const token = JSON.parse(localStorage.getItem('token'));
        if (token != null) {
            for (let indice in this.state.pedidos) {
                if (this.state.pedidos[indice].correo === token.email)
                    pedidos.push(
                        <>
                            <Pedido
                                usuario={this.state.pedidos[indice].correo}
                                referencia={this.state.pedidos[indice].key}
                                carrito={this.state.pedidos[indice].carrito}
                                total={this.state.pedidos[indice].total}
                                detalles={this.state.detalles}
                                nombre={this.state.pedidos[indice].nombre}
                                apellido1={this.state.pedidos[indice].apellido1}
                                apellido2={this.state.pedidos[indice].apellido2}
                                pais={this.state.pedidos[indice].pais}
                                region={this.state.pedidos[indice].region}
                                ciudad={this.state.pedidos[indice].ciudad}
                                direccion={this.state.pedidos[indice].direccion}
                                codigopostal={this.state.pedidos[indice].codigopostal}
                                telefono={this.state.pedidos[indice].telefono}
                                pedirDetalles={() => this.setState({ detalles: (this.state.pedidos[indice].key) })}
                                activarAlerta={() => this.activarAlerta(this.state.pedidos[indice].key)} />
                        </>
                    )
            }
            if (pedidos.length === 0) {
                pedidos = (
                    <div className='PedidosTexto'>
                        Todavía no ha realizado ningún pedido
                    </div>
                )
            }
        } else {
            pedidos = (
                <div className='PedidosTexto'>
                    Inicie sesión para ver sus pedidos
                </div>
            )
        }
        let modal = (
            <Modal show={this.state.show} className="PedidosModal">
                <Modal.Body>¿Está seguro de eliminar el pedido?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => this.setState({ show: false })}>
                        VOLVER
                    </Button>
                    <Button variant="outline-danger" onClick={() => this.eliminarPedido()}>
                        ELIMINAR
                    </Button>
                </Modal.Footer>
            </Modal>)

        return (
            <>
                {modal}
                <div className="PedidosLista">
                    {pedidos}
                </div>
            </>
        );
    }
}

export default Pedidos;