import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Menu, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';
import HoverCart from './HoverCart';
import { useNavigate } from 'react-router-dom';

const NavbarDiv = styled.div`
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


export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [itemCount, setItemCount] = useState(0)
    // const [isHovered, setIsHovered] = useState(false)

    const navigate = useNavigate()

    const handleNavigation = (event) =>{
        if(event.target.value === 'home')
            navigate('/')
        else if (event.target.value === 'shop')
            navigate('/shop')
    }

    const handleMenuOpen = (event) =>{
        console.log('You are in handleMenuOpen')
        setAnchorEl(event.currentTarget);
        console.log(event)
        // setIsHovered(true);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)

    }
    
    const handleMouseEnter = () => {
        console.log('You are in handleMouseEnter')
        // setIsHovered(true);
    }


    const open = Boolean(anchorEl)

    const {cartItems} = useContext(ThemeContext)

    useEffect(() => {
        if (cartItems) {
            let newItemCount = 0
            cartItems.forEach((item) => newItemCount += item.quantity )
            setItemCount(newItemCount);
        }
    }, [cartItems   ])
    

    return(
        <NavbarDiv>
            <div>Lorem Ipsum</div>
            <ButtonsDiv>
                <Button onClick={handleNavigation} value={'home'}>
                    Home
                </Button>
                <Button onClick={handleNavigation} value={'shop'}>
                    Shop
                </Button>
                <Button>
                    About Us
                </Button>
            </ButtonsDiv>
            <ButtonsDiv>
                <Button>
                    <AccountCircleOutlinedIcon />
                </Button>
                <Button>
                    <FavoriteBorderIcon/>
                </Button>
                <Button
                onMouseOver={handleMenuOpen}
                >
                    <Badge badgeContent={itemCount} color="primary" sx={{width: '100%', height: '100%'}} >
                        <ShoppingCartOutlinedIcon sx={{width: 24, height: 29}}/>
                    </Badge>
                </Button>          
            </ButtonsDiv>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
            >
                <MenuItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMenuClose}><HoverCart /></MenuItem>
            </Menu>
        </NavbarDiv>
    )
}