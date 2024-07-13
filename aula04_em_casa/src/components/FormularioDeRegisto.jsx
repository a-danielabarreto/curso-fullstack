import React from 'react'
import { useState } from 'react'

const FormularioDeRegisto = () => {

    const [nomeDeUsuario, setNomeDeUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confimacaoDeSenha, setConfimacaoDeSenha] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")

    function validarSenha(senha, confimacaoDeSenha) {
        if (senha !== confimacaoDeSenha) {
            alert("Senhas não correspondem")
            return false
        } 
        return true;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        if (!validarSenha(senha, confimacaoDeSenha)) {
            return
        }
        
        const objetoLiteral = {
            nomeDeUsuario,
            email,
            senha,
            endereco,
            telefone
        }
        
        const jsonParaEnviarParaOBack = JSON.stringify(objetoLiteral)
        
        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonParaEnviarParaOBack}`)
    }  

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nomeDeUsuario">Nome de usuário:</label>
                <input 
                    type="text"
                    id="nomeDeUsuario"
                    value={nomeDeUsuario}
                    onChange={(e) => setNomeDeUsuario(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="senha">Senha:</label>
                <input 
                    type="password"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="confirmacaoDeSenha">Confirmar Senha:</label>
                <input 
                    type="password"
                    id="confirmacaoDeSenha"
                    value={confimacaoDeSenha}
                    onChange={(e) => setConfimacaoDeSenha(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="endereco">Endereco:</label>
                <input 
                    type="text"
                    id="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="telefone">Telefone:</label>
                <input 
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
            </div>

            <button type="submit">Registrar</button>

        </form>
    </>
  )
}

export default FormularioDeRegisto