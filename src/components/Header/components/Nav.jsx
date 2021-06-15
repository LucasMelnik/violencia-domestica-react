import React from 'react';
import {Link} from 'react-router-dom';
import '../components/Nav.css'


function Nav() {
    return (
        <nav>
            <ul>
                <li className="links">
                    <Link className="each-link" to="/Home">Home</Link>
                </li>
                <li>
                    <Link className="each-link" to="/Relatos">Relatos</Link>
                </li>
                <li>
                    <Link className="each-link" to="/Relatar">Relatar</Link>
                </li>
                <li>
                    <Link className="each-link" to="/Ajuda">Procurar ajuda</Link>
                </li>
                <li>
                    <Link className="each-link" to="/Contatos">Contato</Link>
                </li>

            </ul>
        </nav>
    );

}

export default Nav;
