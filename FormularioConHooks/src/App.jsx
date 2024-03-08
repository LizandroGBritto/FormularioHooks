import './App.css'
import {useState} from 'react'
import Form from './components/form'
import ShowUser from './components/ShowUser'

const App = ()=> {
  
  const [state, setState] = useState({
    userName: '',
    userLastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  return (
    <>
    <div>
    <Form inputs={state} setInputs = {setState}  />
      <ShowUser data={state} />
    </div>
    </>
  )
}

export default App
