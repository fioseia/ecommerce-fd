/*
import { useState } from 'react'
import { storage, db } from '../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [uploading, setUploading] = useState('Crear producto')

    const handleChange = (e) => {
        const { name, value } = e.target;
        name !== 'price' ?
            setForm({
                ...form,
                [name]: value.toUpperCase(),
            })
            : setForm({
                ...form,
                [name]: parseInt(value),
            })
    }
    /*
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
    
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    }
    
        const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                const newProd = await addDoc(collection(db, 'prueba'), product)
                console.log(newProd.id);
    
            } catch (e) {
                console.log(e);
            }
            setProduct({})
        }
    
    return {
        form,
        errors,
        loading,
        response,
        uploading,
        handleChange,
        //handleChecked,
        //fileHandler,
        handleBlur,
        //handleSubmit
    }
}
*/