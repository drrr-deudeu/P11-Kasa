import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Apropos from "./pages/Apropos"
import FicheLogement from "./pages/FicheLogement"
import NotFound from "./pages/NotFound"

// After
import { createRoot } from "react-dom/client"

function App() {
  const container = document.getElementById("root")
  const root = createRoot(container) // createRoot(container!) if you use TypeScript
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/apropos' element={<Apropos />}></Route>
          <Route
            path='/fiche-logement/:logementId'
            element={<FicheLogement />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}
export default App
