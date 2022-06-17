import React from 'react'
import Form from '../components/SearchForm'
import Movies from '../components/Movies'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <main>
      <NavBar/>
      <Form/>
      <Movies/>
    </main>
    )
}

export default Home
