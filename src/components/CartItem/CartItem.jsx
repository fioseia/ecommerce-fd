import { DeleteOutlineOutlined } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { Button, Details, Image, PriceDetail, Product, ProductColor, ProductDetail, ProductId, ProductPrice, ProductSize, ProductSizeWrapper, ProductTitle } from './CartItemStyle'

const CartItem = ({ item }) => {
    const [keys, setKeys] = useState([])
    const { onRemove } = useContext(CartContext);
    console.log(item);

    useEffect(() => {
        setKeys(Object.keys(item))
    }, [item])

    return (
        <Product>
            <ProductDetail>
                <Image src={item.images} />
                <Details>
                    <ProductTitle><b>Producto: </b>{item.product}</ProductTitle>
                    <ProductId><b>ID: </b>{item.id}</ProductId>
                    <ProductColor><b>Color: </b>{item.color}</ProductColor>
                    <ProductSizeWrapper><b>Medidas: </b>
                        {keys.map((key) => {
                            if (key.includes('medida') && item[key] !== undefined) {
                                return (<ProductSize>{key.replace(/[('_']+/g, ' ')}: {item[key]}</ProductSize>)
                            }
                        })}
                    </ProductSizeWrapper>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductPrice>Cantidad: {item.amount}</ProductPrice>
                <ProductPrice>Unitario: ${item.price}</ProductPrice>
                <ProductPrice>Subtotal: ${item.subtotal}</ProductPrice>
                <Button onClick={() => { onRemove(item.shopId) }}><DeleteOutlineOutlined /></Button>
            </PriceDetail>
        </Product>
    )
}

export default CartItem
