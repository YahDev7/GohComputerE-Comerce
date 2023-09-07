import { useState } from "react";

export const UseLoader = () => {
    const [loaderGeneral, setloaderGeneral] = useState(false);


  return {loaderGeneral,setloaderGeneral};
}
