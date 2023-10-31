import React ,{useEffect, useState} from 'react'

export default function Pizza() {
    let [pizza,setPizza] =useState([]);
    const getPizza = async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data = await response.json();
        setPizza(data.recipes);
    }
    useEffect( ()=>{
        getPizza();
    },[])
  return (
    <div className='products'>
   <div className='row '> 
    {
            pizza.map((ele)=>{
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
