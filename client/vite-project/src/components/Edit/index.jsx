import { useState } from "react";

export default function Edit() {
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
      fetch(`http://localhost:3001${window.location.pathname}`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json" },
      }).then(function () {
        return (window.location = "/");
      });
    }
  };

  return (
    <div className="container-add">
      <h1>Editar notícia</h1>
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
          Salvar
        </button>
      </form>
    </div>
  );
}
