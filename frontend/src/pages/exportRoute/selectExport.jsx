import axios from "axios";
import React,{useState,useEffect} from "react";

export default function SelectExport() {
    const[selectExport,setSelectExport]=useState([])
    const [lists,setLists]=useState([])
    async function handleSelect() {
        try {
            const res=await axios.get('http://localhost:5000/exportRoute/exportList')
            setSelectExport(res.data.list)
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message)
            
        }
    }
    useEffect(()=>{
        handleSelect()
    } ,[])

    async function selectFood() {
        try {
            const res=await axios.get('http://localhost:5000/foodRoute/foodList')
            setLists(res.data.list)
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message)
            
        }
    }
    useEffect(()=>{
        selectFood()
    },[])
    return(
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="shadow-2xl rounded-2xl ">
                <h2 className="text-center text-blue-700 text-2xl font-bold mb-3 ">EXPORT LIST</h2>
                {/* <div className="w-[600px] p-3 bg-teal-100 mt-2 mx-3 mb-3 "> */}
                <table border={2}>
                    <thead>
                        <tr>
                            <th className="p-3 text-blue-700 border-b-2 mt-3">Export_Id</th>
                            <th className="p-3 text-blue-700 border-b-2 mt-3">Food_Id</th>
                            <th className="p-3 text-blue-700 border-b-2 mt-3">ExportDate</th>
                            <th className="p-3 text-blue-700 border-b-2 mt-3">Quantity</th>
                            <th className="p-3 text-blue-700 border-b-2 mt-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectExport.map((sel,index)=>(

                            <tr key={index}>
                                <td className="p-4 border-b-2 text-lg">{sel.E_Id}</td>
                                <td className="p-4 border-b-2 text-lg">{sel.Food_Id?.Food_Name}</td>
                                <td className="p-4 border-b-2 text-lg">{sel.ExportDate}</td>
                                <td className="p-4 border-b-2 text-lg">{sel.Quantity}</td>
                                <td className="p-4 border-b-2 text-lg">
                                    <button className="mx-2 bg-teal-500 hover:bg-teal-800 rounded p-3 text-white font-bold">update</button>
                                    <button className="mx-2 bg-red-500 hover:bg-red-800 rounded p-3 text-white font-bold" >delete</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                {/* </div> */}
            </div>
        </div>
    )
}