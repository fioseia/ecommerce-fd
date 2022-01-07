import { useParams } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h2`
    margin-bottom: 30px;
    font-size: 30px;
`

const Subtitle = styled.h3`
    font-weight: 400;
`

const OrderData = () => {

    const { orderId } = useParams();

    return (
        <Container>
            <Title> MUCHAS GRACIAS POR TU COMPRA</Title>
            <Subtitle>TU NUMERO DE ORDEN ES: N° {orderId} </Subtitle>
        </Container>
    )
}

export default OrderData
