import React,{ useContext} from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import Profile from './pages/Profile'
import Search from './pages/Search'

import Context from './pages/Context'


import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function PrivateRoute({children}){

    const { token } = useContext(Context)

    return token ? children : <Navigate to="/login" />

}



const Paths = ()=>{

    return(

        <>

            <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Login" element={<Login/>}/>                    
                    <Route path="/Post/:idPost" element={<Post/>}/>
                    <Route path="profile" 
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        } /> 
                    <Route path="/Search/:word_search" element={<Search/>}/>

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            
            </BrowserRouter>
        
        </>
    );

}

export default Paths