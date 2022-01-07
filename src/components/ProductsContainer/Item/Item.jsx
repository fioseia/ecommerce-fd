import { useEffect, useState } from 'react';
import { Container, Icon, Image, Info, Links, Price, Title } from './ItemStyle'
import Skeleton from '@mui/material/Skeleton';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Item = ({ item }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        return () => {

        }
    }, [])

    return (
        <Container>
            {loading ? <Skeleton variant="rectangular" width={200} height={300}>
                <Image src={item.images[0]} />
            </Skeleton> : <Image src={item.images[0]} />}
            <Links>
                <Icon to={`/item/${item.id}`}>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon to={`/item/${item.id}`}>
                    <FavoriteBorderOutlined />
                </Icon>
            </Links>
            {loading ? <Skeleton>
                <Info>
                    <Title>{item.title}</Title>
                    <Price>$ {item.price}</Price>
                </Info>
            </Skeleton> :
                <Info>
                    <Title>{item.title}</Title>
                    <Price>$ {item.price}</Price>
                </Info>
            }
        </Container>
    )
}

export default Item;
