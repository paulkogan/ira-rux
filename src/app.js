import React, {} from "react";
import ReactDOM, {} from "react-dom";
import AppRouter, {} from "./components/appRouter"
import { MuiThemeProvider, createMuiTheme, getMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import "normalize.css/normalize.css"; //all browsers look the same
import "./styles/style.scss"; //take thos out when we go with themes


const iraTheme1 = createMuiTheme({

  palette: {
    primary: { main: '#00264d'}, //
    secondary: { main: '#004d99' },
    specialRed: '#ff0000',



    // lighter blue
  //  primary: { main: '#002080' }, /
//  '#172226' black
//
//    secondary: { main:  },


    contrastThreshold: 3,
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,

  },

  appBar: {
    color: green[700],
    backgroundColor: green[200],
    height: 100,
  },


  typography: {
    // Tell Material-UI what the font-size on the html element is.
    fontSize: 16,
    fontFamily: [
      'Roboto',
      'Tahoma',
      'Arial',
      '"Helvetica Neue"',
      'Courier',
      'Georgia',
      'sans-serif',
      'Courier',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
    ].join(','),


  },
});



function App() {
  return (
    <MuiThemeProvider theme={iraTheme1}>
      <AppRouter />
    </MuiThemeProvider>
  );
}



ReactDOM.render(<App />, document.getElementById('root'));
