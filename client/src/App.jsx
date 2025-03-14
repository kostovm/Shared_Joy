import { Routes, Route, useNavigate } from "react-router-dom"

import Path from "./paths"
import { AuthProvider } from './contexts/authContext'

import AboutUs from "./component/about-us/AboutUs"
import Catalog from "./component/catalog/Catalog"
import Header from "./component/header/Header"
import HomePage from "./component/home/HomePage"
import LoginForm from './component/login/LoginForm'
import RegisterForm from "./component/register/RegisterForm"
import CreateForm from "./component/create/CreateForm"
import Logout from './component/logout/Logout'
import NotFound from "./component/not-found/NotFound"
import AuthGuard from "./component/guards/AuthGuard"
import EditForm from "./component/edit/EditForm";
import ErrorBoundary from './component/error-boundary/ErrorBoundary'

function App() {

  return (
    <div className="container">
      <ErrorBoundary>
      <AuthProvider>
      <Header />
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
        <Route path={Path.Catalog} element={<Catalog />} />
        <Route path={Path.About} element={<AboutUs />} />
        <Route path={Path.Create} element={<AuthGuard><CreateForm /></AuthGuard>} />
        <Route path={Path.Edit} element={<AuthGuard><EditForm /></AuthGuard>} />
        <Route path={Path.Register} element={<RegisterForm />} />
        <Route path={Path.Login} element={<LoginForm />} />
        <Route path={Path.Logout} element={<AuthGuard><Logout /></AuthGuard>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </AuthProvider>
      </ErrorBoundary>
    </div>
  )
}

export default App
