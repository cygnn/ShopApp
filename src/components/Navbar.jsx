import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Tooltip, tooltipClasses } from '@mui/material';
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

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      border: '1px solid #dadde9',
    },
  }));


export default function Navbar() {
    const [itemCount, setItemCount] = useState(0)
    // const [isHovered, setIsHovered] = useState(false)

    const navigate = useNavigate()

    const handleNavigation = (event) =>{
        if(event.target.value === 'home')
            navigate('/')
        else if (event.target.value === 'shop')
            navigate('/shop')
    }

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
                <LightTooltip 
                    title={<HoverCart/>} 
                    placement="bottom"
                >
                <Button>
                    <Badge badgeContent={itemCount} color="primary" sx={{width: '100%', height: '100%'}} >
                        <ShoppingCartOutlinedIcon sx={{width: 24, height: 29}}/>
                    </Badge>
                </Button>          
                </LightTooltip>
            </ButtonsDiv>
        </NavbarDiv>
    )
}