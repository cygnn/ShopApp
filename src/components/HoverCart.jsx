/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import { css } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Hovercart = styled.div`
        display:block;
        width: 16rem;
        height: fit-content;
        padding:0.5rem;
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
        grid: 1fr 1fr / 1fr 1fr;
        justify-items: flex-start;
    `
    const Title = styled.p`
    max-width: 120px; /* Control max width */
    overflow: hidden; /* Hide overflow */
    text-overflow: ellipsis; /* Add ellipsis for overflowed text */
    margin: 0; /* Remove margin for better spacing */
    flex-grow: 1; /* Allow to grow and push other elements down */
`;

export default function HoverCart(){

    const {cartItems} = useContext(ThemeContext)

    let price = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
    let delivery = 300.00;
    let total = price + delivery;
    let cartNum = cartItems.length
    return(
        cartNum !== 0 ?
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
        </Hovercart> : <div>Your cart is empty</div>
    )
}