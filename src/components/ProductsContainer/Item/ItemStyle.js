import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../styles/responsive";
import { colors } from "../../../styles/styles";

export const Links = styled.div`
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index:2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: all 0.5s ease;
    ${mobile({ width: '100%' })}
`

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    max-width: 350px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px;
    position: relative;
    padding: 10px;
    cursor: pointer;

    &:hover ${Links}{ 
        opacity: 1;
    }
`

export const Image = styled.img`
    width: 80%;
    object-fit: cover;
    ${mobile({ width: '100%' })}
    
`

export const Icon = styled(Link)`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    color: #010101;

    &:hover{
        background-color: ${colors.color1};
        transform: scale(1.1);
    }
`

export const Info = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;

`

export const Price = styled.h3`
    font-size: 18px;
    font-weight: 300;
`

