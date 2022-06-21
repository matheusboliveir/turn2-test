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
      .finally(() => navigate("/registros", { replace: false }))
      .catch((err) =>
        alert(`Aconteceu um erro na requisição, status: ${err.response.status}`)
      );
    /*
      Mesma requisição mas usando fetch
      fetch("https://rickandmortyapi.com/api/character", { method: "GET" })
        .then((resp) => resp.json())
        .then((resp) => setCharacterList(resp.results))
        .finally(() => navigate("/registros", { replace: false }))
        .catch((err) =>
          alert(`Aconteceu um erro na requisição, status: ${err.response.status}`)
        );
    */
  }

  return (
    <div className="container">
      <button
        className="button button--full text--lg"
        disabled={characterList}
        onClick={callApi}
      >
        Chamar requisição
      </button>
      <Link className="button button--outline text--sm" to="/registros">
        Página de registros
      </Link>
    </div>
  );
}
