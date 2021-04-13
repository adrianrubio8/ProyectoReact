import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import ConfirmarPedido from '../ConfirmarPedido/ConfirmarPedido';
import Formulario from '../Formulario/Formulario';
import Agradecimiento from '../Agradecimiento/Agradecimiento';
import Pedidos from '../Pedidos/Pedidos';
import Login from '../Login/Login'

import { Usuario } from '../Workers/Workers'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            carrito: [],
            total: 0
        };
       
    }

    setAuthentication = (auth, data) => {
        this.setState({ auth: auth });
        this.setState({ authData: data });
    }

    actualizarEstado = (productos, carrito, total) => {
        this.setState({ productos: productos });
        this.setState({ carrito: carrito });
        this.setState({ total: total });
    }

    render() {
        const token = JSON.parse(localStorage.getItem('token'));
        let valor = null
        if (token != null) {
            valor = {
                email: <div className="HomeUsuario">
                    Realice su pedido {token.email}
                </div>
            }
        } else {
            valor = {
                email: null
            }
        }

        return (
            <>
                <Redirect
                    from="/"
                    to="/home" />
                <Switch>
                    <Route
                        path="/home"
                        render={(props) =>
                            <Usuario.Provider value={valor}>
                                <Home {...props} productos={this.state.productos} carrito={this.state.carrito} actualizarEstado={this.actualizarEstado} />
                            </Usuario.Provider>
                        } />
                    <Route
                        path="/confirmarpedido"
                        render={(props) => <ConfirmarPedido {...props} productos={this.state.productos} carrito={this.state.carrito} total={this.state.total} />} />
                    <Route
                        path="/formulario"
                        render={(props) => <Formulario {...props} productos={this.state.productos} total={this.state.total} carrito={this.state.carrito} authData={this.state.authData} actualizarEstado={this.actualizarEstado} />} />
                    <Route
                        path="/agradecimiento"
                        component={Agradecimiento} />
                    <Route
                        path="/pedidos"
                        component={Pedidos} />
                    <Route
                        path="/login"
                        render={(props) => <Login {...props} setAuthentication={this.setAuthentication} />} />
                </Switch>
            </>
        );
    }
}

export default Body;