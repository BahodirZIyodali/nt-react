import React from 'react'
import Intro from '../components/intro'
import Advantages from '../components/advantages'
import Courses from '../components/courses'
import Workplaces from '../components/workplace'
import Comments from '../components/comments'
import Help from '../components/help'

const Home = () => {
  return (
    <div>
    <Intro/>
     <Advantages/>
     <Courses/>
     <Workplaces/>
      <Comments/>
     <Help/>
    </div>
  )
}

export default Home