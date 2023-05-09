import StripeCheckout from 'react-stripe-checkout'
import logoimg from '../assets/images/Krisp Corner.png'
import { useState, useEffect } from 'react'
import axios from "axios"
import useNavigate from 'react-router-dom'

const KEY = "pk_live_51MQyO2GwDtnQAKqyBJaPfjnovUNErplOOMVPZcUzvDjGhA9i2f7Gk62naJRYEKy3VvRNbAlzdF6Dxlhd3192dj1e00i4EjV0c0"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate()
    const onToken = (token) =>{
        setStripeToken(token)
    };

    useEffect(()=>{
        const makeRequest = async () =>{
            try {
                const res = await axios.post("http://localhost:3000/api/checkout/payment",
                {tokenId: stripeToken.id,
                amount: 2000,
                }
                )
                console.log(res.data);
                history.push("/success")
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    },[stripeToken, history])

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StripeCheckout 
            name='KrisP Corner' 
            image={logoimg}
            billingAddress
            shippingAddress
            description='Your total is $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
            <button
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }}  
            >Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Pay;