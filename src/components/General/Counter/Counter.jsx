import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../../context/CartContext'
import { AddBtn, Amount, AmountContainer, RemoveBtn } from './CounterStyle'
import { Add, Remove } from '@material-ui/icons'


const Counter = ({ prod }) => {

    const { cart, refreshCart, getQuantity, amount } = useContext(CartContext);
    const [counter, setCounter] = useState(amount);
    useEffect(() => {
        if (prod !== undefined) {
            const cartAux = cart.map((item) => {
                console.log('hola');
                if (item.shopId === prod.shopId) {
                    getQuantity(counter)
                    item.amount = counter;
                    item.subtotal = prod.price * counter;
                } else {
                    item.amount = prod.amount
                    item.subtotal = prod.price * prod.amount
                }
                return item;
            });
            refreshCart(cartAux, prod.price)
        } else {
            getQuantity(counter)
        }
    }, [counter])


    const add = () => {
        setCounter(amount + 1);
    }

    const substract = () => {
        if (amount > 1) {
            setCounter(amount - 1)
        } else {
            setCounter(0)
        }
    }


    return (
        <AmountContainer>
            <RemoveBtn id='substract' onClick={substract} ><Remove /></RemoveBtn>
            <Amount>{prod !== undefined ? amount : amount}</Amount>
            <AddBtn id='add' onClick={add} ><Add /></AddBtn>
        </AmountContainer>
    )
}

export default Counter


