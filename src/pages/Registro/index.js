import { useContext } from "react";
import Table from "../../components/Table";
import { UserContext } from "../../routes";
import "./Registro.css";

export default function Registro() {
  const [characterList] = useContext(UserContext);

  return characterList ? (
    <Table characterList={characterList} />
  ) : (
    <h6>Sem registros</h6>
  );
}
