import React,{useState,useEffect} from "react";
import axios from "axios";
export default function RegisterExport() {
    
    const [I_Id,setI_Id]=useState("")
    const [Food_Id,setFood_Id]=useState("")
    const [Food_OwnerName,setFood_OwnerName]=useState("")
    const [Quantity,setQuantity]=useState("")
    const [foods, setfoods]=useState([])


   async function handleRegister() {
        try {
            if (!I_Id||!Food_Id||!Food_OwnerName||!Quantity) {
                alert("please fill the mising")
                return 
            }
            const res=await axios.post('http://localhost:5000/importRoute/addImport',{I_Id,Food_Id,Food_OwnerName,Quantity});
            setI_Id("")
            setFood_Id("")
            setFood_OwnerName("")
            setQuantity("")
            alert(res.data.message)

        } catch (err) {
            alert(err.response.data.message)
        }
    }

    useEffect(()=>{
       async function handleImport() {
        try {
            const res=await axios.get('http://localhost:5000/foodRoute/foodList')
            setfoods(res.data.list)
        } catch (err) {
            console.log(
                { I_Id, Food_Id,Food_OwnerName, Quantity}
            );
            
            alert(err.response.data.message)
        }
       }
       handleImport()
    },[])

    return(
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="flex w-[900px] flex-col gap-4 p-9 rounded-2xl shadow-2xl">
                <h3 className="text-center text-blue-700 text-2xl font-bold">REGISTER IMPORTS</h3>
                <input type="text" value={I_Id} onChange={(e)=>{setI_Id(e.target.value)}}
                
                className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3"  placeholder="enter importID"/>
              <select value={Food_Id} onChange={(e)=>{setFood_Id(e.target.value)}} className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3" >
                <option value="" disabled>select Food Name</option>
                {foods.map((item,index)=>(
                    <option key={index} value={item._id}>
                        {item.Food_Name}
                    </option>
                ))}
              </select>
                <input type="text" value={Food_OwnerName} onChange={(e)=>{setFood_OwnerName(e.target.value)}} 
                
                className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3"  placeholder="enter Food_OwnerName"/>
                <input type="text" value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}} 
                
                className="border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-1 p-3"  placeholder="enter Quantity"/>
                <button className="bg-blue-500 p-2 rounded text-2xl text-white font-bold hover:bg-blue-700 transition duration-900 "  onClick={handleRegister}>RegisterImport</button>
            </div>
        </div>
    )
}