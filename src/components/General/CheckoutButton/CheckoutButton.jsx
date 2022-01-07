import { addDoc, collection } from "firebase/firestore"
import { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../../../context/CartContext"
import { db } from "../../../firebase/firebase"

const Button = styled.button`
    width: 90%;
    padding: 10px;
    margin: 10px;
    background-color: #010101;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`

const CheckoutButton = ({ formData }) => {
    const auxCart = [];
    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = e => {
        e.preventDefault();
        console.log(cart);

        cart.map((cartItem) => {
            const newItem = {};
            let keys = Object.keys(cartItem);
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                if (key !== 'images' && cartItem[key] !== undefined) {
                    newItem[key] = cartItem[key]
                }
            }
            auxCart.push(newItem)
        })

        const ref = collection(db, "orders")
        const order = {
            comprador: { ...formData },
            orden: [...auxCart],
            total: totalPrice
        }
        addDoc(ref, order).then(res => {
            alert(`Tu numero de compra es ${res.id}`)
            clearCart();
        })
    }


    return (
        <Button onClick={createOrder}>REALIZAR COMPRA</Button>
    )
}

export default CheckoutButton
