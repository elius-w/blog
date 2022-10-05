
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from "../../pages/Header"
import Footer from "../../pages/Footer"

import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
import Main from "../../componentes/Main";
import Hero from '../../componentes/Hero'
import star from '../../svg/icon-star.svg'

import api from "../../services/api";

import { useState, useEffect } from "react";

const Home = ()=>{

    const [main, setMain] = useState([])
    const [mostseen, setMostseen] = useState([])
    const [banner, setBanner] = useState([])

    useEffect(() => {

        //Requição para posts com nota star = 5
        api.get('posts?_sort=date&_limit=2&_order=desc')
        .then((response) =>{
            setMain(response.data)
        })

        //Requisição para banner
        api.get('posts?_limit=1&_order=desc')
        .then((response) =>{
            setBanner(response.data)
        })

        //Requisição
        api.get('posts?_limit=3')
        .then((response) =>{
            setMostseen(response.data)
        })

    }, [])

 

    return(

        <>
            <Header/>
            <Hero/>

            <section className="container">
                <div className="row">
                    <div className="grid-5 pt-5 pb-3">
                        <img src={star} className="icon-l" alt=""/>
                        <h2 className="mt-1">Os melhores e bem votados posts do mês.</h2>
                    
                        
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ornare urna pharetra ut ac, pellentesque.
                        </p>
                    
                    </div>
                    <div className="grid-7">


                        {

                            main.map((item) =>{
                                return <Main key={item.id} content={item}/>
                            })

                        }
                        

                    </div>
                </div>
            </section>



            <div className="bg-section">
                <section className="container">
                <h3 className="ml-2 mb-3">Mais vistos</h3>
                    <div className="row">

                    
                    {                
                        mostseen.map((item) => {
                        return <Card key={item.id} content={item} />
                        })
                    }


                    </div>
                </section>
            </div>



        {      
            banner.map((item) => {
            return <Banner key={item.id} content={item} />
            })
        }


        <Footer/>
            

        </>

    )

}


export default Home