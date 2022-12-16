/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../svg/blog-logo.svg'
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import api from '../../services/api';
import Context from '../../pages/Context'



const Header = ()=>{

    const [show, setShow] = useState(false)


    const initialValueForm = {
        search: ''
    }

    const {token, idUser, setToken, setIdUser} = useContext(Context)
    const [nameUser, setNameUser] = useState('')
    const [form, setForm] = useState(initialValueForm)
    const navigate = useNavigate()

    if(token && idUser){
        api.get(`/user?id=${idUser}`)
        .then((response) =>{
            setNameUser(response.data[0].name)
        })
    }

    function handleLogout(event) {
        event.preventDefault()

        setToken('')
        setIdUser('')

        navigate('/')
    }
    

    function onChange (event) {

        const { value, name } = event.target
        setForm({...form, [name]: value})

    } 

    function handleSearch(){
        navigate(`/search/${form.search}`);
      }


    return(

        <>      
            <header className="py-1 px-2">
                <nav>
                    <div className="logo">
                        <Link to="/" href=""><img src={logo} alt="" /></Link>
                    </div>
                    <ul className="menu">


                        
                        <li><Link to="/category/tecnologia" className="p-1">Tecnologia</Link></li>
                        <li><Link to="/category/games" className="p-1">Games</Link></li>
                        <li><Link to="/category/fotografia" className="p-1">Fotografia</Link></li>
                        <li><Link to="/category/cinema" className="p-1">Cinema</Link></li>                        
                        <li><Link to="/about" className="p-1">Sobre</Link></li>                        
                        <li><Link to="/contact" className="p-1">Contato</Link></li>                        

                    </ul>       
                </nav>

                <div className={`bx ${show ? 'activebx' : ''}`}
                onClick={()=> setShow(!show)}
                ></div>
                <div className="flex-start-row">
                    <div className="search">
                        <form className="flex" onSubmit={handleSearch}>
                            <input type="text" name="search" id="" placeholder="Buscar..." onChange={onChange}/>
                            <button className="btn-search"></button>
                        </form>
                        
                    </div>

                    {

                        !token
                        ? (
                        <>
                            <div className="cta-desktop ml-3">
                            <Link to="/login" className="btn">Login</Link>
                            </div>
                            <div className="cta-mobile mr-1">
                            <Link to="/login" className="link">Login</Link>
                            </div>
                        </>
                        )
                        : (
                        <>
                            <div className="cta-desktop ml-3">
                            <Link to="/profile" className="link">{nameUser}</Link>
                            <span> &nbsp; | &nbsp;</span>
                            <a href="#" onClick={handleLogout} className="link">Sair</a>
                            </div>
                            <div className="cta-mobile mr-1">
                            <Link to="/profile" className="link">{nameUser}</Link>
                            <span> &nbsp; | &nbsp;</span>
                            <a href="#" onClick={handleLogout} className="link">Sair</a>
                            </div>
                        </>
                        )

                    }

                </div>      
            </header>


            <div className="relative">
                <div className={ `menu-mobile ${show ? 'showmenu' : ''} `}>
                    <ul className="nav-mobile">
                        <li className="py-2 pl-5 pr-1">
                            <form onSubmit={handleSearch} className="flex">
                                <input type="text" name="search" placeholder="Buscar..." onChange={onChange} list="opcoes"/>                                
                                <button className="btn-search"></button>
                            </form>
                        </li>
                        <li><Link to="/category/tecnologia" className="link-menu-mobile">Tecnologia</Link></li>
                        <li><Link to="/category/games" className="link-menu-mobile">Games</Link></li>
                        <li><Link to="/category/fotografia" className="link-menu-mobile">Fotografia</Link></li>
                        <li><Link to="/category/cinema" className="link-menu-mobile">Cinema</Link></li>
                        <li><Link to="/about" className="link-menu-mobile">Sobre</Link></li>
                        <li><Link to="/contact" className="link-menu-mobile">Contato</Link></li>
                        
                    </ul>

                </div>
            </div>

        </>

    )

}


export default Header