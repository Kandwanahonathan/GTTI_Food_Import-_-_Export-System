
import React,{useState,useEffect} from 'react';
import axios from 'axios';
 



export default function AddFood() {
    

    const[Food_Id,setFood_Id]=useState("")
    const[Food_Name,setFood_Name]=useState("")
    const[Food_OwnerName,setFood_OwnerName]=useState("")



    async function handleAdd() {
        try {
            

            const res= await axios.post('http://localhost:5000/foodRoute/addFood',{Food_Id,Food_Name,Food_OwnerName});

            alert(res.data.message)
            setFood_Id("")
            setFood_Name("")
            setFood_OwnerName("")



        } catch (err) {
            alert( err)
        }
    }
 

    return(
        <div className='bg-green-500 flex justify-center items-center'>
            <div className=''>
                <div>
                    <input type="text" value={Food_Id} 
                    onChange={(e)=>{setFood_Id(e.target.value)}}
                    />
                    <input type="text" value={Food_Name} 
                    onChange={(e)=>{setFood_Name(e.target.value)}}
                    />
                    <input type="text" value={Food_OwnerName} 
                    onChange={(e)=>{setFood_OwnerName(e.target.value)}}
                    />
                    <button>ADD FOOD</button>
                </div>
            </div>
        </div>
    )
 



}