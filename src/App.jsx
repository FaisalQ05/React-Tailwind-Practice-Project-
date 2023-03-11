import './App.css'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import CompA from './components/CompA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Practice from './components/Practice'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
      {/* <Practice/> */}
      {/* <CompA/> */}
    </div>
  )
}

export default App
