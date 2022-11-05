import React from 'react'
import {Helmet} from 'react-helmet-async'

function About() {
  return (
    <>
      <Helmet>
        <title>This is my page</title>
        <meta
          name='description'
          content='My Altschool second semester exam About page'
        />
        <link rel='canonical' href='/About' />
      </Helmet>

      <h2 className='topic'>Second Semester Examination Project</h2>
      <h3>Alt Schhol exam is not a childs play......</h3>

      
    </>
  )
}

export default About
