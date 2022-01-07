import Item from '../Item/Item';
import { Container } from './ItemListStyle'

const ItemList = ({ itemList }) => {
    return (
        <Container>
            {itemList.map(item => <Item item={item} key={item.id} />)}
        </Container>
    )
}

export default ItemList;