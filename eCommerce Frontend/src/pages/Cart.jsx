import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import placeholder from "../assets/images/placeholder.png"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"
import { useSelector } from "react-redux"
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router"

const stripe = process.env.REACT_APP_TEST_KEY

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
    object-fit: contain;
    height: 200px;
    width: 150px;
    border-radius: 3px;
    transition: all ease 2s;

    &:hover{
        transform: translateX(100px) scale(1.7);   
    }
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
    padding: 10px;
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

const Button = styled.div`
    width: 100%;
    padding: 13px;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;

`




const Cart = ({item}) => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token) =>{
        setStripeToken(token)
    };


    useEffect(()=>{
        const total = cart.total.toFixed(2) * 100
        const makeRequest = async () =>{
            try {
                const res = await fetch("http://localhost:5000/api/checkout/payment",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                {
                    tokenId: stripeToken.id,
                    amount: total,
                }),
            })
                navigate("/success", 
                {
                stripeData: res.data,
                products: cart,
                }
            )
            } catch (error) {
                console.log(error)
            }
        
        }
        stripeToken && makeRequest()
    },[stripeToken, cart, cart.total, navigate])

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
                        Shopping Bag ({cart.quantity})    
                    </TopText>
                    <TopText>
                        Your Wishlist (0)
                    </TopText>
                </TopTextContainer>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>

                <Info>
                    {cart.products.map(product=>(
                    <Product>
                        <ProductDetail>
                            <Image src={product.img} onClick={() => window.location.replace(`/product/${product._id}`)} />
                            <Details>
                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                <ProductId><b>ID:</b> {product._id}</ProductId>
                                <ProductSize><b>Size:</b> {product.size}</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove style={{cursor:"pointer"}} />
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Add style={{cursor:"pointer"}} />
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr></Hr>
                </Info>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
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
                        <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout 
            name='KrisP Corner' 
            image={placeholder}
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total.toFixed(2)}`}
            amount={cart.total.toFixed(2)*100}
            token={onToken}
            stripeKey={stripe}
            >
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />

      
    </Container>
  )
}

export default Cart
