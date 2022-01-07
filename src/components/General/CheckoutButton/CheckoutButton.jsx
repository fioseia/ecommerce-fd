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
    const items = [];
    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = e => {
        e.preventDefault();
        console.log(cart);

        cart.map((item) => {
            const i = {
                producto: item.product,
                id: item.id,
                cantidad: item.amount,
                precio: item.price,
                color: item.color,
                medidas: JSON.stringify(item.measures)
            }
            items.push(i)
        })

        const ref = collection(db, "orders")
        const order = {
            comprador: { ...formData },
            orden: { ...items },
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
