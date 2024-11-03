/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import Navbar from "../components/Navbar";
import img from "../assets/heroimg.jpg"
import { useNavigate } from "react-router-dom";

const Home = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    height:100vh;
`;

const FeatureContainer = styled.div`
    width:100%;
    height:80%;
    display:flex;
    flex-grow:1;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`

const DetailsDiv = styled.div`
    position:absolute;
    top:40%;
    right:10%;
    display:flex;
    height: 20rem;
    width: 50rem;
`

const Title = styled.h1`
    color:white;
    margin:0;
`

const Button = styled.button`
    bottom: 60%;
    right: 42%;
    position: absolute;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
`

export default function HomePage(){
    const navigate = useNavigate()

    const handleNavigation = () =>{
        navigate('/shop')
    }
    return(
        <Home>
            <Navbar />
            <FeatureContainer>
                <DetailsDiv>
                    <Title>Elevate your style.</Title>
                    <Button onClick={handleNavigation}>Shop Now</Button>
                </DetailsDiv>
            </FeatureContainer>
            
            
        </Home>
    )
}