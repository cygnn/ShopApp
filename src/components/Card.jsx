/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from '../App';


export default function Cards({item}){
    const {setCartItems, cartItems} = useContext(ThemeContext)

    const Details = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-direction:column;
        padding:8px;
        position:relative;
    `
    const Title = styled.div`
        font-size: 0.8rem;
    `

    const Price = styled.div`
        font-size: 1.5rem;
        display:flex;
        justify-content: space-between;
    `

    const handleAddtoCart = ()=> {
        const newItem = {...item, quantity: 1}
        if(cartItems.find((item) => 
            item.id === newItem.id
        ) === undefined){
            setCartItems([...cartItems, newItem])
        }
        else{
            const updatedData = cartItems.map((item) => 
                item.id === newItem.id ? {...item, quantity: newItem.quantity + item.quantity} : item
            )
            setCartItems(updatedData)
        }
    }

    return(
        <Card  
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                maxWidth:300,
                minHeight: 550,
                marginBottom: 2,
                transition: 'transform 0.3s ',
                '&:hover': {
                    transform: 'scale(1.05)',
                    },
            }}

        >
            <CardMedia 
                component="img"
                image={item.image}
                sx={{
                    width: '100%',
                    height: '80%',    
                    display: 'flex',
                    objectFit: 'contain',
                }}
            />
            <CardContent
                sx={{
                    display:'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    textAlign:'left',
                    width:'100%',
                    padding:0,
                }}
            >
                <Details>
                    <Title>{item.title}</Title>
                    <Price>
                        ${item.price}
                            <span>
                                <Button startIcon={<AddShoppingCartIcon />} onClick={handleAddtoCart}>Add to Cart</Button>
                            </span>
                    </Price>
                </Details>
            </CardContent>
        </Card>
    )
}

Cards.propTypes ={
    item: PropTypes.object.isRequired
}