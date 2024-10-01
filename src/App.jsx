import './App.css'
import Banner from './components/banner/Banner'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Resume from './components/resume/Resume'

function App() {

  return (
    <div className='max-w-6xl mx-auto'>
      <Banner />
      <div className='px-3'>
        <Navbar />
        <Home />
        <Resume />
      </div>
    </div>
  )
}

export default App
