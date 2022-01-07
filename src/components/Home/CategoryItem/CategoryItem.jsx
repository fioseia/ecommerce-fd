import { Container, Image, Info, Title, Button } from './CategoryItemStyle';

const CategoryItem = ({ item }) => {

    return (
        <Container>
            <Image src={item.image} />
            <Info>
                <Title>{item.title}</Title>
                <Button to={item.path}>COMPRAR</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
