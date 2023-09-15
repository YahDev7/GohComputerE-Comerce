import { useContext, useEffect, useState } from "react";
import { Grid, Col, Card, Text, Metric, Title, BarChart, } from "@tremor/react";
import TokenAdminContext from "../../../context/tokenAdmin";
import AdminSidebar from "../sidebar";


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

const ServicioAdmin = () => {

  const {stateTokenAdmin} =useContext(TokenAdminContext)

  useEffect(() => {
    if(!stateTokenAdmin) return location.href="/#/login/admin"
  }, [stateTokenAdmin]); 

  return (
  
      <div className="w-100 p-5">
        <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Servicios</h2>
        <Grid numCols={1} numColsSm={2} numColsLg={4} className="gap-2">
          <Col /* numColSpan={1} numColSpanLg={2} */>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 1</Metric>
            </Card>
          </Col>
          
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 3</Metric>
            </Card>
          </Col>
        </Grid>

        <div className="grid  md:grid-cols-2 gap-4">
        <Card className="mt-5 w-100">
          <Title>Ingresos</Title>
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
          <Title>Egresos</Title>
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

export default ServicioAdmin;