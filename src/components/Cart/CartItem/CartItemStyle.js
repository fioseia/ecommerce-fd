import styled from "styled-components"
import { mobile } from "../../../styles/responsive"

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    ${mobile({ flexDirection: 'column', alignItems: 'center' })}
    
`

export const ProductDetail = styled.div`
    flex:2;
    display: flex;
    ${mobile({ flexDirection: 'column', alignItems: 'center' })}
`

export const Image = styled.img`
    width:200px;
    ${mobile({ width: '300px' })}
`
export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
export const ProductTitle = styled.span``
export const ProductId = styled.span``
export const ProductColor = styled.div`
    
`
export const ProductSizeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`
export const ProductSize = styled.span`
    font-size:12px;
`
export const PriceDetail = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', flex: 'none', height: '150px' })}

`

export const ProductPrice = styled.div`
    font-weight: 300;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1)
    }
`