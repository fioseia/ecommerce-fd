import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles/styles";
import { mobile } from '../../../styles/responsive'

export const Container = styled.div`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    ${mobile({ flexDirection: 'column', padding: '20px', justifyContent: 'center', alignItems: 'center' })}

`

export const ImgContainer = styled.div`
    flex: 1;
    ${mobile({ width: '80vw' })}
`

export const Image = styled.img`
    width: 100%;
    min-width: 300px;
    height:90vh;
    object-fit: cover;
    margin-bottom: 50px;
    ${mobile({ minWidth: '200px', height: 'auto' })}
`

export const InfoContainer = styled.div`
    width: 70%;
    flex: 1;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({ width: '80vw', padding: '10px' })}
`

export const Title = styled.h2`
    font-weight: 200;
    align-self: flex-start;
    ${mobile({ fontSize: '22px' })}
`

export const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
    margin: 10px;
    align-self: flex-start;
    ${mobile({ fontSize: '30px' })}
`
export const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 20px;
    ${mobile({ fontSize: '15px' })}
`
export const ColorContainer = styled.div`
    width: 100%;
`
export const Label = styled.label`
    width: 100%;
    `
export const Color = styled.span`
    height:20px;
    width:20px;
    border-radius: 50%;
    border: 1px solid grey;
    margin: 0 2px;
    background-color:${(props) => props.color};
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease;
    ${mobile({ width: '18px', height: '18px' })}

    &:hover{
        transform: scale(1.1);
    }
`
export const FilterColor = styled.input`
    display: none;
            
    &:checked + ${Color}{
        border: 2px solid black;
        transform: scale(1.3);
    }
`
export const FilterDescription = styled.p`
    margin: 5px 0;
    font-size: 16px;
    font-weight: 400;
    ${mobile({ fontSize: '13px' })}
`

export const FilterSize = styled.select`
    padding: 5px;
    background-color:transparent;
    border: 1px solid gray;
    cursor: pointer;    
    border-radius:5px;
`

export const FilterSizeOption = styled.option`
    text-align: center;
    cursor: pointer;
`

export const FilterInfoLink = styled.button`
    margin: 5px 0;
    background-color: transparent;
    border:none;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 200;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 2px;
`

export const MeasureContainer = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
`

export const MeasureValue = styled.label`
    font-weight: 200;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const MeasureInput = styled.input`
    border-radius: 4px;
    border: 1px solid gray;
    
    &:focus{
        border:2px solid ${colors.color3};
        outline: none;
    }
`

export const AddContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    ${mobile({ flexDirection: 'column', justifyContent: 'space-between', height: '110px', margin: '30px 0' })}
`

export const AddButton = styled.button`
    width: 200px;
    padding: 10px;
    border: 1.5px solid ${colors.color3};
    background-color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;

    &:hover{
        transform: scale(1.03);
        background-color:${colors.color2}
    }

    span{
        margin-right: 10px;
        color: ${colors.color3}
    }
`
export const FinishButton = styled(Link)`
    text-decoration: none;
    color: #010101;
    width: 200px;
    padding: 10px;
    border: 1.5px solid ${colors.color3};
    background-color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;

    &:hover{
        transform: scale(1.03);
        background-color:${colors.color2}
    }

    span{
        margin-right: 10px;
        color: ${colors.color3}
    }
`