import React, { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext';
import CategoryItem from '../CategoryItem/CategoryItem';
import { Container } from './CategoriesStyles';



const Categories = () => {
    const { categories } = useContext(ProductsContext);

    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories
