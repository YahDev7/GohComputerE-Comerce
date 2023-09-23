// routes.js
export const ROUTES_BACK = {
  ADMIN: {
    SUBCATEGORIA: {
      GET: '/subcategoria/enterprise',
      GETID: (id) => `/subcategoria/enterprise/${id}`,
      POST: `/subcategoria/enterprise`,
      PUT: (id) => `/subcategoria/enterprise/${id}`,
      DELETE: (id) => `/subcategoria/enterprise/${id}`
    },
    CATEGORIA: {
      GET: '/categoria/enterprise',
      GETID: (id) => `/categoria/enterprise/${id}`,
      POST: `/categoria/enterprise`,
      PUT: (id) => `/categoria/enterprise/${id}`,
      DELETE: (id) => `/categoria/enterprise/${id}`

    },
    MOVIMIENTO: {
      GET: '/movimiento-m/enterprise',
      GETVENTASDIA: '/movimiento-m/ventas/totaldia',
      GETVENTASMES:(meses)=> `/movimiento-m/ventas/totalmes/${meses}`,
      GETCOMPRADIA: '/movimiento-m/compras/totaldia',
      GETCOMPRAMES:(mes)=> `/movimiento-m/compras/totalmes/${mes}`,
      GETINGRESOSMENSUALES: '/movimiento-m/enterprise/ingresosMensuales',
      GETID: (id) => `/movimiento-m/enterprise/getone/${id}`,
      POST: `/movimiento-m/enterprise`,

      GETSERVICIOS:"/movimiento-m/enterprise/servicios",
      GETSERVICIOSMES:(mes)=>`/movimiento-m/enterprise/servicios/${mes}`,
      GETSERVICIOSDIA:"/movimiento-m/enterprise/servicios/dia"


    },
    DOCUMENTO: {
      GET: '/documento/enterprise',
      GETID: (id) => `/documento/enterprise/${id}`,
      POST: `/documento/enterprise`,
      POSTANULAR: (id) => `/documento/enterprise/anular/${id}`,
    },
    COMPRA: {
      GET: '/documento/enterprise/compra',
      GETID: (id) => `/documento/enterprise/compra/${id}`,
      POST: `/documento/enterprise/compra`,
      POSTANULAR: (id) => `/documento/enterprise/anular/compra/${id}`,
    },
    USER: {
      GET: `/user/enterprise`,
      GETID: (id) => `/user/enterprise/${id}`,
      POST: `/user/enterprise`,
      PUT: (id) => `/user/enterprise/${id}`,
      DELETE: (id) => `/user/enterprise/${id}`
    },
    CUSTOMER: {
      GET: `/customer/enterprise`,
      GETID: (id) => `/customer/enterprise/${id}`,
      POST: `/customer/enterprise`,
      PUT: (id) => `/customer/enterprise/${id}`,
      DELETE: (id) => `/customer/enterprise/${id}`
    },
    PROMOCIONES: {
      GET: `/promociones/enterprise`,
      POST: `/promociones/enterprise`,
      ACTIVAR:(id)=> `/promociones/enterprise/activar/${id}`,
      GETBYID: (id) => `/promociones/enterprise/${id}`,
      PUT: (id) => `/promociones/enterprise/${id}`,
      DELETE: (id) => `/promociones/enterprise/${id}`,
      
      GETWEB: `/promociones/webpromo`,
      GETBYIDPROMO: (id) => `/promociones/promo/${id}`,
      GET_BY_SUBCATPROMO: (id) => `/promociones/enterprise/getBySubcat/${id}`,
  },
    PRODUCTOS: {
      GET: `/products/enterprise`,
      POSTSTOCK:(id)=> `/products/enterprise/stock/${id}`,
      GETWITHSTOCK: `/products/enterprise/withstock`,
      GETALL: `/products/enterprise/all`,
      POST: `/products/enterprise/save`,
      POSTSERVICE: `/products/enterprise/save/service`,
      GETBYID: (id) => `/products/enterprise/getone/${id}`,
      GETBYIDSERVICE: (id) => `/products/enterprise/getone/service/${id}`,
      PUT: (id) => `/products/enterprise/update/${id}`,
      PUTSERVICE: (id) => `/products/enterprise/update/service/${id}`,
      DELETE: (id) => `/products/enterprise/delete/${id}`,
      DELETEONEIMG: `/products/enterprise/img`,



    }, 
    CLOUDINARY: {
      DELETEONEIMG:`/image/product/delete`,
    },
    UNIDAD: {
      SUMAVENTAS: `/movimiento-m/ventas/total`,
      SUMACOMPRAS: `/movimiento-m/compras/total`
    },
    SERVICIO: {

    }
  },
  PRODUCTOS: {
    GETWEBPROMO:(id)=>`/products/enterprise/getBySubcat/${id}`,
    GET_ALL_PROMO: `/promociones/gohcomputer/allpromo`,
    GET_MAIN: `/products/gohcomputer/main`,
    GET_DESTACADOS: `/products/gohcomputer/destacados`,
    GET_NEWS: `/products/gohcomputer/news`,
    GET_BY_SUBCAT: (id) => `/products/gohcomputer/getBySubcat/${id}`,
    GET_BY_ID_PROD: (id) => `/products/gohcomputer/getByIdProd/${id}`,
    SEARCH: (prod) => `/products/gohcomputer/search/${prod}`,
    SEARCH: (prod) => `/products/gohcomputer/search/${prod}`,

    POSTS: {
      BYENTERPRISE: `/products/enterprise`,
    }

  },
  CATEGORIAS: {
    GET_ALL: `/categoria/gohcomputer/all`,
    GET_ONE: (id) => `/categoria/gohcomputer/onecat/${id}`,
  },
  SUBCATEGORIAS: {
    GET_All_BY_ENTERPRISE: `/subcategoria`,//`/subcategoria/enterprise`
    GET_BY_CATEGORIA: (id) => `/subcategoria/gohcomputer/bycategoria/${id}`,
  },
  CUSTOMER: {
    LOGIN: `/customer/gohcomputer/login`,
    REGISTER: `/customer/gohcomputer/register`,
    GETDATATOKEN: `/customer/web/getdatauser`,
  },
  USER: {
    LOGIN: `/user/login`,
    REGISTER: `/user/register`,
    GETDATATOKEN: `/user/web/getdatauser`,
  },
  CARRITO: {
    SAVE: `/carrito/gohcomputer`,
    GET_ITEMS: `/carrito/gohcomputer/get`,
    SENDCORREO: `/correo`
  },
  IMG: {
    SAVE: (id) => `/image/upload/product/${id}`,
    SAVECATEGORIA: (id) => `/image/upload/categoria/${id}`,
    SAVESUBCATEGORIA: (id) => `/image/upload/subcategoria/${id}`,
    SAVEBILLETERAVIRTUAL: (id) => `/image/upload/billeteravirtual/${id}`,
  },
  DOCUMENTO: {
    GET: `/documento/web/enterprise`,
    GETID: (id) => `/documento/web/enterprise/${id}`,

  },
  MOVIMIENTO: {
    GET: `/movimiento-m`,
    GETID: (id) => `/movimiento-m/enterprise/${id}`,

  }

}


export const ROUTES = {
  INDEX: "/Gohcomputer",
  DESCRIPTION: "/description/:id",
  ALL_PROMO: "/Gohcomputer/Productos/allPromo",
  PRODUCTOS: "/Productos/:id",
  SUBCATEGORIAS: "/subcategorias/:id",
  CATEGORIAS: "/categorias",
  CARRITO: "/carrito",
  COMPRA: "/compra",
  SEARCH: "/search/:search",
  PRUEBA: "/prueba",
  PEDIDOS: "/pedidos",
  DETALLE_PEDIDO: "/detallepedido/:idpedido",
  LOGIN: "/login",
  LOGIN_ADMIN: "/login/admin",
  /* REGISTER_ADMIN: "/register/admin", */
  REGISTER: "/register",
  CONFIRMADO: "/confirmado/:idpedido",
  DEPOSITO_PEDIDO: "/depositopedido/:idpedido",
  UNIDAD_ADMIN: "/dashadmin/gohcomputer/Unidades",
  SERVICIO_ADMIN: "/dashadmin/gohcomputer/Servicios",
  USER_ADMIN: "/dashadmin/gohcomputer/Users",
  CUSTOMERS_ADMIN: "/dashadmin/gohcomputer/Customers",
  PROVIDERS_ADMIN: "/dashadmin/gohcomputer/Providers",
  PRODUCTOS_ADMIN: "/dashadmin/gohcomputer/Productos",
  PROMOCIONES_ADMIN: "/dashadmin/gohcomputer/Promociones",
  CATEGORIA_ADMIN: "/dashadmin/gohcomputer/Categoria",
  SUBCATEGORIA_ADMIN: "/dashadmin/gohcomputer/Subcategoria",
  DOCUMENTOS_ADMIN: "/dashadmin/gohcomputer/Documentos",
  COMPRAS_ADMIN: "/dashadmin/gohcomputer/Compras",
  MOVIMIENTOS_ADMIN: "/dashadmin/gohcomputer/Movimientos",
  CAJA_ADMIN: "/dashadmin/gohcomputer/Caja",
  SETTING_ADMIN: "/dashadmin/gohcomputer/Setting",
  CONFIRMADO_CORREO: "/confrimado_correo",
  COMPRA: {
    WEB: `compraWeb/datosEnvio`,
    CORREO: `compraCorreo`,
  }
};

