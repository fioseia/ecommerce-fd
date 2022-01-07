import { Badge } from "@material-ui/core"
import { LocalMallOutlined } from "@material-ui/icons"
import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { CartContext } from "../../../context/CartContext"


const Cart = styled(Link)`
    color: #010101;
`

const CartWidget = () => {

    const { totalProducts } = useContext(CartContext)
    return (
        <Cart to={`/cart`}>
            <Badge badgeContent={totalProducts}>
                <LocalMallOutlined />
            </Badge>
        </Cart>
    )
}

export default CartWidget
