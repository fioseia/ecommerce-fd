import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from '../../../styles/responsive'

export const Container = styled.div`
    padding: 20px;
    ${mobile({ flexDirection: 'column' })}
`

export const Title = styled.h2`
    font-weight: 300;
    text-align: center;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px; 
`

export const TopButton = styled.button`
    padding: 8px 10px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1.5px solid black;
    background-color: black;
    color: white;
`

export const ReturnButton = styled(Link)`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1.5px solid gray;
    background-color: transparent;
    color: black;
    text-decoration: none;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`

export const Info = styled.div`
    flex: 3;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({ display: 'flex', flexDirection: 'column', paddingRight: '0' })}
    
`

export const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    position: relative;
    ${mobile({ flex: 'none', height: '300px' })}

`

export const SummaryTitle = styled.h3`
    font-weight: 200;
    width: 100%;
    font-size:30px;
    text-align: center;
    margin: 20px 0;
`

export const SummaryItem = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const Button = styled.button`
    width: 90%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;
    position: absolute;
    bottom: 20px;
    left: 5%;
    cursor: pointer;
`