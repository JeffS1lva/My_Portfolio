import { Routes, Route } from "react-router-dom"

import { About } from "../pages/About"
import { Projects } from "../pages/Projects"
import { Portfolio } from "../pages/Portfolio"
import { Contact } from "../pages/Contact"

export function AppRoutes() {
 return(
  <Routes>
   <Route path="/" element={<About />} />
   <Route path="/Projects" element={<Projects />} />
   <Route path="/Portfolio" element={<Portfolio />} />
   <Route path="/Contact" element={<Contact />} />
  </Routes>
 )
}

