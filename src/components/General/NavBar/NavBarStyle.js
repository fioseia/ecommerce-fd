import styled from "styled-components";
import { MenuRounded } from '@material-ui/icons'
import { Link } from "react-router-dom";
import { mobile } from '../../../styles/responsive'

export const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px' })}
`

export const Left = styled.div`
    flex: 1;
`

export const Menu = styled(MenuRounded)`
    cursor: pointer;
`

export const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ flex: '2' })}
`

export const Logo = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1{
        font-size: 40px;
        color: #010101;
        ${mobile({ fontSize: '27px' })}
    }

`

export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 8px;
    color: #010101;
    ${mobile({ justifyContent: 'center' })}
    ${mobile({ flex: '2' })}

`

export const Log = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 20px;
    color: #010101;
    ${mobile({ margin: '5px' })}

    h2{
        font-weight: 400;
        margin-right:5px;
    }
    
    
`

