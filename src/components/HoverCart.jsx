/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import { css } from '@emotion/react';

export default function HoverCart(){


    const Hovercart = styled.div`
        display:block;
        width: 16rem;
        height: fit-content;
        border: 1px solid black;
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

    const StyledButton = styled.button`
        display: flex;
        width: 100%;
        padding:1rem;
        justify-content:center;
    `
    return(
        <Hovercart>
            {/* NEED TO MAP OVER ITEMS HERE */}
            <Details>
                <div>IMG HERE</div>
                <div> {/*Details of the item should be here */}
                    <p>Name of the item</p>
                    <span css={css`color:red; display:flex;`}>PRICE</span>
                    <Grid>
                        <div>Quantity</div>
                        <div>2</div>
                        <div>Size</div>  
                        <div>4</div>
                    </Grid>
                </div>
            </Details>
                <Divider />
                <Grid2>
                    <div>Order value</div>
                    <div>Price*</div>
                    <div>Delivery</div>
                    <div>Delivery Price*</div>
                </Grid2>
                <Divider />
                <Grid2>
                    <span>Total</span>
                    <span>Price*</span>
                </Grid2>
                <StyledButton>CHECKOUT</StyledButton>
        </Hovercart>
    )
}