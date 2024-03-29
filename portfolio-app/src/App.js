import myImage from './static/jorge.jpg'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <header>
        <div class="container">
          <div class="flex-content">
            <div>
              <h1>Hi, I'm Jorge</h1>
              <p class="subtitle small">
                I am a software engineer who focuses on front-end development
              </p>
            </div>
            <img src={myImage} alt="Jorge's image" className="img-responsive" />
          </div>
        </div>
      </header>
    </>
  )
}

export default App
