/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Link } from "react-router-dom"

const Card = ( {content} )=>{

    return(
 
     <>
        <div className="grid-4 card hidden p-0">
            <div className="thumb hidden">
                <Link to={"/post/" + content.id} className="p-0">
                    <img src={content.imageUrl} alt=""/>
                </Link>
            </div>
            <div className="p-2">
                <h6 class="color-gray">{content.date}</h6>
                <Link to={"/category/" + content.category}><h6 class="uppercase color-primary">{content.category}</h6></Link>
                <Link to={"/post/" + content.id} class="link-title">
                    <h5 class="mt-1">{content.title}</h5>
                </Link>
                
                <p class="my-2">
                    {content.resume}
                </p>
                <Link to={"/post/" + content.id} class="link p-0">Ler mais</Link>
            </div>
        </div>
     </>
 
    )
 
 }
 
 export default Card