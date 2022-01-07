import styled from "styled-components";
import { Link } from "react-router-dom"
import { mobile } from '../../../styles/responsive'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: 'none' })}
`

export const Arrow = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: transparent;
    color: #010101;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index:2;
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideindex * -100}vw);
`

export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgContainer = styled.div`
    height: 100%;
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Image = styled.img`
    width: 100%;

`

export const InfoContainer = styled.div`
    width:50%;
    padding: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Title = styled.h2`
    letter-spacing: 5px;
    font-size: 50px;
    text-align: center;

`

export const Description = styled.p`
    letter-spacing: 5px;
    font-size: 20px;
    margin: 50px 0;
`

export const Button = styled(Link)`
    padding:10px;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid black;
    text-decoration: none;
    color: black;

    &:hover{
        background-color: #D7D0B7;
    }
`