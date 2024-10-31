import { useContext, useState } from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import { ThemeContext } from "../App";
import Products from "../components/Products";

export default function ShopPage(){
    const Title = styled.h2`
        dispay:flex;
    `

    const Parent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const {products} = useContext(ThemeContext)
    const [category, setCategory] = useState("Men's clothing")
    const filteredProds = products.filter((item) => {
        if(item.category === 'jewelery' && category.toLowerCase() === 'jewelry'){
            return true;
        }
        else if(item.category === category.toLowerCase())
            return true;
    })
    

    const handleCategory = (event, newCategory)=> {
        if(newCategory !== null)
            setCategory(newCategory);
    }


    return(
        <Parent>
            <Navbar />
            <Categories 
                category={category}
                handleCategory={handleCategory}
            />
            <Title>{category}</Title>
            <Products prods={filteredProds}/>
        </Parent>
    )
}