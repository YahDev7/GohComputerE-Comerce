import { useEffect, useState } from "react";
import { FetchsPedidos } from "../../api/pedidos";

const CompDetallePedido = ({ idpedido, stateToken }) => {

    const [propedido, setpropedido] = useState(null);

    const getallpropedido = async () => {
        let respedidos = await FetchsPedidos.getDetallepedido(idpedido, stateToken);
        setpropedido(respedidos)
    }

    useEffect(() => {
        getallpropedido()
    }, []);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Importe</th>
                    </tr>
                </thead>
                <tbody>
                    {propedido&&
                        propedido?.detalle.map((el) =>
                            <tr >
                                <td><img width="70px" height="70px" src={el?.img} /> </td>
                                <td><a href={`#/description/${el._id}`} > {el.nombre}</a></td>
                                <td>{el.precioUnitario}</td>
                                <td>{el.cantidad}</td>
                                <td className="text-blue-800 font-bold">{el.importe}</td>

                            </tr>
                        )
                    }

                </tbody>
            </table>

        </>
    );
}

export default CompDetallePedido;