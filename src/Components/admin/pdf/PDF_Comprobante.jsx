import { Document, Page, Text, Image, View,StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({

})

const PDF_Comprobante = () => {
 
  return (
    <Document >
      <Page size="A4">
        <View >
          <Text>Hola</Text>
        </View>
       



        

      </Page>
    </Document>
  )
}


export default PDF_Comprobante;
