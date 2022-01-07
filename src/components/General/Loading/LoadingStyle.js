import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles/styles";

const animate1 = keyframes`
    to {transform: rotate(360deg)}
`

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: ${colors.color2};
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h2{
        font-size: 1rem;
        color: #f1f1f1;
    }
`

export const Loader = styled.div`
    height: 80px;
    width: 80px;
    border: 8px solid #f1f1f1;
    border-top-color: ${colors.color1};;
    border-radius: 50%;
    animation: spin 1.5s infinite linear;
    margin: 30px auto;
    animation: ${animate1} 1.5s infinite linear;
`