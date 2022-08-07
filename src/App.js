import {useState} from 'react';
import './App.css';
import { ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme } from "./styles/Themes"
import PostsList from './components/PostsList';
import AddPostForm from './components/AddPostForm';
import GlobalStyles from './styles/Globals';
import { StyledComponentContainer } from './styles/ComponentContainer.styled';
import ThemeChanger from './components/ThemeChanger';



function App() {
  
  const [isThemeDark, setIsThemeDark] = useState('false') 
  const themeToggler = () => {
    setIsThemeDark(!isThemeDark)
}


  return (
    <ThemeProvider theme = { isThemeDark ? darkTheme : lightTheme }>
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <StyledComponentContainer>
        <ThemeChanger themeToggler={themeToggler} isThemeDark={isThemeDark}/> 
        <AddPostForm/>
        <PostsList />
        </StyledComponentContainer>
      </header>
    </div>
  </ThemeProvider>
  );
}

export default App;
