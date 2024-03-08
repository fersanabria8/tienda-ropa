import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ItemListContainer from "./components/ItemListContainer"
import Cart from "./components/Cart"
import SingleProduct from "./components/SingleProduct"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/carrito" element={<Cart/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
