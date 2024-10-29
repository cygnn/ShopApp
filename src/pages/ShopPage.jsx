import { useState } from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";

export default function ShopPage(){
    const Title = styled.h2`
        dispay:flex;
    `

    const [category, setCategory] = useState("Men")
    const handleCategory = (event, newCategory)=> {
        setCategory(newCategory);
    }

    let title;
    if(category === 'Men'){
        title = "Men's Wear"
    }
    else if (category === 'Women'){
        title = "Women's Wear"
    }
    else
        title = category;

    return(
        <div>
            <Navbar />
            <Categories 
                category={category}
                handleCategory={handleCategory}
            />
            <Title>{title}</Title>
            
        </div>
    )
}