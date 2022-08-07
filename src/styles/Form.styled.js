import styled from 'styled-components'

export const StyledForm = styled.div`
    background-color: white;
    border-radius: 15px;
    border: solid 3px black;
    padding: 1rem;
    margin-top: 15px;
    display: flex;

    form {
        width: 100%;
        justify-content: center;
    }
   textarea, input {
        width: 100%;
        padding: 0.5rem;
        font-size: large;
         
    } & :focus {
        background-color: aliceblue;
    }
    label {
        color: black;
    }
    div {
        width: 100%;
        margin-top: 1rem;
    }
`