// routes.js
export const ROUTES_BACK = {
  PRODUCTOS: {
    GET_ALL_PROMO: `/products/gohcomputer/allpromo`,
    GET_MAIN: `/products/gohcomputer/main`,
    GET_DESTACADOS: `/products/gohcomputer/destacados`,
    GET_NEWS: `/products/gohcomputer/news`,
    GET_BY_SUBCAT: (id) => `/products/gohcomputer/getBySubcat/${id}`,
    GET_BY_ID_PROD: (id) => `/products/gohcomputer/getByIdProd/${id}`,
    SEARCH: (prod) => `/products/gohcomputer/search/${prod}`,
  },
  CATEGORIAS: {
    GET_ALL: `/categoria/gohcomputer/all`,
    GET_ONE: (id) => `/categoria/gohcomputer/onecat/${id}`,
  },
  SUBCATEGORIAS: {
    GET_BY_CATEGORIA: (id) => `/subcategoria/gohcomputer/bycategoria/${id}`,
  },
  CUSTOMER: {
    LOGIN: `/customer/gohcomputer/login`,
    REGISTER: `/customer/gohcomputer/register`,
  },
}


export const ROUTES = {
    INDEX: "/Gohcomputer",
    DESCRIPTION: "/description/:id",
    ALL_PROMO: "/Gohcomputer/Productos/allPromo",
    PRODUCTOS: "/Productos/:id",
    SUBCATEGORIAS: "/subcategorias/:id",
    CATEGORIAS: "/categorias",
    CARRITO: "/carrito",
    SEARCH: "/search/:search",
    PRUEBA: "/prueba",
    PEDIDOS: "/pedidos",
    DETALLE_PEDIDO: "/detallepedido/:idpedido",
    LOGIN: "/login",
    REGISTER: "/register",
    CONFIRMADO: "/confirmado/:idpedido",
    DEPOSITO_PEDIDO: "/depositopedido/:idpedido",
    UNIDAD_ADMIN: "/dashadmin/gohcomputer/Unidades",
    SERVICIO_ADMIN: "/dashadmin/gohcomputer/Servicios",
    USER_ADMIN: "/dashadmin/gohcomputer/Users",
    CUSTOMERS_ADMIN: "/dashadmin/gohcomputer/Customers",
    PROVIDERS_ADMIN: "/dashadmin/gohcomputer/Providers",
    PRODUCTOS_ADMIN: "/dashadmin/gohcomputer/Productos",
    CATEGORIA_ADMIN: "/dashadmin/gohcomputer/Categoria",
    SUBCATEGORIA_ADMIN: "/dashadmin/gohcomputer/Subcategoria",
    DOCUMENTOS_ADMIN: "/dashadmin/gohcomputer/Documentos",
    MOVIMIENTOS_ADMIN: "/dashadmin/gohcomputer/Movimientos",
    CAJA_ADMIN: "/dashadmin/gohcomputer/Caja",
    SETTING_ADMIN: "/dashadmin/gohcomputer/Setting",
  };
  