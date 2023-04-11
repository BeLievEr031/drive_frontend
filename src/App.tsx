import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Pages/Auth/Auth"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App