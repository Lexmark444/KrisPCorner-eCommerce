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
    border-right: 120px solid transparent;
    border-top: 120px solid #F5DEB3;
    border-left: 120px solid #F5DEB3;
    border-bottom: 120px solid #F5DEB3;
    border-top-left-radius: 120px;
    border-top-right-radius: 120px;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
    position: absolute;
`
const Image = styled.img`
    height: 40%;
    z-index: 2;
    object-fit: contain;
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
        <Link to={`/product/${item.id}`}>
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
