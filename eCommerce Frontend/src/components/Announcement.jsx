import styled from "styled-components"
import {mobile} from "../responsive"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    padding: 5px;
    ${mobile({ fontSize: "10px", height: "15px" })}

`

const Announcement = () => {
  return (
    <Container>
        Stripe Payment switched to Test Mode! Use test card (4242 4242 4242 4242) exp: 08/24 CVC: 123 
    </Container>
  )
}

export default Announcement
