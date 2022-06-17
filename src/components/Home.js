import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import NavBar from './NavBar'

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
