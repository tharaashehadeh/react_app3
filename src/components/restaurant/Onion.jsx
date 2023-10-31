import React ,{useEffect, useState} from 'react'
export default function Onion() {
    let [onion,setOnion] =useState([]);
    const getOnion = async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data = await response.json();
        setOnion(data.recipes);
    }
    useEffect( ()=>{
        getOnion();
    },[])
  return (
    <div className='products'>
    <div className='row '> 
     {
             onion.map((ele)=>{
             return <div className='col-md-4 my-4' key={ele.id}>
             <div>
             <h2 className='mt-4'>{ele.title}</h2>
             <img src={ele.image_url} className='w-100'/>
             </div>
             </div>
        })
     }
    </div>
    </div>
  )
}
