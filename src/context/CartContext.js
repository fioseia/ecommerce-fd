import { createContext, useState } from "react";
import { randomCode } from "../helpers/randomCode"

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const getQuantity = (amount) => {
        setAmount(amount);
    }

    const refreshCart = (cartAux, price) => {
        setCart(cartAux);
        setTotalPrice(totalPrice + price * amount);
        setTotalProducts(totalProducts + amount);
    }


    const onAdd = (newItem) => {
        const itemExist = cart.find((item) => (
            item.id === newItem.id
            && item.color === newItem.color
            && item.medida_size === newItem.medida_size
            && item.medida_anchodehombros === newItem.medida_anchodehombros
            && item.medida_contornodebusto === newItem.medida_contornodebusto
            && item.medida_contornodecintura === newItem.medida_contornodecintura
            && item.medida_contornodecadera === newItem.medida_contornodecadera
            && item.medida_largototal === newItem.medida_largototal
            && item.medida_altura === newItem.medida_altura));
        console.log(itemExist);

        if (!itemExist) {
            setCart([...cart, {
                ...newItem,
                color: newItem.color,
                medida_size: newItem.medida_size,
                medida_anchodehombros: newItem.medida_anchodehombros,
                medida_contornodebusto: newItem.medida_contornodebusto,
                medida_contornodecintura: newItem.medida_contornodecintura,
                medida_contornodecadera: newItem.medida_contornodecadera,
                medida_largototal: newItem.medida_largototal,
                medida_altura: newItem.medida_altura,
                amount: newItem.amount,
                subtotal: newItem.price * newItem.amount,
                shopId: randomCode(15)
            }]);
            setTotalPrice(totalPrice + (newItem.price * amount));
            setTotalProducts(totalProducts + amount);
        } else {
            console.log('holaaaaaaaaa');
            const cartAux = cart.map((item) => {
                if (
                    item.id === newItem.id
                    && item.color === newItem.color
                    && item.medida_size === newItem.medida_size
                    && item.medida_anchodehombros === newItem.medida_anchodehombros
                    && item.medida_contornodebusto === newItem.medida_contornodebusto
                    && item.medida_contornodecintura === newItem.medida_contornodecintura
                    && item.medida_contornodecadera === newItem.medida_contornodecadera
                    && item.medida_largototal === newItem.medida_largototal
                    && item.medida_altura === newItem.medida_altura) {

                    item.amount += newItem.amount;
                    item.subtotal += newItem.price * newItem.amount;
                }
                return item;
            });
            setCart(cartAux);
            setTotalPrice(totalPrice + (newItem.price * amount));
            setTotalProducts(totalProducts + amount);
        }
    };

    const onRemove = (shopId) => {
        const myItem = cart.find((item) => item.shopId === shopId);
        const cartAux = cart.filter((item) => item.shopId !== shopId);
        setCart(cartAux);
        setTotalProducts(totalProducts - myItem.amount);
        setTotalPrice(totalPrice - myItem.subtotal);
    };

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, onAdd, amount, totalProducts, totalPrice, onRemove, setAmount, setCart, setTotalPrice, setTotalProducts, refreshCart, getQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;