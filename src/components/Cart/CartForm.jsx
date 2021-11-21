import React from "react";
import { useForm } from "../Cart/hookForm";
import "../Cart/CartForm.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())){
    errors.name = "Solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())){
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  }else if (!regexComments.test(form.comments.trim())){
    errors.comments = "No debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#9c2430",
};

const CartForm = () => {
  const {
    form,
    errors,
    // loading,
    // response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <form onSubmit={handleSubmit} className="container form">
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        name="name"
        placeholder="Escribe tu nombre"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.nombre}
        required
      />
      {errors.name && <p style={styles}>{errors.name}</p>}
      <label htmlFor="email">Email</label>

      <input
        type="text"
        id="nombre"
        name="email"
        placeholder="Escribe tu email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.email}
        required
      />
      {errors.email && <p style={styles}>{errors.email}</p>}
      <label htmlFor="submit">Asunto</label>
      <input
        type="text"
        id="nombre"
        name="subject"
        placeholder="Asunto a tratar"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.subject}
        required
      />
      {errors.subject && <p style={styles}>{errors.subject}</p>}
      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Escribe tus comentarios"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.comments}
        required
      ></textarea>
      {errors.comments && <p style={styles}>{errors.comments}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CartForm;
