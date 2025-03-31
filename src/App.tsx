import "./App.css"
import AboutUs from "./pages/AboutUs"
import CardsLast from "./pages/cards"
import Download from "./pages/Download"
import Footer from "./pages/Footer"
import Forms from "./pages/Forms"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Images from "./pages/Images"
import Tags from "./pages/Tags"

function App() {
  return (
    <div className="bg-[#eae8e4] overflow-hidden">
      <div className="fixed md:relative w-screen">
        <Header />
      </div>
      <Home />
      <AboutUs />
      <Images />
      <Download />
      <Tags />
      <CardsLast />
      <Forms />
      <Footer />
    </div>
  )
}

export default App
