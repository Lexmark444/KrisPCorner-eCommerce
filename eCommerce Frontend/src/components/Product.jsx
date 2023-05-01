import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

`
const Icon = styled.div`
    
`


const Product = ({item}) => {
  return (
    <Container>
        <Pacman />
        <Image src={item.img} />
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
    </Container>
  )
}

export default Product
