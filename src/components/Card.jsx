/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';


export default function Cards({item}){
    const [hovered, setHovered] = useState(false)

    function handleMouseEnter(){
        setHovered(true)
    }

    function handleMouseLeave(){
        setHovered(false)
    }

    const Details = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-direction:column;
        padding:8px;
    `
    const Title = styled.div`
        font-size: 1rem;
    `

    const Price = styled.div`
        font-size: 1.5rem;
    `

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
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                <ButtonGroup
                    variant='contained'
                    sx={{
                        display: hovered ? 'flex' : 'none',
                        position: 'absolute',
                        top: 390,
                        right: 0,
                        width: '100%',
                        justifyContent:'center',
                        boxShadow:'none',
                    }}
                >
                    <Button>XS</Button>
                    <Button>S</Button>
                    <Button>M</Button>
                    <Button>L</Button>
                    <Button>XL</Button>
                    <Button>XXL</Button>
                </ButtonGroup>
                <Details>
                    <Title>{item.title}</Title>
                    <Price>${item.price}</Price>
                </Details>
            </CardContent>
        </Card>
    )
}

Cards.propTypes ={
    item: PropTypes.object.isRequired
}