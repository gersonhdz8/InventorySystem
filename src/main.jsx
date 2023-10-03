import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'
import RegisterForm from './pages/RegisterForm.jsx'
import LoginForm from './pages/LoginForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <LandingPage></LandingPage>
    <RegisterForm></RegisterForm>
    <LoginForm></LoginForm>


  </React.StrictMode>,
)
