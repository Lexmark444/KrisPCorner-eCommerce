import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"
import { useLocation } from "react-router"
import { useEffect, useState  } from "react"
import { userRequest } from "../requestMethods"
import { addProduct } from "../redux/cartSlice"
import { useDispatch } from "react-redux"




const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 80vh;
    border-radius: 3px;
    object-fit: cover;
    ${mobile({ height: "35vh", objectFit: "contain" })}
`

const InfoContainer = styled.div`
    flex: 2;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
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

const AddContainer = styled.div`
    width: 37%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
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
    margin-left: 10px;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const location = useLocation();
    const id = (location.pathname.split("/")[2])
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()


    useEffect(()=>{
        const getProduct = async ()=>{
            try {
                const res = await userRequest.get("/products/find/"+ id )
                setProduct(res.data);
            } catch (error) {
                
            }
        }
        getProduct()
    },[id])

    const handleQuantity = (type) =>{
        if(type === "decr"){
           quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = ()=>{
        dispatch(addProduct({ ...product, quantity, price:product.price }))
    }

    
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Price>$ {product.price}</Price>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=> handleQuantity("decr")} style={{cursor: "pointer"}}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=> handleQuantity("incr")} style={{cursor: "pointer"}}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
