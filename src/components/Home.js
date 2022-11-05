import React from 'react'
import {Helmet} from 'react-helmet-async'

function Home() {
  return (
    <>
      <Helmet>
       <title>My Home page</title>
       <meta name ="description" content='My Altschool second semester exam page'/>
       <link rel='canonical' href='/' />
      </Helmet>

      <h2 className='home-page'>Welcome! I am Temitope</h2>
    </>
  )
}

export default Home
