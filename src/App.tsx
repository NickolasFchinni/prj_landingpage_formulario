import "./App.css"
import AboutUs from "./pages/AboutUs"
import CardsLast from "./pages/cards"
import Download from "./pages/Download"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Images from "./pages/Images"
import Tags from "./pages/Tags"

function App() {
  return (
    <div>
      <div className="absolute w-screen">
        <Header />
      </div>

      <Home />
      <AboutUs />
      <Images />
      <Download />
      <Tags />
      <CardsLast />
    </div>
  )
}

export default App
