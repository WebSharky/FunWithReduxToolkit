import styled from 'styled-components'

export const StyledThemeChanger = styled.div`
    
    padding: 1rem;
    display: flex;
    width: 100%;
    cursor: pointer;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    div {
        color: ${({ theme }) => theme.themeChangerColor};
        margin: 0.5rem;
    } 
    
    
    
`