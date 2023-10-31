import React ,{useEffect, useState} from 'react'


export default function Salad() {
    let [salad,setSalad] =useState([]);
    const getSalad = async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data = await response.json();
        setSalad(data.recipes);
    }
    useEffect( ()=>{
        getSalad();
    },[])
  return (
    <div className='products'>
   <div className='row '> 
    {
            salad.map((ele)=>{
            return <div className='col-md-4 my-4' key={ele.id}>
            <div>
            <h2>{ele.title}</h2>
            <img src={ele.image_url} className='w-100'/>
            </div>
            </div>
       })
    }
   </div>
   </div>
  )
}
