


import Header from '../Header';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import React,{ useEffect, useState } from 'react';
import Card from 'componentes/Card';

const Category = () => {

  const { idCategory } = useParams();
  const [mostseen, setMostseen] = useState([])

  // console.log(idCategory);

  useEffect(() => {

    if(idCategory){

      api.get(`/posts?category=${idCategory}`)
      .then((response) =>{
        setMostseen(response.data)

        console.log(response.data);

      })

    }   
    
  }, [idCategory])
  

    return (
        <>
          <Header />
          
          <div className="bg-section">
                <section className="container">
                <h5 className="ml-2 mb-3 uppercase">{idCategory}</h5>
                    <div className="row">
                    
                    {                
                        mostseen.map((item) => {
                        return <Card key={item.id} content={item} />
                        })
                    }

                    </div>
                </section>
            </div>

          <Footer />
        </>
      );
}
  
export default Category;