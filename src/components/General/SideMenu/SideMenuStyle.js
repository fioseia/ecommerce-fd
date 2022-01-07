import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(241, 241, 241, .8);
    position: absolute;
    top: 0;
    left: ${(props) => props.show};
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: 850ms;
    z-index: 3;
`

export const Close = styled.span`
cursor: pointer;
`

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
`

export const Item = styled(Link)`
    list-style: none;
    color: #010101;
    text-decoration: none;
    margin: 5px 0;
    
`

export const SocialWraper = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-evenly;
`

export const SocialLink = styled.a`
    color: #010101;
    transition: all 0.5 ease-in-out;

    &:hover{
        transform: scale(1.1);
    }
`

