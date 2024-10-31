import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';


export default function Navbar() {

    const Navbar = styled.div`
        display:flex;
        justify-content: space-around;
        align-items:center;
        width:100%;
        padding: 1rem 0;
        background-color: red;
        color: white;
        &:hover {
            color:black;
            background-color:white;
        }
    `

    const ButtonsDiv = styled.div`
        display:flex;
        justify-content:space-around;
        gap:1rem;
    `

    const Button = styled.button`
        margin:0;
        padding:0;
        color:inherit;
        background-color:transparent;
        &:hover{
            color:black;
            background-color:white;
        }
    `

    const {cartItems} = useContext(ThemeContext)

    const [itemCount, setItemCount] = useState(0)
    useEffect(() => {
        if (cartItems) {
            let newItemCount = 0
            cartItems.forEach((item) => newItemCount += item.quantity )
            setItemCount(newItemCount);
        }
    }, [cartItems   ])
    

    return(
        <Navbar>
            <div>TEST</div>
            <div>LOGO</div>
            <ButtonsDiv>
                <Button>
                    <AccountCircleOutlinedIcon />
                </Button>
                <Button>
                    <FavoriteBorderIcon/>
                </Button>            
                <Button>
                    <Badge badgeContent={itemCount} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </Button>
            </ButtonsDiv>
        </Navbar>
    )
}