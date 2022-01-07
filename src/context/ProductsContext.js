import { createContext, useState, useEffect } from 'react';
import { db } from '../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { categoriesData } from '../helpers/categoriesData';


export const ProductsContext = createContext([]);

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState(categoriesData);

    const productsCollection = collection(db, 'products');

    const getData = (collection) => {
        return new Promise((resolve, reject) => {
            getDocs(collection)
                .then((res) => {
                    const results = res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                    resolve(results);
                }).catch((err) => {
                    console.log(err);
                })
        })
    };

    useEffect(() => {
        getData(productsCollection)
            .then((resultado) => {
                const res = resultado
                setProducts(res)
            })
        return () => {

        }
    }, [])

    return (
        <ProductsContext.Provider value={{ products, setProducts, categories }}>
            {children}
        </ProductsContext.Provider>
    )
}