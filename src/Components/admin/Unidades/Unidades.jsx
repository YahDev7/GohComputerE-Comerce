import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Card, Text, Metric, Title, BarChart, } from "@tremor/react";
import AdminSidebar from "../sidebar";
import { UseUnidad } from "./hooks/use.unidad";
import Loader from "../../public/Loader";

let MesesDelAño=[
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre'
]


const dataFormatter = (number) => {
 // return "S/" +Number(number).toFixed(2)
  return "S/ " + Intl.NumberFormat("us").format(Number(number).toFixed(2)).toString();


};

const Unidad = () => {

  const { Tventas, TCompras, TDia,TMes,mes,
    mescompra,
    TMescompra,
    TDiaCompra,
    iMensuales,loaderUnidad } = UseUnidad()

  let resventas = Tventas ? Tventas : 0
  let rescompras = TCompras ? TCompras : 0

  return (


    <div className="w-100 p-5">
            {loaderUnidad && <Loader></Loader>}

        <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Unidades</h2>

      <div className="grid  md:grid-cols-2 gap-4">

        <Card className=" w-100">
          <Title>Ingresos Mensuales</Title>
          <BarChart
            className="mt-6"
            data={[iMensuales]||[]}
            index="name"
            categories={[1,2,3,4,5,6,7,8,9,10,11,12]||[]}
            colors={["blue", "teal", "amber", "rose", "indigo", "emerald","black","red","green"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>

        <Grid numCols={1} numColsSm={4} numColsLg={2} className="gap-2">
          <Col >
            <Card>
              <Text>Productos Registrados totales</Text>
              <Metric>0</Metric>
            </Card>
          </Col>
          <Card>
            <Text>Ventas de dia</Text>
            <Metric>{TDia} </Metric>
          </Card>
          <Col>
            <Card>
              <Text> Total de ventas  </Text>
              <Metric>{resventas}</Metric>
            </Card>
          </Col>

          {/*   <Col>
            <Card>
              <Text>Total de productos Vendidos</Text>
              <Metric></Metric>
            </Card>
          </Col>
 */}
          <Col>
            <Card>
              <Text>Total de efectivo</Text>
              <Metric> 0</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Total deudas</Text>
              <Metric>0</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Total de Compras</Text>
              <Metric>{rescompras}</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Ganacias Totales</Text>
              <Metric>{resventas - rescompras}</Metric>
            </Card>
          </Col>

        </Grid>

        <Card className=" w-100">
          <Title>Compras Mensuales</Title>
          <BarChart
            className="mt-6"
            data={[TMescompra]||[]}
            index="name"
            categories={[1,2,3,4,5,6,7,8,9,10,11,12]||[]}

            colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>

        <Card className=" w-100">
          <Title>Ingresos Mensuales</Title>
          <BarChart
            className="mt-6"
            data={[TMes]||[]}
            index="name"
            categories={[1,2,3,4,5,6,7,8,9,10,11,12]||[]}
            colors={["blue", "teal", "amber", "rose", "indigo", "emerald","black","red","green"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </div>
    </div>

  );

}

export default Unidad;