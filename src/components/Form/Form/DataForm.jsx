import { useRef, useState } from 'react';
import FormInput from '../FormInput/FormInput'
import faldaMargarita1 from '../../../images/faldaMargarita1.jpg'
import CheckoutButton from '../../General/CheckoutButton/CheckoutButton';
import { FormContainer, FormTitle, Image, InfoContainer, SubmitButton, Wrapper } from './DataFormStyle';

const DataForm = () => {
    const [button, setButton] = useState(true)
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        DNI: "",
        email: "",
        confirmarEmail: "",
        direccion: "",
        ciudad: "",
        provincia: "",
        CP: "",
        pais: ""
    })

    const nameRef = useRef();
    const lnameRef = useRef();
    const telRef = useRef();
    const dniRef = useRef();
    const emailRef = useRef();
    const confEmailRef = useRef();
    const adressRef = useRef();
    const cityRef = useRef();
    const regionRef = useRef();
    const countryRef = useRef();
    const cpRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            nombre: nameRef.current.value,
            apellido: lnameRef.current.value,
            telefono: telRef.current.value,
            DNI: dniRef.current.value,
            email: emailRef.current.value,
            confirmarEmail: confEmailRef.current.value,
            direccion: adressRef.current.value,
            ciudad: cityRef.current.value,
            provincia: regionRef.current.value,
            CP: cpRef.current.value,
            pais: countryRef.current.value
        })
        setButton(false)
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Image src={faldaMargarita1} />
            <InfoContainer>

                <FormTitle>INGRESA TUS DATOS</FormTitle>
                <FormInput type='text' refer={nameRef} placeholder={'Nombre'} st={'main'} />
                <FormInput type='text' refer={lnameRef} placeholder={'Apellido'} st={'main'} />
                <Wrapper>
                    <FormInput type='tel' refer={telRef} placeholder={'Telefono'} />
                    <FormInput type='number' refer={dniRef} placeholder={'DNI'} />
                </Wrapper>
                <FormInput type='email' refer={emailRef} placeholder={'Email'} st={'main'} />
                <FormInput type='email' refer={confEmailRef} placeholder={'Confirma tu email'} st={'main'} />
                <Wrapper>
                    <FormInput type='text' refer={adressRef} placeholder={'Direccion'} />
                    <FormInput type='text' refer={cityRef} placeholder={'Localidad'} />
                </Wrapper>
                <Wrapper>
                    <FormInput type='text' refer={regionRef} placeholder={'Provincia'} />
                    <FormInput type='number' refer={cpRef} placeholder={'C.P'} />
                </Wrapper>
                <FormInput type='text' refer={countryRef} placeholder={'Pais'} st={'main'} />
                {button ? <SubmitButton type='submit' >CREAR ORDEN</SubmitButton> : <CheckoutButton formData={formData} />}
            </InfoContainer>
        </FormContainer>
    )
}

export default DataForm
