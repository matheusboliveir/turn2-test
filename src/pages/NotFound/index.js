import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/img/notfound.png";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="container">
      <img
        className="image-not-found"
        src={NotFoundImage}
        alt="Imagem de erro com os personagens de Rick & Morty"
      />
      <Link className="button button--full text--lg" to="/">
        Voltar para Home
      </Link>
    </div>
  );
}
