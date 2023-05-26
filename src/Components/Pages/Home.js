import React from 'react'
import Header from '../Header/Header'
import Cover from '../Header/Cover'
import Body from '../../UI/Body'

const Home = () => {

  return (
    <>
      <Header/>
      <Cover/>
      <Body>
        <section>
          <h1>Last added</h1>
        </section>
      </Body>
    </>
  )
}

export default Home