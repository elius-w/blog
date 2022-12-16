/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from "react-router-dom"

const Recent = ( {content} )=>{


    return(        
 
     <>
                  

        <div className="grid-4 hidden p-0 bl-black">
            <div className="row">
                <div className="grid-nobreak-3">
                    <h6 class="color-gray">{content.date}</h6>
                </div>
                <div className="grid-nobreak-9">
                    <div>
                        <Link to={"/category/" + content.category}><h6 class="uppercase color-primary">{content.category}</h6></Link>
                        <Link to={"/post/" + content.id} class="link-title">
                            <h6 class="mt-1">{content.title}</h6>
                        </Link>
                        
                        <p class="my-2">
                            {content.resume}
                        </p>
                        
                        <Link to={"/post/" + content.id} class="link p-0">Ler mais</Link>
                    </div>
                </div>
            </div>
        </div>               



     </>
 
    )
 
 }
 
 export default Recent