import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../../context/ProductsContext';
import Loading from '../../General/Loading/Loading';
import ItemList from '../ItemList/ItemList';
import { Container, Title } from './ItemListContainerStyle';

const ItemListContainer = () => {

    const { products } = useContext(ProductsContext)
    const { categId } = useParams();
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('')


    const findItems = () => {
        return new Promise((resolve, reject) => {
            let res = [];
            if (categId !== 'vertodo') {
                res = products.filter(product => product.category === categId.toUpperCase())
            } else {
                res = products
            }
            resolve(res)
        })
    }


    useEffect(() => {
        setLoading(true);
        findItems()
            .then((resultado) => {
                setItemList(resultado);
            })
            .then(() => {
                if (categId === 'vertodo') {
                    setCategory(' VER TODO ');
                } else {
                    setCategory(categId.toUpperCase());
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
        return () => {
        }

    }, [categId, products]);

    return (
        <Container>
            <Title>{category}</Title>
            {loading ? <Loading /> : <ItemList itemList={itemList} />}
        </Container>
    )
}

export default ItemListContainer;
