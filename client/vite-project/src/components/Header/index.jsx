import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/add">CADASTRAR NOTÍCIAS</Link>
        </li>
        <li>
          <Link to="/">EXIBIR NOTÍCIAS</Link>
        </li>
      </ul>
    </header>
  );
}
