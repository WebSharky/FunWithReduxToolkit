import styled from 'styled-components'

export const StyledSinglePost = styled.article`
    background-color: ${({ theme }) => theme.singlepostBackground};
    border-radius: 5px;
    border: solid 3px black;
    padding: 1rem;
    margin-top: 15px;
    margin-bottom: 15px;
`