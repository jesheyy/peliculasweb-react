import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating.jsx";
import "../App.css";

Modal.setAppElement("#root");

const AddMovie = ({ handleAdd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    date: "",
    image: "",
    rating: 1,
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  function openModal() {
    setIsOpen(true);
    setError("");
  }

  function closeModal() {
    setIsOpen(false);
    setError(""); 
  }

  const handleRate = (rate) => setForm({ ...form, rating: rate });

  const validateForm = () => {
    if (!form.name || !form.date || !form.image) {
      setError("Por favor, completa todos los campos obligatorios.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    let newMovie = {
      ...form,
      id: Math.random(),
    };
    handleAdd(newMovie);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Agregar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Película"
        className="modal-content" 
      >
        <form className="modal" onSubmit={handleSubmit}>
          <div className="container-2">
            <label className="text">Nombre</label>
            <input
              id="search"
              type="text"
              placeholder="Nombre de la película"
              value={form.name}
              name="name"
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <label className="text">Fecha Estreno</label>
            <input
              id="search"
              type="date"
              placeholder="Escribe la fecha de estreno"
              value={form.date}
              name="date"
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <label className="text">Imagen</label>
            <input
              id="search"
              type="url"
              placeholder="Escribe URL"
              value={form.image}
              name="image"
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <StarRating rate={form.rating} handleRating={handleRate} />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div>
              <button className="button" type="submit">
                Agregar
              </button>
              <button className="button" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
