/** @jsxImportSource @emotion/react */

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { css } from '@emotion/react';
import PropTypes from 'prop-types'

export default function Categories({category, handleCategory}){
    

    return(
        <ToggleButtonGroup
            value={category}
            exclusive
            onChange={handleCategory}
            css={css`
                    width:inherit;
                    display:flex;
                    justify-content: center;
                `}
        >
            <ToggleButton value="Men's clothing">
                Men
            </ToggleButton>
            <ToggleButton value="Women's clothing">
                Women
            </ToggleButton>
            <ToggleButton value='Jewelry'>
                Jewelry
            </ToggleButton>
            <ToggleButton value='Electronics'>
                Electronics
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

Categories.propTypes={
    category: PropTypes.string,
    handleCategory: PropTypes.func.isRequired
}