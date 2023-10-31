
import React ,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Restaurant() {
    let [restaurant,setRestaurant] =useState([]);
    const getRestaurant = async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data = await response.json();
        console.log(restaurant);
        setRestaurant(data);
    }
    useEffect( ()=>{
        getRestaurant();
    },[])
  return (
    
    <div className='row '>
    <Navbar expand="lg" className=" alert alert-danger  bag navbar navbar-expand-lg">
      <Container >
        <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to='/home'> Home </Link>
          <Link className='mx-4' to='/products'> Products </Link>
          <Link to="/restaurant"> Restaurant </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {
       restaurant.map((ele)=>{
        return <div className='col-md-4' key={ele.recipe_id}>
            <h2>{ele.title}</h2>
            <img src={ele.image_url} className='w-100'/>
            </div>
       })
    }
   </div>
  )
}
