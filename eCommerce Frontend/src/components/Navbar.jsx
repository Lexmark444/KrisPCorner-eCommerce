import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logoimage from '../assets/images/Krisp Corner.png'
import {mobile} from "../responsive"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Container = styled.div`
    height: 60 px;
    ${mobile({ height: "40px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "5px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex; 
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 3px;
    ${mobile({ marginLeft: "10px" })}
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items:center;
`
const Logo = styled.h1`
    font-weight: bold;
    height: 100%;
`
const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "150px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: "2", justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "9px", marginLeft: "10px" })}
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/> 
                <SearchIcon style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center><Logo><Image src={logoimage} alt='logo' width={250}/></Logo></Center>
        <Right>
            
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <Link to="/cart">
            <MenuItem>    
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
            </MenuItem>
            </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
