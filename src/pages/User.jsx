import React from 'react'
import '../styles/User.css'
import Titulo from '../components/Relatos/Titulo';
import Header from '../components/Header/Header';


function User(){
    return(      
        <div classname="userX">
            <Header/>
            <center><Titulo titulo="Cadastrar Usuários"/></center>
            <div classname="usr">
                <form>
                    <label className="infs">
                        Nome completo:
                        <input type="text" birth="birth" />
                        Data de nascimento:
                        <input type="text" phone="phone"placeholder="xx/xx/xxx" required/>
                        Telefone:
                        <input type="text" email="email"/>
                        Email:
                        <input type="text" email="email" />
                        Endereço:
                        <input type="text" address="address"/>
                    </label>
                    <button type="submit">Concluir</button>
                </form>
            </div>
            

            </div>
    )

    
}
export default User;