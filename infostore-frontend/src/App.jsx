import Header from './components/Header'
import Documents from './pages/Documents'
import Education from './pages/Education'
import Home from './pages/Home'
import PasswordStore from './pages/PasswordStore'

function App() {

  return (
    <>
      <Header />
      <div className='absolute top-30 left-100 m-10 w-[65%]'>
        {/* <Home /> */ }
        {/* <Documents /> */ }
        {/* <Education /> */ }
        <PasswordStore />
      </div>    </>
  )
}

export default App
