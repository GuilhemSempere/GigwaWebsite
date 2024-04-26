import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <BrowserRouter basename={"/GigwaWebsite/"}>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}