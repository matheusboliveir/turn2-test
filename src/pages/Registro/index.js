import { useContext } from "react";
import Table from "../../components/Table";
import { UserContext } from "../../routes";

export default function Registro() {
  const [characterList] = useContext(UserContext);

  return (
    <div className="container">
      {characterList ? (
        <Table
          data={characterList}
          columns={["id", "name", "species", "status"]}
        />
      ) : (
        <h2 className="text--sm">Sem registros</h2>
      )}
    </div>
  );
}
