import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import placeholder from "../assets/images/cookies.jpg"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux"
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router"
import { addOneProduct, clearCart, decreaseCart, getTotals, removeFromCart } from "../redux/cartSlice"

const stripe = process.env.REACT_APP_TEST_KEY
// const stripeReal = process.env.REACT_APP_STRIPE_KEY

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
    ${mobile({ flexDirection: "column" })}
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
    justify-content: space-evenly;
`

const ProductName = styled.span`

`

const ProductId = styled.span`

`
const RemoveAll = styled.button`
    text-decoration: underline;
    font-size: smaller;
    cursor: pointer;
    border: none;
    background-color: white;
    display: flex;
    width: 20%;
    color: grey;
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
    ${mobile({ fontSize: "24px", fontWeight: "500" , marginBottom: "20px" })}
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
    padding: 20px;
    height: 50vh;
    padding-bottom: 0px;
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
    width: 92%;
    padding: 13px;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${mobile({ marginBottom: "15px" })}
`
const ClearContainer = styled.div`
    display: flex;
    justify-content: start;
    margin-left: 33px;
    padding-top: 10px;
    ${mobile({ justifyContent: "center", marginLeft: "0" })}
`
const ClearCart = styled.button`
    width: auto;
    padding: 10px;
    background-color: red;
    color: white;
    font-weight: 600;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${mobile({ width: "75%"})}

`


const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goShopping = () =>{
        navigate('/category')
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item))
    }

    const handleDecreaseCart = (item) => {
        dispatch(decreaseCart(item))
    }

    const handleIncreaseCart = (item) => {
        dispatch(addOneProduct(item))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const onToken = (token) =>{
        setStripeToken(token)
    };

    useEffect(()=>{
        const total = cart.total.toFixed(2) * 100


        const makeRequest = async () =>{
            try {
                const res = await fetch("https://krisp-corner-crud-node-api.onrender.com/api/checkout/payment",{
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

                <TopButton onClick={goShopping}>CONTINUE SHOPPING</TopButton>
                <TopTextContainer>
                    <TopText>
                        Shopping Bag ({cart.quantity})    
                    </TopText>
                    <TopText>
                        Delicious Items ({cart.quantity})
                    </TopText>
                </TopTextContainer>
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
                <TopButton type="filled">CHECKOUT NOW</TopButton>
                </StripeCheckout>
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
                                <RemoveAll onClick={() => handleRemoveFromCart(product) }>Remove</RemoveAll>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove style={{cursor: "pointer"}} onClick={ () => handleDecreaseCart(product)}/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Add style={{cursor: "pointer"}} onClick={ () => handleIncreaseCart(product)}/>
                            </ProductAmountContainer>
                            <ProductPrice>$ {(product.price * product.quantity).toFixed(2)}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr></Hr>
                    <ClearContainer>
                        <ClearCart onClick={()=> handleClearCart()}>Clear Cart</ClearCart>
                    </ClearContainer>
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
