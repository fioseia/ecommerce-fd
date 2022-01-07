import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../styles/responsive";

export const Container = styled.div`
    width: 100%;
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`

export const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;
    ${mobile({ backgroundColor: 'black' })}
    ${mobile({ color: 'white' })}

`
export const Logo = styled(Link)`
    font-weight: 200;
    font-size: 18px;
    color: #010101;
    text-decoration: none;
    ${mobile({ color: 'white' })}
`

export const Desc = styled.p`
    margin: 20px 0;
`

export const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`

export const Title = styled.h3`
    margin-bottom: 30px;
`

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height:50%;
`

export const ListItem = styled(Link)`
    width: 50%;
    text-decoration: none;
    color: #010101;
    margin-bottom: 10px;
`

export const Right = styled.div`
    flex: 1;
    padding: 20px;

`

export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

