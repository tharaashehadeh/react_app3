import React ,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './Products.css';

export default function Products() {
    let [products,setProducts] =useState([]);
    const getProducts = async()=>{
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);
    }
    useEffect( ()=>{
        getProducts();
    },[])
  return (
    
   <div className='row '>
    <Navbar expand="lg" className=" alert alert-danger  bag navbar navbar-expand-lg">
      <Container >
        <Navbar.Brand href="#home">Products</Navbar.Brand>
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
       products.map((ele)=>{
        return <div className='col-md-4' key={ele.id}>
            <h2>{ele.title}</h2>
            <img src={ele.image} className='w-100'/>
            </div>
       })
    }
   </div>
   
  )
}
