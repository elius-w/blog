/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom"

const Banner = ( {content} )=>{

   return(

    <>
        <section className="container">
            <div className="img-banner hidden">
                <img src={content.imageUrl} alt=""/>
            </div>
            <div className="row mt-3">
                <h6 className="color-gray text-center">{content.date}</h6>
                <h6 className="uppercase color-primary text-center">{content.category}</h6>
                <Link to={"/post/" + content.id} className="link-title">
                    <h2 className="mt-1 text-center">{content.title}</h2>
                </Link>
                
                <p className="my-2 text-center">
                    {content.resume}
                </p>
                <div className="flex-center">
                    <Link to={"/post/" + content.id} className="link p-0">Ler mais</Link>
                </div>
                
            </div>
        </section>
    </>

   )

}

export default Banner