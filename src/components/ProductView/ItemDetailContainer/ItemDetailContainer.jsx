import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../context/ProductsContext';
import { CartContext } from '../../../context/CartContext';
import Loading from '../../General/Loading/Loading';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [newItem, setNewItem] = useState({})
    const [loading, setLoading] = useState(true);
    const [option, setOption] = useState('');
    const [button, setButton] = useState('addBtn');

    const { products } = useContext(ProductsContext)
    const { itemId } = useParams();
    const { onAdd, amount, setAmount } = useContext(CartContext);

    const findItem = () => {
        return new Promise((resolve, reject) => {
            const res = products.find(product => product.id === itemId)
            resolve(res);
        })
    }

    useEffect(() => {
        setLoading(true);
        findItem()
            .then((resultado) => {
                setItem(resultado);
                setNewItem({
                    id: resultado.id,
                    product: resultado.title,
                    price: resultado.price,
                    images: resultado.images[0],
                });
                (resultado !== undefined) && setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {

            })
        return () => {
        }
    }, [products]);


    const handleChange = (e) => {
        const value = e.target.value;
        if (value === 'aMedida') {
            setOption('medida')
        } else {
            setOption('genericos')
        }
    }

    const handlerColor = (e) => {
        Object.defineProperty(newItem, 'color', {
            value: e.target.value,
            writable: true
        })
    }

    const handleSize = (e) => {
        newItem['medida_size'] = e.target.value
    }

    const handleMeasures = (e) => {
        let title = e.target.parentElement.firstChild.data;
        title = `medida_${title.replace(/[' ']+/g, '').toLowerCase()}`;
        newItem[title] = e.target.value
    }

    const handlerClick = () => {
        newItem.amount = amount
        onAdd(newItem);
        setButton('finishBtn')
    }

    return (
        <>
            {loading
                ?
                <Loading />
                :
                <ItemDetail
                    item={item}
                    handleChange={handleChange}
                    handlerColor={handlerColor}
                    handleSize={handleSize}
                    handleMeasures={handleMeasures}
                    handlerClick={handlerClick}
                    option={option}
                    button={button}
                    amount={amount}
                    setAmount={setAmount}
                />}

        </>
    )
}

export default ItemDetailContainer
