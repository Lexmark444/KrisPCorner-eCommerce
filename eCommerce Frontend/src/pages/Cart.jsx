import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import placeholder from "../assets/images/placeholder.png"
import coffee from "../assets/images/coffee.jpg"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
    border-radius: 3px;
    
`
const TopTextContainer = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    ${mobile({ display: "none" })}
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`
const Info = styled.div`
    flex: 3;

`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    object-fit: cover;
    height: 200px;
    width: 150px;
    border-radius: 3px;
    transition: all ease 2s;

    &:hover{
        transform: translateX(100px) scale(1.7);   
    }

    ${mobile({ objectFit: "contain" })}
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    margin: 5px;
    font-size: 24px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ fontSize: "24px", fontWeight: "500" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;

`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 3px;
    padding: 20px 20px 35px;
    height: 50vh;
    ${mobile({ borderRadius: "10px", marginTop: "10px" })}
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 13px;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;

`




const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>

                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTextContainer>
                    <TopText>
                        Shopping Bag (2)    
                    </TopText>
                    <TopText>
                        Your Wishlist (0)
                    </TopText>
                </TopTextContainer>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={placeholder} />
                            <Details>
                                <ProductName><b>Product:</b> Chocolate Chip Cookies</ProductName>
                                <ProductId><b>ID:</b> 8978635468</ProductId>
                                <ProductSize><b>Size:</b> Snack</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove />
                                <ProductAmount>2</ProductAmount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr></Hr>
                    <Product>
                        <ProductDetail>
                            <Image src={coffee} />
                            <Details>
                                <ProductName><b>Product:</b> Iced Coffee with Milk and Sugar</ProductName>
                                <ProductId><b>ID:</b> 681641554</ProductId>
                                <ProductSize><b>Size:</b> Regular</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove />
                                <ProductAmount>1</ProductAmount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>$ 9</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$39.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$8.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>- $8.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$39.00</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />

      
    </Container>
  )
}

export default Cart
