import React,{useEffect, useState} from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SelectImport() {
    const[selectImport,setSelectImport]=useState([])
    const[foods,setFoods]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        async function handleSelect() {
            try {
                const res=await axios.get('http://localhost:5000/importRoute/importList')
                setSelectImport(res.data.list)
            } catch (err) {
                console.log(err);
                alert(err.response.data.message)
                
            }
        }
        handleSelect()
    },[])
useEffect(()=>{
       async function handleImport() {
        try {
            const res=await axios.get('http://localhost:5000/foodRoute/foodList')
            setFoods(res.data.list)
        } catch (err) {
            
            alert(err.response.data.message)
        }
       }
       handleImport()
    },[])
    const deleteImport= async (_id)=>{
        const confirm=window.confirm('Are you sure')
        try {
            
            if(!confirm) return;
            await axios.delete(`http://localhost:5000/importRoute/deleteImport/${_id}`)
            await handleSelect()

        } catch (err) {
             alert(err.response.data.message)
        }
    }
    return(
        <div className="bg-gray-300 min-h-screen flex justify-center items-center ">
           <div className="rounded-2xl shadow-2xl p-8 w-[900px]">
                            <h1 className="text-center text-blue-700 text-2xl font-bold">ImportList</h1>

            <table border={2} className="border-collapse w-[90%] mt-8  mx-3 shadow-2xl rounded" >


              <thead className="">
                <tr>
                    <th className="p-3 text-blue-700  border-b-1" >Import_Id</th>
                    <th className="p-3 text-blue-700 border-b-1 " >Food_Name</th>
                    <th className="p-3 text-blue-700 border-b-1 " >Food_OwnerName</th>
                    <th className="p-3 text-blue-700 border-b-1 " >Quantity</th>
                    <th className="p-3 text-blue-700 border-b-1 " colSpan={2}>Action</th>
                </tr>
              </thead>
                 
                 <tbody className="">
                    {selectImport.map((sel,index)=>(
                        <tr key={index} className="">
                            <td className="p-4 gap-4 p-3 mb-3 border-b-1 ">{sel.I_Id}</td>
                            <td className="p-4 gap-4 p-3 mb-3 border-b-1">{sel.Food_Id?.Food_Name}</td>
                            <td className="p-4 gap-4 p-3 mb-3 border-b-1">{sel.Food_OwnerName}</td>
                            <td className="p-4 gap-4 p-3 mb-3 border-b-1">{sel.Quantity}</td>
                            <td className="border-b-1">
                      <button className="p-2 mb-3 bg-teal-700 rounded text-white mx-2" onClick={()=>{navigate(`/importUpdate/${sel._id}`)}}>update</button>
                            <button className="p-2 mb-3 bg-red-700 rounded text-white mx-2" onClick={()=>{
                                deleteImport(sel._id)
                            }}>delete</button> 
                            </td>
      
                        </tr>
                    ))}
                 </tbody>

            </table>
            </div>

        </div>
    )
}