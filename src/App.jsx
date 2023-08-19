import React from 'react'
import Header from './components/header'
import Intro from './pages/intro'
import Advantages from './pages/advantages'
import Courses from './pages/courses'
import Workplaces from './pages/workplace'
import Comments from './pages/comments'
import Help from './pages/help'
import Footer from './components/footer'


const App = () => {
  return (
    <div>
    <Header/>
    <Intro/>
    <Advantages/>
    <Courses/>
    <Workplaces/>
    <Comments/>
    <Help/>
    <Footer/>
    </div>
  )
}

export default App