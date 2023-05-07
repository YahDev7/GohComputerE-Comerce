import { Navigate, Route, Routes } from "react-router-dom"
import Carrito from "./Components/carrito/Carrito"
import Categorias from "./Components/Categorias/Categorias"
import Description from "./Components/Description/Description"
import Index from "./Components/index"
import Login from "./Components/Login/Login"
import DetailPedi from "./Components/Pedidos/All/DetailPed"
import Pedidos from "./Components/Pedidos/All/MisPedidos"
import Confirmado from "./Components/Pedidos/confirm/PedidoConfirm"
import DepositoPedido from "./Components/Pedidos/deposito/DepositoPedido"
import ProductosAll from "./Components/ProductosAll/ProductosAll"
import Prueba from "./Components/Prueba"
import Search from "./Components/Search/Search"
import Subcategoria from "./Components/Subcategoria/Subcategoria"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/Gohcomputer" element={<Index></Index>} />
        <Route path="/description/:id" element={<Description></Description>} />
        <Route path="/Productos/:id" element={<ProductosAll></ProductosAll>} />
        <Route path="/subcategorias/:id" element={<Subcategoria/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/search/:search" element={<Search/>} />
        <Route path="/prueba" element={<Prueba/>} />
        <Route path="/pedidos" element={<Pedidos/>} />
        <Route path="/detallepedido/:idpedido" element={<DetailPedi/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/confirmado/:idpedido" element={<Confirmado/>} />
        <Route path="/depositopedido/:idpedido" element={<DepositoPedido/>} />
      </Routes>
    </div>
  )
}

export default App
