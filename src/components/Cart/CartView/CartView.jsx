import { DeleteOutlineOutlined } from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext';
import CartItem from '../../Cart/CartItem/CartItem';
import Modal from '../../General/Modal/Modal';
import { Bottom, Button, Container, Info, ReturnButton, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton } from "./CartViewStyle"


const CartView = () => {
    const [modal, setModal] = useState(false);
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handlerModal = () => {
        setModal(!modal)
    }

    return (
        <Container>
            {modal && <Modal handlerModal={handlerModal} />}
            <Title>TU COMPRA</Title>
            <Top>
                <ReturnButton to={'/categoria/vertodo'}>SEGUIR COMPRANDO</ReturnButton>
                <TopButton onClick={clearCart} ><DeleteOutlineOutlined /> VACIAR CARRITO </TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.length > 0 ?
                        cart.map((item, index) => <CartItem key={`${item.id}${index}`} item={item} />)
                        : <h3>TU CARRITO ESTA VACIO</h3>}
                </Info>
                <Summary>
                    <SummaryTitle>TU ORDEN</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal: </SummaryItemText>
                        <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Costo de envio: </SummaryItemText>
                        <SummaryItemPrice>$300</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText >Total: </SummaryItemText>
                        <SummaryItemPrice>{totalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <Button onClick={handlerModal}>FINALIZAR COMPRA</Button>
                </Summary>
            </Bottom>
        </Container>
    )
}

export default CartView
