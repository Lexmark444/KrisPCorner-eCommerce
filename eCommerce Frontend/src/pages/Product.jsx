import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import placeholderimg from "../assets/images/placeholder.png"
import { Add, Remove } from "@mui/icons-material"


const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
    
`

const Image = styled.img`
    width: 100%;
    /* height: 90vh; */
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 300;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 25px;
    font-weight: 200;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    border-radius: 3px;
    font-size: large;
`

const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 31%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: larger;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    border-radius: 3px;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: medium;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={placeholderimg} />
            </ImgContainer>
            <InfoContainer>
                <Title>Chocolate Chip Cookies</Title>
                <Desc>
                    Indulge in the warm, buttery goodness of our freshly baked chocolate chip cookies!
                    Made with the finest ingredients, each bite is packed with mouth-watering chunks of rich, 
                    velvety chocolate that melt in your mouth. The perfect balance of crispy edges and soft, 
                    chewy centers make these cookies the ultimate comfort treat. Baked to perfection, 
                    our chocolate chip cookies are perfect for any occasion - whether it's a mid-day 
                    snack or a sweet treat after dinner. One bite and you'll be transported to 
                    chocolate heaven!
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>Snack</FilterSizeOption>
                            <FilterSizeOption>Regular</FilterSizeOption>
                            <FilterSizeOption>Party</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>

                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
