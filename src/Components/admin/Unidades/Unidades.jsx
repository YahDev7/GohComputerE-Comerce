import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Card, Text, Metric, Title, BarChart, } from "@tremor/react";
import AdminSidebar from "../sidebar";
import { UseUnidad } from "./hooks/use.unidad";


const chartdata2 = [
  {
    topic: "Topic 1",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    "Group E": 138,
    "Group F": 436,
  },
  {
    topic: "Topic 2",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    "Group E": 133,
    "Group F": 533,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const Unidad = () => {

  const {Tventas,TCompras}=UseUnidad()

let resventas= Tventas?TCompras?.total_ganancia:0
let rescompras= TCompras?TCompras?.total_ganancia:0

  return (

   
      <div className="w-100 p-5">

        <div className="grid  md:grid-cols-2 gap-4">
       
          <Card className=" w-100">
            <Title>Ingresos Mensuales</Title>
            <BarChart
              className="mt-6"
              data={chartdata2}
              index="name"
              categories={[
                "Group A",
                "Group B",
                "Group C",
                "Group D",
                "Group E",
                "Group F",
              ]}
              colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
            />
          </Card>

          <Grid numCols={1} numColsSm={4} numColsLg={2} className="gap-2">
          <Col >
            <Card>
              <Text>Productos Registrados totales</Text>
              <Metric></Metric>
            </Card>
          </Col>
          <Card>
            <Text>Ventas de dia</Text>
            <Metric></Metric>
          </Card>
          <Col>
            <Card>
              <Text> Total de ventas  </Text>
              <Metric>{resventas}</Metric>
            </Card>
          </Col>

          <Col>
            <Card>
              <Text>Total de productos Vendidos</Text>
              <Metric></Metric>
            </Card>
          </Col>

          <Col>
            <Card>
              <Text>Total de efectivo</Text>
              <Metric></Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Total deudas</Text>
              <Metric></Metric>
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
              <Metric>{resventas-rescompras}</Metric>
            </Card>
          </Col>

        </Grid>

          <Card className="mt-5  w-100">
            <Title>Compras Mensuales</Title>
            <BarChart
              className="mt-6"
              data={chartdata2}
              index="name"
              categories={[
                "Group A",
                "Group B",
                "Group C",
                "Group D",
                "Group E",
                "Group F",
              ]}
              colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
            />
          </Card>
          
          <Card className="mt-5  w-100">
            <Title>Ventas Mensuales</Title>
            <BarChart
              className="mt-6"
              data={chartdata2}
              index="name"
              categories={[
                "Group A",
                "Group B",
                "Group C",
                "Group D",
                "Group E",
                "Group F",
              ]}
              colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
              valueFormatter={dataFormatter}
              yAxisWidth={48}
            />
          </Card>
        </div>
      </div>

  );

}

export default Unidad;