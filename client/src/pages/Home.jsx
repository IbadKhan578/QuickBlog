import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/bloglist'
import Blogcard from '../components/Blogcard'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <Bloglist />
    <Newsletter />
    </>
  )
}

export default Home