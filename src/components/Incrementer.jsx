import styled from "@emotion/styled"
import { Button, ButtonGroup } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from "react";
import { ThemeContext } from "../App";
import PropTypes from 'prop-types'

const Container = styled.div`
    display:block;
`

export default function Incrementer({prod, remove}){
    const {cartItems, setCartItems} = useContext(ThemeContext)


    const handleAdd = ()=> {
        const updatedData = cartItems.map((item) =>
            item.id === prod.id ? {...item, quantity: item.quantity + 1} : item
        )
        setCartItems(updatedData);
    }

    const handleMinus = ()=> {
        if(prod.quantity === 1){
            remove(prod.id)
        }
        else{
        const updatedData = cartItems.map((item) =>
            item.id === prod.id ? {...item, quantity: Math.max(item.quantity - 1, 0)} : item
        )
        setCartItems(updatedData);
        }
    }
    return(
        <Container>
            <ButtonGroup>
                <Button onClick={handleMinus}>
                    <RemoveIcon />
                </Button>
                <Button>{prod.quantity}</Button>
                <Button onClick={handleAdd}>
                    <AddIcon />
                </Button>
            </ButtonGroup>
        </Container>
    )
}

Incrementer.propTypes = {
    prod : PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
}