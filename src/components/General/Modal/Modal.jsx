import { Close } from '@material-ui/icons'
import styled from 'styled-components'
import DataForm from '../../Form/Form/DataForm'
import lino from '../../../images/lino.jpg'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    &:before {
        content:'';
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        background-image: url(${lino});
        background-size: cover;
        opacity: 0.8;
        background-repeat: no-repeat;


    }
`

const Button = styled.button`
    position: absolute;
    top: 60px;
    right: 60px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 20;
`

const Modal = ({ handlerModal }) => {
    return (
        <Container>
            <Button onClick={handlerModal}><Close style={{ fontSize: '30px' }} /></Button>
            <DataForm />
        </Container>
    )
}

export default Modal
