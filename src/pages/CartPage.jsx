/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { css } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import Incrementer from "../components/Incrementer";
import { Alert, Divider, Snackbar } from "@mui/material";

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    box-sizing: border-box;
`
const Cart = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 70%;
    padding:3rem 2rem;
`
const Title = styled.div`
    font-size: 2rem;
`
const Details = styled.p`
    font-size: 1rem;
    margin:0;
    position:relative;
`

const Button = styled.button`
margin:0;
padding:0;
color:inherit;
background-color:transparent;
transform: 0.5s;
font-size: 1rem;
&:hover{
    
    transform: scale(1.05)
}
&::after{
    content:'';
    position: absolute;
    height: 1px;
    left:0;
    bottom:0;
    width:0;
    background: black;
    transition: width 0.2s;
}
&:hover::after{
    width:100%;
}
`

const Grid = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 2fr;
    width: 100%;
`

const Grid2 = styled.div`
    display:grid;
    grid-template: 1fr / 2fr 1fr 1fr;
    align-items:center;
`

const DetailHeader = styled.div`
    font-size: 1rem;
    font-weight: 600;
`

const Checkout = styled.button`
    color: white;
    background-color: #141514;
    width: 100%; /* Fill the available space */
    height: 2.5rem; /* Optional: adjust height as necessary */
    border: none; /* Remove border */
    padding: 0.8rem; /* Optional: adjust padding for better visual */
    font-size: 1.2rem; /* Optional: Adjust font size */
    cursor: pointer; /* Change cursor to pointer for better UX */
    display: flex; /* Ensure it's a block-level element */
    justify-content:center;
    align-items:center;
    border-radius: 0.3rem; /* Optional: rounded corners */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
    
    /* Optional: Add hover effect */
    &:hover {
        background-color: #333333; /* Darker shade on hover */
    }
`

export default function CartPage(){
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/shop')
    }
    const {cartItems, setCartItems} = useContext(ThemeContext)
    const [alertOpen, setAlertOpen] = useState(false)

    const handleRemove = (id)=> {
        const filteredArr = cartItems.filter((item) => item.id !== id)
        setCartItems(filteredArr)
    }
    const handleCheckout = () => {
            setAlertOpen(true);
            setTimeout(() => {
                setAlertOpen(false);
                setCartItems([]); 
                navigate('/');
            }, 3000);
    };
    const handleCloseAlert = () => {
        setAlertOpen(false);
    };

    let price = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
    let delivery = 300.00;
    let total = price + delivery;
    return(
        <Container>
            <Navbar />
            <Cart>
            {cartItems.length !== 0 ? 
                <>
                <Title>Cart</Title>             
                <Button onClick={handleNavigate}>Continue Shopping</Button>
                <Grid>
                    <Title></Title>
                    <Grid2>
                        <DetailHeader/>
                        <DetailHeader>QUANTITY</DetailHeader>
                        <DetailHeader>PRICE</DetailHeader>
                    </Grid2>
                </Grid>
                
                {cartItems.map((item) =>
                    <Grid key={item.id}>
                        <div css={css`width:100%; height:100%;`}><img src={item.image} css={css`width: 40%; height: 100%; object-fit: contain;`} /></div>
                        <Grid2>
                            <div>
                                <Details>{item.title}</Details>
                                <Button onClick={()=>handleRemove(item.id)}>Remove</Button>
                            </div>
                            <Incrementer prod = {item} remove={handleRemove} />
                            <div>${item.price * item.quantity}</div>
                        </Grid2>
                    </Grid>
                )}
                <div css={css`width:100%;display:grid; grid-template: 1fr / 1fr 1fr; padding:3rem 2rem`}>
                    <div></div>
                    <div>
                        <div css={css`display:flex; justify-content: space-between;padding-bottom: 2rem;`}>
                            <Details css={css`font-size:1.5rem; font-weight: 600;`}>SUBTOTAL</Details>
                            <Details>${price}</Details>
                        </div>
                        <Divider></Divider>
                        <div css={css`display:flex; justify-content: space-between;padding:2rem 0;`}>
                            <Details css={css`font-size:1.5rem; font-weight: 600;`}>TOTAL</Details>
                            <Details>${total}</Details>
                        </div>
                    </div>
                </div>
                
                <Checkout onClick={handleCheckout}>CHECKOUT</Checkout>
                </> : 
                <div css={css`min-height: 45rem;width:70%;justify-content:center;display:flex;flex-direction:column;`}>
                    <Title>Your cart is empty.</Title>
                    <Button css={css`font-size:1rem`} onClick={handleNavigate}>Continue Shopping</Button>
                </div>}
            </Cart>
            <Snackbar
                open={alertOpen}
                autoHideDuration={3000} // Alert auto hides after 3 seconds
                onClose={handleCloseAlert}
            >
                <Alert onClose={handleCloseAlert} severity={cartItems.length === 0 ? 'error' : 'success'}>
                    {cartItems.length === 0 ? 'Your cart is empty! Please add items before checkout.' : 'Checkout successful!'}
                </Alert>
            </Snackbar>
        </Container>
    )
}