import React, { useEffect, useState } from "react"
import axios from "axios"

const app = () =>{

  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)

    const getdata = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setuserData(response.data)
  }
 useEffect(function(){
  getdata()
 },[index])
let printuserData = <h3 className="text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading</h3>
  if(userData.length>0){
    printuserData = userData.map(function(elem,idx){
      return <div>
        <a href={elem.url} target="_blank">
          <div className="h-45 w-50 ">
        <img className="h-full w-full overflow-hidden object-cover mt-3 rounded-2xl" src={elem.download_url} alt="" />
        <h2>{elem.author}</h2>
      </div>
        </a>
        
      </div>
    })
  }

  return (
    <div className="bg-black overflow-auto  h-screen text-white">
      {/* <button onClick={getdata} className="bg-green-500  cursor-pointer active:scale-95 px-4 py-3 m-4 rounded-2xl">Get data</button> */}

      <div className="flex flex-wrap gap-4 ">
        {printuserData}
      </div>
      <div className="flex justify-center gap-6 items-center p-4 text-black ">
        <button 
        className="bg-amber-400  cursor-pointer active:scale-95 py-3 px-4 mt-6 rounded-2xl font-semibold"
        onClick={()=>{
          if(index>1){
            setindex(index-1);
            setuserData([])
          }
        }}>
          Prev
        </button>

        <button 
        className="bg-amber-400 cursor-pointer active:scale-95 py-3 px-4 mt-6 rounded-2xl font-semibold"
        onClick={()=>{
          setuserData([])
          setindex(index+1);
        }}>
          Next
        </button>
      </div>
    </div>
    
  )
}
export default app