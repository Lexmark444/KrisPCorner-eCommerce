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
        Payment Works! So... you are just buying the concept of the items :P
    </Container>
  )
}

export default Announcement
