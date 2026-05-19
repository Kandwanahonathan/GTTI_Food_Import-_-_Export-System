import axios from "axios";
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function SelectFood() {
    const[foodList , setFoodList] =useState([])
     const navigate=useNavigate()
    const handleSelect= async () =>{
       try {
         const res=await axios.get('http://localhost:5000/foodRoute/foodList');
         setFoodList(res.data.list) 
       } catch (err) {
          alert(err.message)
       }
    }

    useEffect(()=>{
        handleSelect()
    },[])

    const deleteFood= async(_id)=>{
        const confirm=window.confirm("are sure ?")
        if(!confirm)return
        try {
        
            await axios.delete(`http://localhost:5000/foodRoute/deleteFood/${_id}`)
            await handleSelect()
       
        } catch (err) {
             alert(err.message);
        }
    }

    return(

        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className='bg-white w-[900px] p-6 rounded-lg shadow-lg'>
                <button onClick={()=>navigate('/')} className="bg-blue-800 p-3 text-2xl font-bold text-white rounded mb-3 mt-3 hover:bg-blue-500">addFood</button>
                <table border={2} className="w-full border border-gray-300 text-center">
                    
                        <thead className="bg-blue-500 text-white p-3">
                            <tr>
                        <th className="p-2">Food_Id</th>
                        <th className="p-2">Food_Name</th>
                        <th className="p-2">Food_OwnerName</th>
                        <th className="p-2" colSpan={2}>Action</th>
                        </tr>
                        </thead>
                    
                    <tbody>
                        {foodList.map((list,index)=>(
                            <tr key={index} className="border-t mb-4">
                                <td className="p-2 ">{list.Food_Id}</td>
                                <td className="p-2 mb-4">{list.Food_Name}</td>
                                <td className="p-2 mb-4">{list.Food_OwnerName}</td>
                                <td><button className="bg-blue-800 p-2 text-white rounded mb-3 mt-3 hover:bg-blue-500"onClick={()=>navigate(`/updateFood/${list._id}`)}>update</button></td>
                                <td><button className="bg-red-800 p-2 text-white rounded mb-3 mt-3 hover:bg-red-500" onClick={()=>deleteFood(list._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}