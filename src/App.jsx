import { Navigate, Route, Routes } from "react-router-dom"

import Carrito from "./Components/carrito/Carrito"
import Categorias from "./Components/Categorias/Categorias"
import Description from "./Components/Description/Description"
import Index from "./Components/index"
import DetailPedi from "./Components/Pedidos/All/DetailPed"
import Pedidos from "./Components/Pedidos/All/MisPedidos"
import Confirmado from "./Components/Pedidos/confirm/PedidoConfirm"
import DepositoPedido from "./Components/Pedidos/deposito/DepositoPedido"
import Search from "./Components/Search/Search"
import IndexAdmin from "./Components/admin/Login/Index"

import Subcategoria from "./Components/Subcategoria/Subcategoria"
import LoginIndex from "./Components/Login/LoginIndex"
import Register from "./Components/Login/Register"
import AdminSidebar from "./Components/admin/sidebar"
import ProductosAdmin from "./Components/admin/Productos/Index"
import CategoriaAdmin from "./Components/admin/Categoria"
import { ROUTES } from "./Routes"
import ServiciosIndex from "./Components/admin/Servicio"
import SubCategoriaAdmin from "./Components/admin/Subcategoria"
import UserAdmin from "./Components/admin/User"
import UnidadAdmin from "./Components/admin/Unidades"
import CompraIndex from "./Components/Compra"
import IndexDatosEnvio from "./Components/Pedidos/DatosEnvio"
import CustomerAdmin from "./Components/admin/Customer"
import DocumentoAdmin from "./Components/admin/Documentos"
import MovimientoAdmin from "./Components/admin/Movimientos"
import PromocionesAdmin from "./Components/admin/Promociones/Index"
import CompraAdmin from "./Components/admin/Compras"
import IndexPromociones from "./Components/Promociones"
import ProductosBySubCat from "./Components/ProductosAll/ProductosBySubCat"
import FormPrueba from "./Components/formpruebas/form"
import { useContext, useEffect } from "react"
import TokenAdminContext from "./context/tokenAdmin"
import { GuardRoute } from "./Components/admin/Guard/guard"
import ImagesIndex from "./Components/admin/Images"

function App() {
  const { stateTokenAdmin,setStateTokenAdmin, user,setuser } = useContext(TokenAdminContext)

  return (
    <div>
      <Routes>
        <Route path={ROUTES.LOGIN_ADMIN} element={<IndexAdmin setuser={setuser} setStateTokenAdmin={setStateTokenAdmin}/>} />
        <Route path={ROUTES.INDEX} element={<Index />} />
        <Route path={ROUTES.DESCRIPTION} element={<Description />} />
        <Route path={ROUTES.ALL_PROMO} element={<IndexPromociones />} />
        <Route path={ROUTES.PRODUCTOS} element={<ProductosBySubCat />} />
        <Route path={ROUTES.SUBCATEGORIAS} element={<Subcategoria />} />
        <Route path={ROUTES.CATEGORIAS} element={<Categorias />} />
        <Route path={ROUTES.CARRITO} element={<Carrito />} />
        <Route path={ROUTES.COMPRA.CORREO} element={<CompraIndex />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.PEDIDOS} element={<Pedidos />} />
        <Route path={ROUTES.DETALLE_PEDIDO} element={<DetailPedi />} />
        <Route path={ROUTES.LOGIN} element={<LoginIndex />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.CONFIRMADO} element={<Confirmado />} />
        <Route path={ROUTES.DEPOSITO_PEDIDO} element={<DepositoPedido />} />
        <Route path={ROUTES.COMPRA.WEB} element={<IndexDatosEnvio />} />
      

        <Route element={<GuardRoute  user={user} tokenAdmin={stateTokenAdmin} redirecto="login/admin" />}>
          <Route path={ROUTES.UNIDAD_ADMIN} element={<UnidadAdmin />} />
           <Route path={ROUTES.IMAGENES} element={<ImagesIndex />} /> 
          <Route path={ROUTES.SERVICIO_ADMIN} element={<ServiciosIndex />} />
          <Route path={ROUTES.USER_ADMIN} element={<UserAdmin />} />
          <Route path={ROUTES.CUSTOMERS_ADMIN} element={<CustomerAdmin />} />
          {/* <Route path={ROUTES.PROVIDERS_ADMIN} element={<AdminSidebar />} /> */}
          <Route path={ROUTES.PRODUCTOS_ADMIN} element={<ProductosAdmin />} />
          <Route path={ROUTES.CATEGORIA_ADMIN} element={<CategoriaAdmin />} />
          <Route path={ROUTES.SUBCATEGORIA_ADMIN} element={<SubCategoriaAdmin />} />
          <Route path={ROUTES.DOCUMENTOS_ADMIN} element={<DocumentoAdmin />} />
          <Route path={ROUTES.COMPRAS_ADMIN} element={<CompraAdmin />} />
          <Route path={ROUTES.MOVIMIENTOS_ADMIN} element={<MovimientoAdmin />} />
          <Route path={ROUTES.PROMOCIONES_ADMIN} element={<PromocionesAdmin />} />
        </Route>

        <Route path='*' element={<> <Navigate to="/gohcomputer" /> </>} />
        <Route path='/dashadmin/*' element={<> <Navigate to="/dashadmin/gohcomputer/Servicios" /> </>} />

        {/*  
       

        <Route path={ROUTES.FORM} element={<FormPrueba />} />


 
      
 */}
      </Routes>
    </div>

  )
}

export default App
