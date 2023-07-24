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
                    </tr>
                </thead>
                <tbody>
                    {
                        propedido?.detalle.map((el) =>
                            <tr >
                                <td><img width="70px" height="70px" src={el?.img} /> </td>
                                <td><a href={`#/description/${el.id}`} > {el.nombre}</a></td>
                                <td>{el.precio}</td>
                                <td>{el.unidad}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </>
    );
}

export default CompDetallePedido;