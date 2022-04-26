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
    <div>
      <form>
        <input
          type="text"
          placeholder="title"
          onChange={handleChangeTitle}
          required
        />
        <input
          type="text"
          placeholder="description"
          onChange={handleChangeDesc}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
