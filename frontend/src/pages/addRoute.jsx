
import React,{useState,useEffect} from 'react';
import axios from 'axios';
 



export default function AddFood() {
    
    async function handleAdd() {
        try {
            

            const res= await axios.post('http://localhost:5000')


        } catch (err) {
            
        }
    }
 

    return(
        <div></div>
    )
 



}