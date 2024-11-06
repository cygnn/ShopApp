/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { css } from '@emotion/react';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`
const Cart = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 70%;
`
const Title = styled.div`
    font-size: 1.5rem;
`
const Button = styled.button`
margin:0;
padding:0;
color:inherit;
background-color:transparent;
transform: 0.5s;
position:relative;
font-size: 0.8rem;
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
    grid-template: 1fr / 2fr 1fr 1fr
`

const DetailHeader = styled.div`
    font-size: 1rem;
    font-weight: 600;
`

const ItemDetails = styled.div`
    font-size: 0.8rem;
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
    const {cartItems} = useContext(ThemeContext)
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
                        <div><img src={item.image} css={css`width: 100px; height: 100px; object-fit: contain;`} /></div>
                        <Grid2>
                            <ItemDetails>
                                {item.title}
                            </ItemDetails>
                            <ItemDetails></ItemDetails>  {/*THIS IS A DUMMY */}
                            <ItemDetails>${item.price}</ItemDetails>
                        </Grid2>
                    </Grid>
                )}
                <Checkout>CHECKOUT</Checkout>
                </> : 
                <div css={css`min-height: 45rem;width:70%;justify-content:center;display:flex;flex-direction:column;`}>
                    <Title>Your cart is empty.</Title>
                    <Button css={css`font-size:1rem`} onClick={handleNavigate}>Continue Shopping</Button>
                </div>}
            </Cart> 
        </Container>
    )
}