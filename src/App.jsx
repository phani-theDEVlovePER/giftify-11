import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroNext from './components/HeroNext'
import InputOuputBundler from './components/InputOuputBundler'
import Footer from './components/Footer'

const App = () => {
  console.log("check the console after submitting the form")
  console.log("the user data are stored in an Array")
  console.log("so the data can be passed to AI")
  console.log("then the output from the AI can be mapped and displayed to the user")
  console.log(" ")
  return (
    <>
      <section className='pagebg h-full min-w-full flex flex-col gap-[1rem] sm:gap-[4rem]'>

        {/* navbar */}
        <Navbar />

        {/* hero */}
        <Hero />
        <HeroNext />

        {/* input */} {/* output */}
        <InputOuputBundler />
      </section>
      <Footer />
    </>
  )
}

export default App