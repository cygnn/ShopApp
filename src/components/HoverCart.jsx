/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import { css } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'

const Hovercart = styled.div`
        display:block;
        width: 16rem;
        height: fit-content;
        padding:0.5rem;
        font-size: 1rem;
    `
    const Details = styled.div`
        display:flex;
    `

    const Grid = styled.div`
        display:grid;
        grid: 2rem / 1fr 1fr;
        justify-items: flex-start;
        gap: 1rem
    `

    const Grid2 = styled.div`
        display:grid;
        grid: 1fr / 1fr 1fr;
        justify-items: flex-start;
        margin-top: 0.5rem;
    `
    const Title = styled.p`
        max-width: 140px; /* Control max width */
        overflow: hidden; /* Hide overflow */
        text-overflow: ellipsis; /* Add ellipsis for overflowed text */
        margin: 0; /* Remove margin for better spacing */
        flex-grow: 1; /* Allow to grow and push other elements down */
        white-space: nowrap; /* Prevent text from wrapping */
        display: block; /* Ensure it's treated as a block element */
    `;
    const Button = styled.button`
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
`;
export default function HoverCart({itemCount}){
    const navigate = useNavigate()
    const {cartItems} = useContext(ThemeContext)

    let price = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
    let delivery = 300.00;
    let total = price + delivery;

    const handleNavigate = () =>{
        navigate('/cart')
    }
    return(
        itemCount > 0 ?
        <Hovercart>
            { cartItems.map((item) => 
                <Details key={item.id}>
                    <div><img src={item.image} css={css`width: 100px; height: 100px; object-fit: contain;`} /></div>
                    <div css={css`margin-left: 16px;`}> 
                        <Title>{item.title}</Title>
                        <span css={css`color:red; display:flex;`}>${item.price}</span>
                        <Grid>
                            <div>Quantity</div>
                            <div>{item.quantity}</div>
                        </Grid>
                    </div>
                </Details>
            )
            }
                <Divider />
                <Grid2>
                    <div>Order value</div>
                    <div>${price.toFixed(2)}</div>
                    <div>Delivery</div>
                    <div>${delivery}</div>
                </Grid2>
                <Divider />
                <Grid2>
                    <span>Total</span>
                    <span>${total}</span>
                </Grid2>
                <Button onClick={handleNavigate}>GO TO CART</Button>
        </Hovercart> : <div css={css`font-size: 1rem`}>Your cart is empty</div>
    )
}

HoverCart.propTypes ={
    itemCount: PropTypes.number.isRequired,
}