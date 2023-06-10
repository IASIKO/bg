import React from 'react'
import Cover from '../Header/Cover'
import Body from '../../UI/Body'
import LastAddedComponent from '../Pages/home/LastAddedComponent'
import Categories from '../Pages/home/Categories'


const Home = () => {

  return (
    <>
      <Cover/>
      <Body>
        <LastAddedComponent/>
        <Categories/>
      </Body>
    </>
  )
}

export default Home