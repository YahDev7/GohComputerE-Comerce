import { useState } from "react";

export const UseToggle = () => {
    const [StateModal, setStateModal] = useState(false);

    const toggleModal = () => {
        if (StateModal) return setStateModal(false)
        if (!StateModal) return setStateModal(true)
        setform(formInit)
      }
  return {toggleModal,StateModal};
}
