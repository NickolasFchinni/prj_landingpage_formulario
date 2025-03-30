import "./App.css"
import Header from "./pages/Header"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <div className="absolute w-screen">
        <Header />
      </div>

      <Home />
    </div>
  )
}

export default App
