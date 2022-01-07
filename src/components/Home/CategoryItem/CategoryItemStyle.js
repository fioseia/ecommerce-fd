import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../styles/responsive";


export const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
    min-width: 300px;
    ${mobile({ height: '30vh' })}
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 20px;
`

export const Button = styled(Link)`
    text-decoration: none;
    color: gray;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
`