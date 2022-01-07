import styled from "styled-components"

const Container = styled.div`
    display: inline-block;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    padding: 5px;
    margin: 10px;
    width: ${props => props.width === 'main' ? '90%' : '80%'};
    background-color: white;
    color: #010101;
    border: none;
    border-bottom: 1.5px solid #010101;

`

const FormInput = (props) => {

    return (
        <Container>
            <Input placeholder={props.placeholder} ref={props.refer} width={props.st} required />
        </Container>
    )
}

export default FormInput
