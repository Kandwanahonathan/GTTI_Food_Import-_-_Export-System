
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
 



export default function UpdateFood() {
    

    const[Food_Id,setFood_Id]=useState("")
    const[Food_Name,setFood_Name]=useState("")
    const[Food_OwnerName,setFood_OwnerName]=useState("")
    const navigate=useNavigate()

    const {_id}=useParams()


// useEffect(() => {
//   const fetchFood = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/foodRoute/getFood/${_id}`
//       );

//       setFood_Id(res.data.Food_Id);
//       setFood_Name(res.data.Food_Name);
//       setFood_OwnerName(res.data.Food_OwnerName);

//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   fetchFood();
// }, [_id]);
    async function handleFoodUpdate() {
        try {
            

            const res= await axios.put(`http://localhost:5000/foodRoute/updateFood/${_id}`,{Food_Id,Food_Name,Food_OwnerName});

            alert(res.data.message)
            setFood_Id("")
            setFood_Name("")
            setFood_OwnerName("")

              
          
        } catch (err) {
            alert( err.message)
        }
    }
 

    return(
        <div className='bg-gray-200 min-h-screen flex justify-center items-center' >
            <div className='bg-white w-[900px] p-6 rounded-lg shadow-lg'>
                <h1 className='text-center text-blue-900 font-bold text-2xl'>Update FOOD OF COMPANY</h1>
                <div className='flex flex-col gap-4'>
                    <input type="text" value={Food_Id} 
                    onChange={(e)=>{setFood_Id(e.target.value)}}
                    placeholder='enter food Id'
                    className='mb-3 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <input type="text" value={Food_Name} 
                    onChange={(e)=>{setFood_Name(e.target.value)}}
                    placeholder='enter food name'
                    className='mb-3 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <input type="text" value={Food_OwnerName} 
                    onChange={(e)=>{setFood_OwnerName(e.target.value)}}
                    placeholder='enter food owner'className='mb-3 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'/>
                    <button onClick={async ()=>{
                        await handleFoodUpdate()
                        navigate('/foodSelect')
                        }} className='bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-700 transition duration-900'>Update FOOD</button>
                </div>
            </div>
        </div>
    )
 



}