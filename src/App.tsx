import { Box, Button,  createMuiTheme,  createTheme,  ThemeProvider,  Typography } from "@mui/material";
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import img from './assets/teste1.jpg'
import img2 from './assets/img2.png'

function App() {
  

  const [Number, setNumber] = useState(0)

  const theme = createTheme({
    typography: {
      fontFamily: 'Titan One, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: "local('Raleway'), local('Raleway-Regular')";
            unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
          }
        `,
      },
    },
  });

  function testaNumero() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
    const numero = Math.floor(Math.random() * numeros.length);
    const numeroFinal = (numeros[numero]);

    setNumber(numeroFinal)
  }

  return (
    <>
     <ThemeProvider theme={theme}>
      <div style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        
        height: '100vh',
        backgroundSize: 'cover'
      }}>
        <CssBaseline />

        
        <Box sx={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#FFF', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Box
        sx={{width: '350px',}}
        component="img"
        alt="The house from the offer."
        src={img2}
      />
          <Typography variant="h4" sx={{textAlign: "center", fontWeight: 'bold' }}>
            {Number === 0 ? "Clique no botão para sortear um numero" : "O numero sorteado foi o: "}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            {Number === 0 ? "" : Number}
          </Typography>
        </Box>
        <Box sx={{ marginTop:'10px', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Button size="large" variant="contained" color="error" onClick={testaNumero}>Sortear</Button>
        </Box>
      </div>
      </ThemeProvider>
    </>

  )
}

export default App
