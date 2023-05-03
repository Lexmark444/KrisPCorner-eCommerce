import styled from "styled-components"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
`
const Logo = styled.div`

`
const Desc = styled.div`
    
`
const SocialContainer = styled.div`
    
`
const IconContainer = styled.div`
    
`


const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>KrisP Corner</Logo>
            <Desc>A site developed by KrisP using MongoDB, ExpressJS, React,
                 and NodeJS along with Stripe API to process payments</Desc>
            <SocialContainer>
                <IconContainer>
                    <InstagramIcon />
                </IconContainer>
                <IconContainer>
                    <TwitterIcon />
                </IconContainer>
                <IconContainer>
                    <YouTubeIcon />
                </IconContainer>
                <IconContainer>
                    <FacebookIcon />
                </IconContainer>
                <IconContainer>
                    <PinterestIcon />
                </IconContainer>
                <IconContainer>
                    <i class="fa-brands fa-tiktok"></i>
                </IconContainer>
            </SocialContainer>    
        </Left>
        <Center></Center>
        <Right></Right>     
    </Container>
  )
}

export default Footer
