import { useEffect, useState, useRef } from "react";

import List from "./components/LIst";
import { Form } from "./components/Form";

import { Sub } from "./type";

const INICIAL_STATE = [
  {
    nick: "marco",
    avatar: "https://i.pravatar.cc/150?img=1",
    subMod: 3,
    descripcion: "sub hace 3 meses",
  },
  {
    nick: "Mario",
    avatar: "https://i.pravatar.cc/150?img=2",
    subMod: 9,
  },
  {
    nick: "maria",
    avatar: "https://i.pravatar.cc/150?img=3",
    subMod: 1,
  },
];

// En este interface se guarda el estado del componente
interface AppState {
  // Si lo pongo de esta manera: `subs: Sub` me da error
  // dedusco que es porque no expesifique el tipo de dato
  subs: Array<Sub>;
}

function App() {
  // Dar a entender que ama puede ser un tipo string o number
  //const [ama, setAma] = useState<string | number>();

  // En useState entre <> se agrega interface que contiene el estado
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  useEffect(() => {
    // Se agregar el INICIAL_STATE al setSubs
    setSubs(INICIAL_STATE);
  }, []);

  const handleNewSubs = (newSubs: Sub): void => {
    setSubs(subs => [...subs, newSubs])
  }

  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={divRef}>
      <h1>Midu subs</h1>
      <Form onNewSub={handleNewSubs}/>
      <List subs={subs} />
    </div>
  );
}

export default App;
