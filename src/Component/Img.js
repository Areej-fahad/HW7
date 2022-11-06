import axios  from "axios";
import 'semantic-ui-css/semantic.min.css'
import { useState,useEffect } from "react";
import React from 'react'


function Img() {
    const Arr = [{}];   

    const [get,setget] = useState ("");
    useEffect ( () => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2d6b3291586411f85a61201ca446cbb8&with_genres=28') 
        .then ( (res) => {
            setget(res.data.results);
          console.log(res);
        })
      }, []);
      return (
        <div className='cards'>
        {Arr.map ( (item) => {
          return (
            
              <div className='Container'>
                <div className='image-container'>
                  <image key={item.id} src={ `https://image.tmdb.org/t/p/w500` } />
                </div>
                <div className='title-container'>
                  <h2   > {item.backdrop_path}</h2></div>
                <div className='btn-contener'>
                  <button >Delete</button>
                  <button >Update</button>
                </div>
              </div>
            
         )
        })}
        </div>
      )
    }
    
export default Img