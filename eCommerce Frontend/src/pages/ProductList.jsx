import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Products from "../components/Products"


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
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-radius: 3px;
`
const Option = styled.option`

`


const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Cereal</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Category</Option>
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
        <Select>
            <Option selected>Newest</Option>
            <Option>Price ↑</Option>
            <Option>Price ↓</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
