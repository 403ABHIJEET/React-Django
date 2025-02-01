import './App.css'
import { Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import Show from './pages/Show'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/form' element={<Form />} ></Route>
        <Route path='/show' element={<Show />} ></Route>
      </Routes>
    </div>
  )
}

export default App
