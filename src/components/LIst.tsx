import { Sub } from "../type";

// Aqui subs este de tipo `Array`
interface Props {
  //clindren: string; este se pondria a la par de subs cuando se desectructura
  subs: Array<Sub>;
}

// En ({ subs }: Props) se esta desectrucurando de Props
// Con List:React.FC<Props> Este aceptara clildren o hijos
// pero... quiero que acepte clildren?

// ({ subs, clindren }), si quiero acceptar clildren
const List = ({ subs }: Props) => {
  // Cuando hay una funcion que se llame renderList quire decir que -
  // puede ser un componente

  // con renderList = (): JSX.Element[] le estoy diciendo que tipo de dato debe devolver
  const renderList = (): JSX.Element[] => {
    return subs.map((data) => {
      return (
        <div key={data.nick}>
          <h3>
            Nick: {data.nick} - subMod {data.subMod}{" "}
          </h3>
          <img
            src={data.avatar}
            alt={`Avatar de ${data.nick}`}
            style={{ width: "200px" }}
          />
          <p> {data.descripcion} </p>
        </div>
      );
    });
  };
  return <div>{renderList()}</div>;
};

export default List;
