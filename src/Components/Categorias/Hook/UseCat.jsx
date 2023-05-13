import CardCategorias from "../../CardCategorias";

export const Usecat=(stateCategorias)=>{
    const allcat = () => {
        let box = [];
        for (let i = 0; i < stateCategorias.length; i++) {
            box.push(
               <CardCategorias key={stateCategorias[i]._id} opcion={1} cat={stateCategorias[i]} ></CardCategorias>
            )

        }
        return box
    }

    return {allcat}
}