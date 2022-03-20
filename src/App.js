import Header from './components/Header';
import Search from './routes/Search';
import Home from './routes/Home';
import Detail from './routes/Detail';
import {Routes, Route} from 'react-router-dom';
import Faverite from './routes/Faverite';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const App = () => {
  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: 'light',
    },
  }));

  const updateTheme = (isDark) => {
    if(isDark) {
      const theme = createTheme({
        palette: {
          mode: 'light',
        },
      });
      setTheme(theme);
    } else {
      const theme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
      setTheme(theme);
    }
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header updateTheme={updateTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorite" element={< Faverite/>} />
      </Routes>
   </ThemeProvider>
   </>
  );
}

export default App;