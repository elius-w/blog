
import React, { useState, useContext } from 'react'
import {useNavigate} from'react-router-dom'
import api from '../../services/api'
import Context from '../../pages/Context'
import Header from "../../pages/Header"
import Footer from "../../pages/Footer"

import MD5 from 'md5'

import Logo from '../../svg/blog-logo2.svg'

const initialState = {
    user: '',
    password: ''
}

const Login = ()=>{

    const [form, setForm] = useState(initialState)
    const {setToken, setIdUser} = useContext(Context)
    const [danger, setDanger] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    function onChange (event){

        const {value, name} = event.target
        setForm({ ...form, [name]: value})
        // console.log(value)        
    }

    function handleLogin (event){
        event.preventDefault()

        console.log(form.user);

        api.get(`/user?user=${form.user}`)
        .then((response) =>{

            if(response.data.length === 1){
                if(response.data[0].token === MD5(form.password).toString().toUpperCase()){

                    setDanger("");
                    setSuccess("Login feito com sucesso! Aguarde...");

                    setToken(response.data[0].token);
                    setIdUser(response.data[0].id);
                    navigate("/profile");

                }
                else{
                    setDanger("A senha não corresponde!");
                }
            }
            else{
                setDanger("Usuário não encontrado!")
            }

        })

    }
  



    return(

        <>

            <Header/>

            <section className="container">
                <div className="row flex-center">
                    <img src={Logo} className="icon-l" alt="" />
                </div>

                <div className="row">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">
                        <h6 className="text-center">Área de membros, faça o login para continuar.</h6>

                        <form onSubmit={handleLogin}>
                            <div className="mt-4">
                                <label htmlFor="user" className="mb-2"><h6>Nome de usuário</h6></label>
                                <input type="text" className="mt-2" onChange={onChange} name="user" id="" placeholder="Digite seu usuário" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="user" className="mb-2"><h6>Senha</h6></label>
                                <input type="password" className="mt-1" onChange={onChange} name="password" id="" placeholder="Digite sua senha" />
                            </div>

                            {
                                danger 
                                ? (
                                    <div className="card-danger p-2 mt-3">
                                        <h6 className="h7 color-red">{danger}</h6>
                                    </div>
                                ) : (<div></div>)
                            
                            }

                            { 
                                success 
                                ? (
                                    <div className="card-success p-2 mt-3">
                                        <h6 className="h7 color-green">{success}</h6>
                                    </div>
                                ) : (<div></div>)                            
                            }
                           

                            <button className="btn w-100 mt-2">Entrar</button>
                        </form>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>

            <Footer/>
        
        </>
    )

}

export default Login