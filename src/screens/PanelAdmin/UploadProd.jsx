/*import { useState } from 'react';
import { storage, db } from '../../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadProd = () => {
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [measures, setMeasures] = useState([]);
    const [uploading, setUploading] = useState('Crear producto')

    const handleChange = (e) => {
        e.target.name !== 'price' ?
            setProduct({
                ...product,
                [e.target.name]: e.target.value.toUpperCase(),
                measures,
                images
            })
            : setProduct({
                ...product,
                [e.target.name]: parseInt(e.target.value),
            })

    };

    const handleChecked = (e) => {
        if (e.target.checked === true) {
            measures.push(e.target.value.toUpperCase())
        } else {
            const i = measures.indexOf(e.target.value.toUpperCase());
            const newArr = measures.filter((item, index) => index !== i);
            setMeasures(newArr)
        }
    }

    const fileHandler = async (e, title) => {
        setUploading('Cargando..')
        const file = e.target.files[0];

        if (file !== undefined) {
            const fileName = title.split(" ").join("").toLowerCase();
            const storageRef = ref(storage, fileName);
            await uploadBytes(storageRef, file)
                .then((snapshot) => {
                    console.log('cargado');
                }).then(() => {
                    getDownloadURL(ref(storage, fileName)).then((url) => {
                        images.push(url)
                        setUploading('Crear producto')
                    })
                })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newProd = await addDoc(collection(db, 'products'), product)
            console.log(newProd.id);

        } catch (e) {
            console.log(e);
        }
        setProduct({})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="POST">
                <label htmlFor='title'>Nombre del producto:</label>
                <input type='text' value={product.title} name='title' onChange={handleChange} />
                <label htmlFor='category'>Categoria:</label>
                <input type='text' value={product.category} name='category' onChange={handleChange} />
                <label htmlFor='price'>Precio:</label>
                <input type="number" value={product.price} name='price' onChange={handleChange} />
                <div>
                    <p>Medidas requeridas</p>
                    <label htmlFor='measures'>Ancho de hombros
                        <input type="checkbox" value='Ancho de hombros' name="measures" onChange={handleChecked} />
                    </label>
                    <label htmlFor='measures'>Contorno de busto
                        <input type="checkbox" value='Contorno de busto' name="measures" onChange={handleChecked} />
                    </label>
                    <label htmlFor='measures'>Contorno de cintura
                        <input type="checkbox" value='Contorno de cintura' name="measures" onChange={handleChecked} />
                    </label>
                    <label htmlFor='measures'>Contorno de cadera
                        <input type="checkbox" value='Contorno de cadera' name="measures" onChange={handleChecked} />
                    </label>
                    <label htmlFor='measures'>Largo total
                        <input type="checkbox" value='Largo total' name="measures" onChange={handleChecked} />
                    </label>
                    <label htmlFor='measures'>Altura
                        <input type="checkbox" value='Altura' name="measures" onChange={handleChecked} />
                    </label>
                </div>
                <input type="file" name="urlImg" onChange={(e) => fileHandler(e, `${product.title}1`)} />
                <input type="file" name="urlImg" onChange={(e) => fileHandler(e, `${product.title}2`)} />
                <input type="file" name="urlImg" onChange={(e) => fileHandler(e, `${product.title}3`)} />

                {uploading === 'Crear producto' ? <input type="submit" value={uploading} /> : <input type="submit" value={uploading} disabled />}
            </form>
        </div>
    )
}

export default UploadProd
*/