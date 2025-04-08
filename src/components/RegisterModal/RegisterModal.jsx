import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ activeModal, onClose, handleOrButton }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return handleRegister(data)
      .then(() => {
        setData({
          email: "",
          password: "",
          username: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <ModalWithForm
      buttonText="Sign up"
      title="Sign up"
      onClose={onClose}
      isOpen={activeModal === "register"}
      name="register"
      onSubmit={handleSubmit}
      handleOrButton={handleOrButton}
      orButtonText="Sign in"
    >
      <label htmlFor="register-email" className="modal__label">
        Email{" "}
        <input
          name="email"
          type="email"
          className="modal__input"
          id="register-email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password{" "}
        <input
          name="password"
          type="password"
          className="modal__input"
          id="register-password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-username" className="modal__label">
        Username{" "}
        <input
          name="username"
          type="text"
          className="modal__input"
          id="register-username"
          placeholder="Enter your username"
          value={data.username}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
