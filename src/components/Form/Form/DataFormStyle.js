import styled from 'styled-components'

export const FormContainer = styled.form`
    height: auto;
    padding: 20px;
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border: 2px solid #010101;
    border-radius: 5px;
    z-index: 20;
`

export const Image = styled.img`
    flex: 1;
`

export const InfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const FormTitle = styled.h2`
    text-align: center;
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SubmitButton = styled.button`
    width: 90%;
    padding: 10px;
    margin: 10px;
    background-color: white;
    border: 1.5px solid black;
    border-radius: 5px;
    color: black;
    cursor: pointer;
`
