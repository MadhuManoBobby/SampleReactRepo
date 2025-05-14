import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddCustomer } from './AddCustomer'
import { Provider } from 'react-redux'
import { Store } from './Store'
import { ViewCustomer } from './ViewCustomer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={Store}>
      <h1>Welcome to React Vite Project</h1>
      <AddCustomer/>
      <ViewCustomer/>
      </Provider>
    </>
  )
}

export default App
