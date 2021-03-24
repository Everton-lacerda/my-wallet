import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout'; 

import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Routes from './routes';

import GlobalStyles from "./styles/GlobalStyles";
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles /> 
            <Routes />
        </ThemeProvider>
    );
}

export default App;