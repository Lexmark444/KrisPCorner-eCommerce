import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbf4ea;
    position: relative;
    
    &:hover ${Info}{
        opacity: 1;
    }
    
`
const Pacman = styled.div`
    width: 0px;
    height: 0px;
    border-right: 140px solid transparent;
    border-top: 140px solid #F5DEB3;
    border-left: 140px solid #F5DEB3;
    border-bottom: 140px solid #F5DEB3;
    border-top-left-radius: 140px;
    border-top-right-radius: 140px;
    border-bottom-left-radius: 140px;
    border-bottom-right-radius: 140px;
    position: absolute;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    z-index: 2;
    object-fit: cover;
    border-radius: 3px;
`

const Icon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
`


const Product = ({item}) => {
  return (
    <Container>
        <Pacman />
        <Image src={item.img} />
        <Link to={`/product/${item._id}`}   onClick={() => {window.scroll(0, 0);}}>
        <Info>
            <Icon>
              <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Info>
        </Link>
    </Container>
  )
}

export default Product
