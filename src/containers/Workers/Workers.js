import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../../components/Header/Header'
import Body from '../Body/Body'
import Footer from '../../components/Footer/Footer'

import './Workers.css'

export const Usuario = React.createContext({
  email: null
});

class Workers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <article>
          <section className="Header">
            <Header />
          </section>
          <section className="Body">
            <Body />
          </section>
          <section className="Footer">
            <Footer />
          </section>
        </article>
      </BrowserRouter>
    );
  }
}

export default Workers;