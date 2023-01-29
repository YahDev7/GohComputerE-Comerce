import CardCategorias from "../../CardCategorias";

export const Usecat=(stateCategorias)=>{
    console.log("render")
    const allcat = () => {
        let box = [];
        for (let i = 0; i < stateCategorias.length; i++) {
            box.push(
               <CardCategorias key={stateCategorias[i].id*Math.random()*100} opcion={1} cat={stateCategorias[i]} ></CardCategorias>
            )

        }
        return box
    }

    return {allcat}
}