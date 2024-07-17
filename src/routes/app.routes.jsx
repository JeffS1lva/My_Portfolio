import { Routes, Route } from "react-router-dom"

import { About } from "../pages/About"
import { Projects } from "../pages/Projects"
import { Portfolio } from "../pages/Portfolio"

export function AppRoutes() {
 return(
  <Routes>
   <Route path="/" element={<About />} />
   <Route path="/Projects" element={<Projects />} />
   <Route path="/Portfolio" element={<Portfolio />} />
  </Routes>
 )
}

