import React from 'react'
import Header from '../components/Header/Header'
import Titulo from '../components/Relatos/Titulo'
import {useState} from 'react'
import '../components/Relatar/Relatar.css'
import listRelatos from '../components/Relatar/data/Relatar.json'


function Relatar() {
    /*variaveis*/
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [relato, setRelato] = useState("")
    const [relatos, setRelatos] = useState(listRelatos)

    function handleSubmit(e) {

        const novoRelato = {
            nome: nome,
            email: email,
            relato: relato
        }

        setRelatos([...relatos, novoRelato])

        e.preventDefault()

        console.log(relatos)
    }

    const handleChangeTitulo = (e) => {
        setNome(e.target.value);
    }

    
    const handleChangeDescricao = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeRelato = (e) => {
        setRelato(e.target.value);
    }


    return (
        <div>
            <Header/>
            <Titulo titulo="COMPARTILHE SUA EXPERIÊNCIA" text="Compartilhe sua experiência para que,
            por meio de seu relato, outras mulheres se intiguem a procurar ajuda para sair dessa situação.
            Seu relato pode ser publicado anonimante, seu colocar sua identidade em risco."/>
            <form onSubmit={handleSubmit}>
                <div className="relatar-page">
                    <div className="form-relato">
                        <label className="form-nome inpt">
                            Titulo:
                            <input id="nome" type="text" onChange={handleChangeTitulo} value={nome}/>
                        </label>
                        <label className="form-email inpt">
                            Descrição:
                            <input id="e-mail" type="text" onChange={handleChangeDescricao} value={email}/>
                        </label>
                        <label className="form-relatar">
                            Relato:
                            <textarea cols="96" rows="10" type="text" onChange={handleChangeRelato} value={relato}/>
                        </label>
                        <div className="chbox-form">
                            <input type="checkbox"/>
                            <p>Publicar relato anonimamente (Se essa opção estiver marcada, seus dados pessoais não
                                serão publicados junto ao relato).</p>
                        </div>
                        <input type="submit"/>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Relatar;