import React, { CSSProperties, useState, useReducer } from "react";

import { Sub } from "../type";

interface FormInputs {
  inputValue: Sub;
}

interface FormProps {
  onNewSub: (newSubs: Sub) => void;
}

// En TSX se debe tipar si se crea un objeto que contenga estilos
// Funcionara sin ellos pero no quiero errores
const estilos: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "200px",
  color: "#000",
};

const inputEstilos: CSSProperties = {
  padding: "5px",
  border: "2px solid",
  borderRadius: "5px",
  margin: "10px",
  fontSize: "20px",
  backgroundColor: "#ffffff",
  color: "#000",
  outline: "none",
};

const INICIAL_STATE = {
  nick: "",
  avatar: "",
  subMod: 0,
  descripcion: "",
};

type formReduccerAction {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string,
  }
} | {
  type: "clear"
}

const formReduccer = (state: FormInputs["inputValue"], action: formReduccerAction) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
      break;

    case "clear":
      return INICIAL_STATE;
      break;
  }
};

export const Form = ({ onNewSub }: FormProps) => {
  //const [inputValues, setInputValues] =
  //  useState<FormInputs["inputValue"]>(INICIAL_STATE);

  const [inputValues, dispatch] = useReducer(formReduccer, INICIAL_STATE);
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };
  /*Por defecto "e" daria error, ya que no sabe en que contexto se esta ejecutando, esto ocaciona que se llame en cualquier parte del codigo
  
  React.ChangeEvent - es el evento
  <HTMLInputElement> - es el elemento HTML en este caso es el Input
  */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: [e.target.value],
    });
  };

  const handleClear = () => setInputValues(INICIAL_STATE);

  return (
    <form style={estilos} onSubmit={handleSubmit}>
      <input
        type="text"
        name="nick"
        placeholder="Nick"
        style={inputEstilos}
        value={inputValues.nick}
        onChange={handleChange}
      />
      <input
        type="text"
        name="avatar"
        placeholder="Avatar"
        style={inputEstilos}
        value={inputValues.avatar}
        onChange={handleChange}
      />
      <input
        type="number"
        name="subMon"
        placeholder="SubMon"
        style={inputEstilos}
        value={inputValues.subMod}
        onChange={handleChange}
      />
      <textarea
        name="descripcion"
        placeholder="Descripcion"
        style={inputEstilos}
        value={inputValues.descripcion}
        onChange={handleChange}
      />

      <button type="submit">Add new sub</button>
      <button type="button">Clear Form</button>
    </form>
  );
};
