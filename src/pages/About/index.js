/* eslint-disable jsx-a11y/anchor-is-valid */


import Header from "pages/Header"
import Footer from "pages/Footer"

import Logo from '../../svg/blog.svg'


const About = ()=>{

    return(

        <>
             <Header/>

             <section className="container flex-center">
                <div className="row mt-9">
                    <div className="grid-4">
                        <h1 className="h0">blog<span>.</span> </h1>
                        <p>
                            O Blog é um projeto desenvolvido em React.js
                            para o curso FrontPUSH. Clique abaixo para saber de
                            mais informações.
                            
                        </p>
                        <a href="" className="btn mt-2">Saiba mais</a>

                    </div>
                    <div className="grid-1"></div>
                    <div className="grid-6 flex-center">
                    <img src={Logo} className="icon-xl" alt="" />

                    </div>
                    <div className="grid-1"></div>
                </div>
            </section>

            <Footer/>
        
        </>
    )

}

export default About