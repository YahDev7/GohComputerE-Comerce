import { Document, Page, Text, Image, View } from "@react-pdf/renderer"
const styles = {
  title: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
  title2: {
    fontSize: 12,
    marginTop: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    fontSize: 10,
    lineHeight: 1.5,
  },
  tableHeader: {
    backgroundColor: "#1431e1",
    marginTop: "10px",
    display: "flex",
    padding: "8px",
    flexDirection: "row",
  },
  tableHeaderChild: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",

  },
  headers: {
    fontWeight: "bold",
    flex: 0.3,
    textAlign: "center",
    fontSize: 10,
    color: "white",
  },
  rows: {
    textAlign: "center",
    flex: 1,
    fontSize: 9,
  },
  saldos: {
    flex: 0.5,
    fontSize: 14,
  }
};

const PDF = ({ form, ListEquipos }) => {

  let {
    cliente,
    direccion,
    dni_ruc,
    fecha,
    /* customerDetalle */
  } = form
  /*  const { 
     telefono,
     direccion } = customerDetalle */
  return (
    <Document >
      <Page size="A4">
        <View style={{ display: "flex", margin: "20px", flexDirection: "row" }}>
          <Image src="https://res.cloudinary.com/dq3fragzr/image/upload/v1702651284/GOHComputer/Public/Group_419_udlpqk.png" />

          <View style={{ display: "flex", flexDirection: "column" }}>

            <View style={{ display: "flex", alignSelf: "center", margin: 10, border: "1px", borderColor: "#33333", padding: "10px", borderRadius: "10px" }}>
              <Text style={styles.title}>R.U.C. 10710038711</Text>
              <Text style={{
                marginTop: 4, fontSize: 9
              }}>Fecha emisión: {new Date(fecha).toLocaleDateString()}</Text>

            </View>
            <Text style={{ fontSize: 9, marginLeft: 20 }}>
              Jaén Plaza- Stand B13</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 40, marginTop: 20 }}>

          <Text style={styles.body}>Venta de laptops, PCs , impresoras, licencias (Antivirus, office, windows, prog. ing. y diseño) y servicio técnico</Text>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 10, textAlign: "center" }}>
            {/*   <Text style={{ fontSize: 9,  backgroundColor: "#1431e1",  marginBottom: 10,  color: "white", padding: "5px",  width: "220px",  borderRadius: "2px" }}>
              Jaén Plaza- Stand B13</Text> */}
            {/*    <Image style={{width:"10px"}} src="https://res.cloudinary.com/dq3fragzr/image/upload/v1702651816/Redes%20Social/Vector_pawsy6.svg"/> */}
            {/*   <Text style={{ paddingTop: "10px", fontSize: 9, padding: "5px", marginLeft: 10, lineHeight: 1.5, }}>Contacto:  932 069 271 - 936 411 677</Text> */}
          </View>
          <View style={{ display: "flex", flexDirection: "row", marginBottom: "7px" }}>
            <Text style={{ fontSize: 10 }}>Señor@: </Text>
            <Text style={{ fontSize: 9, marginTop: 1 }}>{cliente}</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row", marginBottom: "7px" }}>
            <Text style={{ fontSize: 10 }}>Direccion: </Text>
            <Text style={{ fontSize: 9, marginTop: 1 }}>{direccion}</Text> 
          </View>

          <View style={{ display: "flex", flexDirection: "row", marginBottom: "7px" }}>
            <Text style={{ fontSize: 10 }}>RUC/DNI: </Text>
            <Text style={{ fontSize: 9, marginTop: 1 }}>{dni_ruc}</Text>
          </View>

          <View style={styles.tableHeader} >
            <Text style={styles.headers}>CANT</Text>
            <Text style={styles.headers}>EQUIPO</Text>
            <Text style={styles.headers}>DESCRIPCION</Text>
            <Text style={styles.headers}>P.UNIDAD</Text>
            <Text style={styles.headers}>TOTAL</Text>

          </View>

          {
            ListEquipos.map((el) =>
              <View style={styles.tableHeaderChild} >
                <Text style={styles.rows}>1</Text>
                <Text style={styles.rows}>{el.equipo}</Text>
                <Text style={styles.rows}>{el.comentario}</Text>
                <Text style={styles.rows}></Text>
                <Text style={styles.rows}></Text>
              </View>
            )
          }

          <View style={{ display: "flex", flexDirection: "row" }}>

            <Text style={{ flex: 0.9, textAlign: "right", fontSize: 10 }}>Total: </Text>
          </View>

          <View style={{ objectPosition: "static", bottom: 0, display: "flex", flexDirection: "row", position: "absolute", bottom: -100 }}>
            <View style={{ display: "flex", flexDirection: "column", marginRight: 20 }}>

              <Text style={{ fontSize: 10, backgroundColor: "#1431e1", color: "white", borderRadius: "2px", padding: "5px" }}>A CUENTA</Text>
              <Text style={{ fontSize: 10, textAlign: "right", marginTop: 8, }}> </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "column", marginRight: 20 }}>

              <Text style={{ fontSize: 10, backgroundColor: "#1431e1", color: "white", borderRadius: "2px", padding: "5px" }}>SALDO</Text>
              <Text style={{ fontSize: 10, textAlign: "right", marginTop: 8, }}> </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "column" }}>

              <Text style={{ fontSize: 10, backgroundColor: "#1431e1", color: "white", borderRadius: "2px", padding: "5px" }}>TOTAL</Text>
              <Text style={{ fontSize: 10, textAlign: "right", marginTop: 8, }}> </Text>
            </View>
          </View>

        </View>



        {/* 
                <View style={styles.tableHeader} >
                  <Text style={styles.rows}>A cuenta</Text>
                  <Text style={styles.rows}></Text>
                  <Text style={styles.rows}></Text>
                  <Text  style={styles.rows}>Saldo</Text>
                  <Text  style={styles.rows}>Total</Text>
                </View>
                <View style={styles.tableHeader} >
                  <Text style={styles.rows}>12</Text>
                  <Text  style={styles.rows}>8</Text>
                  <Text  style={styles.rows}></Text>
                  <Text  style={styles.rows}>20</Text>
                  <Text  style={styles.rows}>Total:20</Text>
                </View> */}
        {/*   <Text style={styles.body}>{equipo}</Text>  */}

      </Page>
    </Document>
  )
}
export default PDF;
