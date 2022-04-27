import { useState } from "react";
import "./style.css";

export default function Add() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
    console.log(desc);
  };

  const handleSubmit = () => {
    const payload = {
      title: title,
      desc: desc,
    };

    if (payload.title === "") {
      return alert("empty");
    } else {
      fetch("http://localhost:3001/add", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json" },
      })
        .then(function () {
          return (window.location = "/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container-add">
      <h1>Cadastrar notícia</h1>
      <form className="form-add">
        <input
          className="title-add"
          type="text"
          placeholder="Título"
          onChange={handleChangeTitle}
          required
        />
        <textarea
          className="description-add"
          type="text"
          placeholder="Descrição"
          onChange={handleChangeDesc}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
