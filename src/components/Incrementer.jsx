import styled from "@emotion/styled"
import { Button, ButtonGroup, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from "react";
import { ThemeContext } from "../App";
import { CardTravelOutlined } from "@mui/icons-material";

const Container = styled.div`
    display:flex;
`

export default function Incrementer({prod}){
    const {cartItems, setCartItems} = useContext(ThemeContext)

    const handleAdd = ()=> {
        const updatedData = cartItems.map((item) =>
            item.id === prod.id ? {...item, quantity: item.quantity + 1} : item
        )
        setCartItems(updatedData);
    }
    return(
        <Container>
            <ButtonGroup>
                <Button>
                    <RemoveIcon />
                </Button>
                <TextField  id="standard-basic" defaultValue= {prod.quantity} variant="standard" />
                <Button>
                    <AddIcon />
                </Button>
            </ButtonGroup>
        </Container>
    )
}