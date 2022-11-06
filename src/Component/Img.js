import axios  from "axios";
import 'semantic-ui-css/semantic.min.css'
import { useState,useEffect } from "react";
import React from 'react'
import {Image} from '@chakra-ui/react'


function Img() {
// const [item , setItem] = useState([]);

    const [get,setget] = useState ([]);
    useEffect ( () => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2d6b3291586411f85a61201ca446cbb8&with_genres=16') 
        .then ( (res) => {
            setget(res.data.results);
          console.log(res.data.results);
        })
      }, []);
      return (
        <div className='cards'>
        {get.map ( (item) => {
          return (
            
              <div className='Container'>
                <div className='image-container'>
                  <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}` } />
                </div>
                <div className='title-container'>
                  <h2   > {item.original_title}</h2></div>
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