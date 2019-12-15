import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import Theme from './components/Theme';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Theme>
        <NavBar></NavBar>
        <Routes />
      </Theme>
    </div>
  );
};

export default App;
