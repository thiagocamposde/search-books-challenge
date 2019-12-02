import React from 'react'
import MainsScreen from './components/screens/MainScreen'
import theme from './Theme'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainsScreen />
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
