import styled from "styled-components"
import Product from "./Product"
import axios from "axios"
import { useEffect, useState } from "react"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(240,241,243);

`

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async ()=>{
      try {
        const res = await axios.get(cat ? `https://krisp-corner-crud-node-api.onrender.com/api/products/?category=${cat}` : `https://krisp-corner-crud-node-api.onrender.com/api/products`)
        setProducts(res.data)
      } catch (error) {
        
      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>
        item[key] === value
      ))
    ) 
  },[products, cat, filters])

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        )
    } else if(sort === "priceup"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
        )
    } else {
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
        )
    }
  },[sort])

  return (
    <Container>
      {cat 
      ? filteredProducts.map((item)=> <Product item={item} key={item.id} />) 
      : products
        .slice(0, 45)
        .map((item)=> <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products
