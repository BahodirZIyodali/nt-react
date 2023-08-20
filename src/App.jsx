import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import AuthPage from './pages/auth'
import Home from './pages/home'
import Blog from './pages/blog'
import CoursesPage from './pages/course'
import Crm from './pages/crm'


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserEmail(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setUserEmail('');
  };
  
  return (
    <div>
    <Header isLoggedIn={isLoggedIn} userEmail={userEmail} onLogout={handleLogout} />
    <Routes>
    <Route path="/auth" element={  <AuthPage />} />
    <Route path="/*" element={<Home/>}/>
    <Route path="/blog" element={<Blog/> } />
    <Route path="/course" element={<CoursesPage/> } />
    <Route path="/crm" element={<Crm  /> } />
    </Routes>
    <Footer/> 
    </div>
  )
}





export default App