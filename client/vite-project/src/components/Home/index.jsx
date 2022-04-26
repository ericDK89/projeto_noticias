import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3001";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
      headers: { "Contente-type": "application/json" },
    }).then(function () {
      return (window.location = "/");
    });
  };

  useEffect(() => {

  }, [handleDelete])

  return (
    <div className="body">
      {allNews.map((news, index) => {
        return (
          <div key={index} id={news.id} className="container">
            <div className="card" key={index} id={news.id}>
              <h2> {news.title} </h2>
              <p> {news.desc} </p>
              <form className="form-card">
                <button onClick={() => handleDelete(news.id)}>Excluir</button>
                <Link to={`/edit/${news.id}`}>Acessar</Link>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}
