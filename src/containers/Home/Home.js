import React from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Producto from '../../components/Producto/Producto';
import './Home.css';
import { Usuario } from '../Workers/Workers'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            carrito: [],
            total: 0,
            comprobarEstado: true
        };
    }

    cargarProductos() {
        axios.get('https://proyectoreact2021-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
            .then(response => {
                let productos = [];
                for (let key in response.data) {
                    productos.push({
                        ...response.data[key],
                        key: key-255
                        
                    });
                }
                this.setState({ productos: productos });
            })
    }

    restarProducto = (key) => {
        let productos_aux =[...this.state.productos];
        if(productos_aux[key].cantidad > 0){
            productos_aux[key].cantidad= productos_aux[key].cantidad - 1;
            this.setState({ productos:productos_aux });
        }
        this.totalPedido();
    }
   
    sumarProducto = (key) => {
       
        let productos_aux =this.state.productos;
        productos_aux[key].cantidad= productos_aux[key].cantidad + 1;
        this.setState({ productos: productos_aux });
        this.totalPedido();
    }

    totalPedido = () => {
        
        let productos = [...this.state.productos];
        let total = 0;
        let carrito = [];
        productos.forEach(function(valor,indice,array){
            if (valor.cantidad > 0){
                total = total + valor.precio * valor.cantidad;
                carrito.push({
                    idb: indice,
                    nombre: productos[indice].nombre,
                    imagen:productos[indice].imagen,
                    cantidad: productos[indice].cantidad,
                    precio: productos[indice].precio,
                });
            }

        });
        
        this.setState({
            total: total,
            carrito:carrito,
        })
       
    }
    render() {
       
        if (this.state.comprobarEstado) {
            if (this.props.productos.length === 0) {
                this.cargarProductos()
            } else {
                this.setState({ productos: this.props.productos });
                this.setState({ carrito: this.props.carrito });
            }
            this.setState({ comprobarEstado: false });
        }

        let productos = '';
        productos = this.state.productos.map(producto => {
            return <Producto
                nombre={producto.nombre}
                imagen={producto.imagen}
                precio={producto.precio}
                cantidad={producto.cantidad}
                sumarProducto={() => this.sumarProducto(producto.key)}
                restarProducto={() => this.restarProducto(producto.key)} />;
                
                
        });
        return (
            <>
            <div className="Fondo">
                <Usuario.Consumer>
                    {({email}) => (
                        <Row className="HomeUsuario">
                            {email}
                        </Row>
                    )}
                </Usuario.Consumer>
                
                <Row>
                    {productos}
                </Row>
                <hr ></hr>
                <Row className="HomeTotal">
                    
                    <Col sm={4}className="HomeBoton" >
                            <p>Total del pedido: {this.state.total} €</p>
                    </Col>
                    <Col sm={1} className="Carrito">
                        <div className="HomeBoton" >
                            <p> 🛒</p>
                        </div>
                    </Col>
                    <Col sm={2} className="HomeBoton">
                        
                            <Link to={{ pathname: '/confirmarpedido' }} >
                                <Button onClick={() => this.props.actualizarEstado(this.state.productos, this.state.carrito, this.state.total)} variant="btn btn-outline-warning">
                                    REALIZAR PEDIDO
                                    </Button>
                            </Link>

                    </Col>
                  
                </Row>
            </div>
            </>
        );
    }
}

export default Home;