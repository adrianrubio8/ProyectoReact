import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Agradecimiento.css'

class Agradecimiento extends React.Component {

    render() {
        return (
            <>
            <div className="Fondo">
                <div className='TextoFinalizar'>
                    <p>¡GRACIAS POR SU COMPRA!</p>
                </div>
                <div className='BotonFinalizar'>
                    <Link to={{ pathname: '/home' }} >
                        <Button variant="btn btn-outline-warning">
                            REALIZAR UN NUEVO PEDIDO
                        </Button>
                    </Link>
                </div>
             </div>
            </>
        );
    }

}

export default Agradecimiento;