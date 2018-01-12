import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import DataProvider from './DataProvider'

const App = () =>
  <BrowserRouter>
    <DataProvider />
  </BrowserRouter>

export default App
