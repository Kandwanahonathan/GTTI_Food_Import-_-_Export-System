import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function UpdateExport() {
    
    const [E_Id,setE_Id]=useState("")
    const [Food_Id,setFood_Id]=useState("")
    const [ExportDate,setExportDate]=useState("")
    const [Quantity,setQuantity]=useState("")
    const [foods, setfoods]=useState([])
    const navigate=useNavigate()


   async function handleUpdateExport() {
        try {
            
            const res=await axios.put(`http://localhost:5000/exportRoute/updateExit/${_id}`,{E_Id,Food_Id,ExportDate,Quantity});
            setE_Id("")
            setFood_Id("")
            setExportDate("")
            setQuantity("")
            alert(res.data.message)

        } catch (err) {
            alert(err.response.data.message)
        }
    }

    
       async function handleImport() {
        try {
            const res=await axios.get('http://localhost:5000/foodRoute/foodList')
            setfoods(res.data.list)
        } catch (err) {
            console.log(
                { E_Id, Food_Id,ExportDate, Quantity}
            );
            
            alert(err.response.data.message)
        }
       }
       
    useEffect(()=>{
        handleImport()
    },[])
    
    
    return(
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="flex w-[900px] flex-col gap-4 p-9 rounded-2xl shadow-2xl">
                <h3 className="text-center text-blue-700 text-2xl font-bold">UPDATE EXPORTS</h3>
                <input type="text" value={E_Id} onChange={(e)=>{setE_Id(e.target.value)}}
                
                className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3"  placeholder="enter importID"/>
              <select value={Food_Id} onChange={(e)=>{setFood_Id(e.target.value)}} className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3" >
                <option value="" disabled>select Food Name</option>
                {foods.map((item,index)=>(
                    <option key={index} value={item._id}>
                        {item.Food_Name}
                    </option>
                ))}
              </select>
                <input type="date" value={ExportDate} onChange={(e)=>{setExportDate(e.target.value)}} 
                
                className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3"  placeholder="enter ExportDate"/>
                <input type="text" value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}} 
                
                className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3"  placeholder="enter Quantity"/>
                <button className="bg-blue-500 p-2 rounded text-2xl text-white font-bold hover:bg-blue-700 transition duration-900 "  onClick={()=>{
                    handleUpdateExport()
                    navigate('/exportList')
                }}>UpdateExport</button>
            </div>
        </div>
    )
}