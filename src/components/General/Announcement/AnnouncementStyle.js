import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles/styles";

const animate1 = keyframes`
    from {transform:translate(0%)}
    to {transform:translate(-100%)}
`
const animate2 = keyframes`
    from {transform:translate(100%)}
    to {transform:translate(0%)}
`

export const Container = styled.div`
    background-color: ${colors.color2};
    height: 20px;
    font-size:12px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    font-weight: 600;

    div{
        width: 100%;
        position: absolute;
        left: 0;
        transform: translate(0);

        p{
            width: 100%;
            color: #FFFFFF;
        }
    }

    .an1{
        animation: ${animate1} linear 10s infinite;
    }
    .an2{
        animation: ${animate2} linear 10s infinite;
    }

`