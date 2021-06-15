import React from 'react';

import Header from '../components/Header/Header';
import Titulo from '../components/Relatos/Titulo';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login(){
    return(
        <div className="login">
            <Header />
            <center><Titulo titulo="Login"/></center>
            <div className="login2">
                <form method="post">
                    <input name="usuario" type="email" placeholder="email@email.com" required/>
                    <input type="password" name="senha" placeholder="*********" required/>
                    <br/>
                    <span className={"psw"}><Link  to={Login}>Esqueci minha senha</Link></span>
                    <button type="submit">Login</button>

                </form>
            </div>

        </div>
    )}
export default Login;