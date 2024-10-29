import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Cards from './Card'

export default function Products({prods}){
    const Container = styled.div`
    display:flex;
    gap:16px;
    flex-direction:row;
    width:100%;
`
    return(
        <Container>
            {prods.forEach(item => {
                <Cards 
                    item={item}
                />
            })}
        </Container>
    )
}

Products.propTypes ={
    prods: PropTypes.array.isRequired
}