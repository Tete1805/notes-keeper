import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './components/Theme';
import Routes from './components/Routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Theme>
        <Routes />
      </Theme>
    </div>
  );
};

export default App;
