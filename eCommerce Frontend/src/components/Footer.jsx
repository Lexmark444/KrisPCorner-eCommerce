import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logoimage from '../assets/images/Krisp Corner.png';


const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    width: 300px;
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
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo><Image src ={logoimage} alt="none"></Image></Logo>
            <Desc>A site developed by KrisP using MongoDB, ExpressJS, React,
                 and NodeJS along with Stripe API to process payments</Desc>
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
                <ListItem>Home</ListItem>
                <ListItem>Cereal</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Chips</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Cookies</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Desserts</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Drinks</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Dev Favorites</ListItem>
            </List>
        </Center>
        <Right></Right>     
    </Container>
  )
}

export default Footer
