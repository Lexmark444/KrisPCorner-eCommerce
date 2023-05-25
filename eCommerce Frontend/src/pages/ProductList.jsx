import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Products from "../components/Products"
import { mobile } from "../responsive"
import { useLocation, useNavigate } from "react-router"
import { useState } from "react"


const Container = styled.div`
    
`
const Title = styled.h1`
  margin: 20px;

`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ marginLeft: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-radius: 3px;
  ${mobile({ marginRight: "0px" })}
`
const Option = styled.option`

`


const ProductList = () => {
  const locate = useLocation();
  const cat = (locate.pathname.split("/")[2])
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const Navigate = useNavigate();


  const handleFilters = (e) =>{
    
    const value = e.target.value;
    
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
    Navigate(`krispcorner.netlify.app/products/${value.toLowerCase()}`)
    window.location.reload()
  };

  var title = cat[0].toUpperCase() + cat.substring(1)
  title = title.replace("%20", " ");
  title = title.split(" ");
  for (let i = 0; i < title.length; i++) {
    title[i] = title[i][0].toUpperCase() + title[i].substring(1);
}
  title = title.join(" ");


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{title}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="type" onChange={handleFilters} defaultValue={title}>
            <Option disabled>Category</Option>
            <Option>Cereal</Option>
            <Option>Chips</Option>
            <Option>Cookies</Option>
            <Option>Desserts</Option>
            <Option>Drinks</Option>
            <Option>Dev Favorites</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="priceup">Price ↑</Option>
            <Option value="pricedown">Price ↓</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
