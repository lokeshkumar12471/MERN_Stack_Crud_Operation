import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Users />} />
          <Route exact path='/create' element={<CreateUser />} />
          <Route exact path='/update/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
