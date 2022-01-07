import styled from "styled-components";
import { mobile } from "../../../styles/responsive";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    ${mobile({ padding: '0' })}
`