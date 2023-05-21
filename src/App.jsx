import { Navigate, Route, Routes } from "react-router-dom"
import Carrito from "./Components/carrito/Carrito"
import Categorias from "./Components/Categorias/Categorias"
import Description from "./Components/Description/Description"
import Index from "./Components/index"
import DetailPedi from "./Components/Pedidos/All/DetailPed"
import Pedidos from "./Components/Pedidos/All/MisPedidos"
import Confirmado from "./Components/Pedidos/confirm/PedidoConfirm"
import DepositoPedido from "./Components/Pedidos/deposito/DepositoPedido"
import ProductosAll from "./Components/ProductosAll/ProductosAll"
import Prueba from "./Components/Prueba"
import Search from "./Components/Search/Search"
import Subcategoria from "./Components/Subcategoria/Subcategoria"
import All from "./Components/ProductosAll/all"
import LoginIndex from "./Components/Login/LoginIndex"
import Register from "./Components/Login/Register"
import AdminSidebar from "./Components/admin/sidebar"
import UserAdmin from "./Components/admin/User/users"
import UnidadAdmin from "./Components/admin/Unidades/Unidades"
import ProductosAdmin from "./Components/admin/Productos/Productos"
import CategoriaAdmin from "./Components/admin/Categoria/Categoria"
import SubcatAdmin from "./Components/admin/Subcategoria/Subcategoria"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/Gohcomputer" element={<Index></Index>} />
        <Route path="/description/:id" element={<Description></Description>} />
        <Route path="/Gohcomputer/Productos/allPromo" element={<All></All>} />
        <Route path="/Productos/:id" element={<ProductosAll></ProductosAll>} />
        <Route path="/subcategorias/:id" element={<Subcategoria/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/search/:search" element={<Search/>} />
        <Route path="/prueba" element={<Prueba/>} />
        <Route path="/pedidos" element={<Pedidos/>} />
        <Route path="/detallepedido/:idpedido" element={<DetailPedi/>} />
        <Route path="/login" element={<LoginIndex/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/confirmado/:idpedido" element={<Confirmado/>} />
        <Route path="/depositopedido/:idpedido" element={<DepositoPedido/>} />

        <Route path="/dashadmin/gohcomputer/Unidades" element={<UnidadAdmin/>} />
        {/* <Route path="/dashadmin/gohcomputer/Servicios" element={<UserAdmin/>} /> */}
        <Route path="/dashadmin/gohcomputer/Users" element={<UserAdmin/>} />
        <Route path="/dashadmin/gohcomputer/Customers" element={<AdminSidebar/>} />
        <Route path="/dashadmin/gohcomputer/Providers" element={<AdminSidebar/>} />
        <Route path="/dashadmin/gohcomputer/Productos" element={<ProductosAdmin/>} />
        <Route path="/dashadmin/gohcomputer/Categoria" element={<CategoriaAdmin/>} />
        <Route path="/dashadmin/gohcomputer/Subcategoria" element={<SubcatAdmin/>} />
        <Route path="/dashadmin/gohcomputer/Documentos" element={<AdminSidebar/>} />
        <Route path="/dashadmin/gohcomputer/Movimientos" element={<AdminSidebar/>} />
        <Route path="/dashadmin/gohcomputer/Caja" element={<AdminSidebar/>} />
        <Route path="/dashadmin/gohcomputer/Setting" element={<AdminSidebar/>} />

      </Routes>
    </div>
  )
}

export default App
