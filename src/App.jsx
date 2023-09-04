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
import Search from "./Components/Search/Search"
import IndexAdmin from "./Components/admin/Login/Index"

import Subcategoria from "./Components/Subcategoria/Subcategoria"
import All from "./Components/ProductosAll/all"
import LoginIndex from "./Components/Login/LoginIndex"
import Register from "./Components/Login/Register"
import AdminSidebar from "./Components/admin/sidebar"
import ProductosAdmin from "./Components/admin/Productos/Index"
import CategoriaAdmin from "./Components/admin/Categoria"
import SubcatAdmin from "./Components/admin/Subcategoria/Subcategoria"
import { ROUTES } from "./Routes"
import ServiciosIndex from "./Components/admin/Servicio"
import SubCategoriaAdmin from "./Components/admin/Subcategoria"
import UserAdmin from "./Components/admin/User"
import UnidadAdmin from "./Components/admin/Unidades"
import CompraIndex from "./Components/Compra"
import CompraConfirmada from "./Components/helps/comfirm"
import IndexDatosEnvio from "./Components/Pedidos/DatosEnvio"
import CustomerAdmin from "./Components/admin/Customer"
import DocumentoAdmin from "./Components/admin/Documentos"
import MovimientoAdmin from "./Components/admin/Movimientos"
import PromocionesAdmin from "./Components/admin/Promociones/Index"

function App() {

  return (
    <div>
      <Routes>
       <Route path={ROUTES.INDEX} element={<Index />} />
      <Route path={ROUTES.DESCRIPTION} element={<Description />} />
      <Route path={ROUTES.ALL_PROMO} element={<All />} />
      <Route path={ROUTES.PRODUCTOS} element={<ProductosAll />} />
      <Route path={ROUTES.SUBCATEGORIAS} element={<Subcategoria />} />
      <Route path={ROUTES.CATEGORIAS} element={<Categorias />} />
      <Route path={ROUTES.CARRITO} element={<Carrito />} />
      <Route path={ROUTES.COMPRA.CORREO} element={<CompraIndex />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
      <Route path={ROUTES.PEDIDOS} element={<Pedidos />} />
      <Route path={ROUTES.DETALLE_PEDIDO} element={<DetailPedi />} />
      <Route path={ROUTES.LOGIN} element={<LoginIndex />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.LOGIN_ADMIN} element={<IndexAdmin/>} />
   {/*    <Route path={ROUTES.REGISTER_ADMIN} element={<Register />} /> */}
      <Route path={ROUTES.CONFIRMADO} element={<Confirmado />} />
      <Route path={ROUTES.DEPOSITO_PEDIDO} element={<DepositoPedido />} />
      <Route path={ROUTES.UNIDAD_ADMIN} element={<UnidadAdmin />} />
      <Route path={ROUTES.SERVICIO_ADMIN} element={<ServiciosIndex />} />
      <Route path={ROUTES.USER_ADMIN} element={<UserAdmin />} />
      <Route path={ROUTES.CUSTOMERS_ADMIN} element={<CustomerAdmin />} />
      <Route path={ROUTES.PROVIDERS_ADMIN} element={<AdminSidebar />} />
      <Route path={ROUTES.PRODUCTOS_ADMIN} element={<ProductosAdmin />} />
      <Route path={ROUTES.CATEGORIA_ADMIN} element={<CategoriaAdmin />} />
      <Route path={ROUTES.SUBCATEGORIA_ADMIN} element={<SubCategoriaAdmin />} />
      <Route path={ROUTES.DOCUMENTOS_ADMIN} element={<DocumentoAdmin />} />
      <Route path={ROUTES.MOVIMIENTOS_ADMIN} element={<MovimientoAdmin />} />
      <Route path={ROUTES.CAJA_ADMIN} element={<AdminSidebar />} />
      <Route path={ROUTES.SETTING_ADMIN} element={<AdminSidebar />} />
      <Route path={ROUTES.PROMOCIONES_ADMIN} element={<PromocionesAdmin />} />
      
      <Route path={ROUTES.COMPRA.WEB} element={<IndexDatosEnvio />} />
      <Route path='*' element={<p>NO EXISTE ESTE ENLACE</p>} />

      </Routes>
    </div>
  )
}

export default App
