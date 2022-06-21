import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { UserContext } from "../../routes";

export default function Home() {
  const [characterList, setCharacterList] = useContext(UserContext);
  const navigate = useNavigate();

  function callApi() {
    http
      .get("character/")
      .then((resp) => setCharacterList(resp.data.results))
      .finally(() => navigate("/registros", { replace: false }));
  }

  return (
    <div>
      <button disabled={characterList} onClick={callApi}>
        Chamar requisição
      </button>
      <Link to={"/registros"}>Página de registros</Link>
    </div>
  );
}
