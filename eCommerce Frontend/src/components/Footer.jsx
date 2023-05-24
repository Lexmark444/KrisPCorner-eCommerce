import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logoimage from '../assets/images/Krisp Corner.png';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import payimage from '../assets/images/payment.png'
import { mobile } from "../responsive";
import { useNavigate } from "react-router";


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: flex-start;
`
const Logo = styled.h1`
    width: 40%;
    ${mobile({ width: "90%" })}
`
const Image = styled.img`
    width: 100%;
    height: 100%
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    /* ${mobile({ display: "none" })} */
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.a`
    width: 50%;
    margin-bottom: 10px;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    cursor: pointer;
    &:hover{
        color: teal
    }
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Payment = styled.img`
    width: 35%;

`


const Footer = () => {
    const navigate = useNavigate()

    const routeHome = () => {
        navigate("/")
    }

    const routeCart = () => {
        navigate("/cart")
    }

    const routeCereal = () => {
        navigate("/products/cereal")
    }

    const routeChips = () => {
        navigate("/products/chips")
    }

    const routeCookies = () => {
        navigate("/products/cookies")
    }

    const routeDesserts = () => {
        navigate("/products/desserts")
    }

    const routeDrinks = () => {
        navigate("/products/drinks")
    }

    const routeDev = () => {
        navigate("/products/dev")
    }

    const routeTerms = () => {
        navigate("/terms")
    }
  return (
    <Container>
        <Left>
            <Logo><Image src ={logoimage} ></Image></Logo>
            <Desc>A site developed by KrisP using MongoDB, ExpressJS, React,
                 and NodeJS along with Stripe API to process payments.
            </Desc>
            <Desc>
             Enjoy this fun little website made for my Final Project at Coding Temple! 🙃
            </Desc>
            <SocialContainer>
                <IconContainer color="E4405F">
                    <InstagramIcon />
                </IconContainer>
                <IconContainer color="55ACEE">
                    <TwitterIcon />
                </IconContainer>
                <IconContainer color="E60023">
                    <YouTubeIcon />
                </IconContainer>
                <IconContainer color="3B5999">
                    <FacebookIcon />
                </IconContainer>
                <IconContainer color="E60023">
                    <PinterestIcon />
                </IconContainer>
            </SocialContainer>    
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem onClick={routeHome}>Home</ListItem>
                <ListItem onClick={routeCereal}>Cereal</ListItem>
                <ListItem onClick={routeCart}>Cart</ListItem>
                <ListItem onClick={routeChips}>Chips</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem onClick={routeCookies}>Cookies</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem onClick={routeDesserts}>Desserts</ListItem>
                <ListItem>About</ListItem>
                <ListItem onClick={routeDrinks}>Drinks</ListItem>
                <ListItem onClick={routeTerms}>Terms</ListItem>
                <ListItem onClick={routeDev}>Dev Favorites</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/> 555 Crunchy Street, New Jersey, 13337 
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/> (732)-555-5555 
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}}/> Krishna.Patel1207@gmail.com 
            </ContactItem>
            <ContactItem>
            <Payment src={payimage} />
            </ContactItem>
        </Right>     
    </Container>
  )
}

export default Footer
