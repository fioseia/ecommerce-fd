/*
import React from 'react'
import { useForm } from '../../hooks/useForm'


const initialForm = {
    title: '',
    category: '',
    price: 0,
    measures: [],
    images: []
}

const validationsForm = (form) => {
    let errors = {};

    if (!form.title.trim()) {
        errors.title = 'Ingrese el nombre del producto'
    }

    return errors;
}

const UploadProdForm = () => {

    const {
        form,
        errors,
        loading,
        response,
        uploading,
        handleChange,
        handleChecked,
        fileHandler,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Nombre del producto:
                    <input type='text' value={form.title} name='title' onChange={handleChange} onBlur={handleBlur} required /></label>
                {errors.title && <p>{errors.title}</p>}
                <label htmlFor='category'>Categoria:
                    <input type='text' value={form.category} name='category' onChange={handleChange} onBlur={handleBlur} required />
                </label>
                <label htmlFor='price'>Precio:
                    <input type="number" value={form.price} name='price' onChange={handleChange} onBlur={handleBlur} required />
                </label>
                <div>
                    <p>Medidas requeridas</p>
                    <label htmlFor='measures'>Ancho de hombros
                        <input type="checkbox" value='Ancho de hombros' name="measures" onChange={handleChecked} onBlur={handleBlur} />
                    </label>
                    <label htmlFor='measures'>Contorno de busto
                        <input type="checkbox" value='Contorno de busto' name="measures" onChange={handleChecked} onBlur={handleBlur} />
                    </label>
                    <label htmlFor='measures'>Contorno de cintura
                        <input type="checkbox" value='Contorno de cintura' name="measures" onChange={handleChecked} onBlur={handleBlur} />
                    </label>
                    <label htmlFor='measures'>Contorno de cadera
                        <input type="checkbox" value='Contorno de cadera' name="measures" onChange={handleChecked} onBlur={handleBlur} />
                    </label>
                    <label htmlFor='measures'>Largo total
                        <input type="checkbox" value='Largo total' name="measures" onChange={handleChecked} onBlur={handleBlur} />
                    </label>
                    <label htmlFor='measures'>Altura
                        <input type="checkbox" value='Altura' name="measures" onChange={handleChecked} onBlur={handleBlur} />
                    </label>
                </div>
                <input type="file" name="urlImg" onChange={(e) => fileHandler(e, `${form.title}1`)} onBlur={handleBlur} required />
                <input type="file" name="urlImg" onChange={(e) => fileHandler(e, `${form.title}2`)} onBlur={handleBlur} />
                <input type="file" name="urlImg" onChange={(e) => fileHandler(e, `${form.title}3`)} onBlur={handleBlur} />

                {uploading === 'Crear producto' ? <input type="submit" value={uploading} /> : <input type="submit" value={uploading} disabled />}
            </form>
        </div>
    )
}

export default UploadProdForm
*/