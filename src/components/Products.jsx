import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Cards from './Card'

export default function Products({prods}){
    const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr); /* Creates 4 equal columns */
    gap: 16px; /* Space between columns */
    padding: 16px; /* Padding inside the grid container */
    width:80%;
`
    return(
        <Container>
            {prods.map((product) => (
                <Cards 
                    key={product.id}
                    item = {product}
                />
            ))}
        </Container>
    )
}

Products.propTypes ={
    prods: PropTypes.array.isRequired
}