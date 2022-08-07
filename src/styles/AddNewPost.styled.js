import styled from 'styled-components'

export const StyledAddNewPost = styled.header`
    background-color: ${({ theme }) => theme.headerBackground};
    border-radius: 15px;
    border: solid 3px black;
    padding: 1rem;
    margin-top: 15px;
    width: 100%;

    button {
        margin: 0.5rem;
        padding: 1rem;
        background-color: #eb5146;
        border-radius: 15px;
        border: none;
        color: white;
        margin-top: 2rem;
    } 
    button:first-of-type {
        background-color: #65c28f;
    }
   
`