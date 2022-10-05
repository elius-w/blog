/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react"
import {useState, useEffect} from 'react'

import api from "../../services/api"
import { Link } from "react-router-dom"

const Main = ( {content} )=>{

    const [user, setUser] = useState([])

    useEffect(() =>{

        if(content){
            api.get('/user/' + content.id_user)
            .then((response)=>{
                setUser(response.data)
                console.log(response.data)
            })
        }
        

    }, [content])

    return(
 
     <>
         <div className="grid-5 pt-5 pb-3 bb-black">
            <h6 className="color-gray">{content.date}</h6>
            <h6 className="uppercase color-primary">{content.category}</h6>
            <Link to={"/post/" + content.id} className="link-title" >
                <h5 className="mt-1">{content.title}</h5>
            </Link>

            <p className="mt-2">
                {content.resume}
            </p>
            <div className="mt-2 flex-space">
                <div className="flex-start-row">
                    <div className="profile">
                        <img src={user.ImageProfile} className="profile-img" alt=""/>
                    </div>
                    <div className="ml-2">
                        <h6 className="color-primary">{user.name}{user.surname}</h6>
                        <h6 className="color-gray">{user.user}</h6>
                    </div>
                </div>
                
            </div>
        </div>
     </>
 
    )
 
 }
 
 export default Main