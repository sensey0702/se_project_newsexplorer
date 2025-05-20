import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ activeModal, onClose, handleOrButton, handleLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      email: "",
      password: "",
    });
    if (!data.email || !data.password) {
      setErrors((prev) => ({
        ...prev,
        email: !data.email ? "Email is required" : "",
        password: !data.password ? "Password is required" : "",
      }));
      return;
    }
    const emailInput = e.target.elements.email;

    if (!emailInput.validity.valid) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      return;
    }

    return handleLogin(data.email, data.password)
      .then(() => {
        setData({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log("login error");
        console.error(err);
        setErrors((prev) => ({
          ...prev,
          password: err.message || "An error occurred during login",
        }));
      });
  };

  // useEffect(() => {
  //   setErrors({ email: "", password: "" });
  // }, [data]);

  return (
    <ModalWithForm
      buttonText="Sign in"
      title="Sign in"
      onClose={onClose}
      isOpen={activeModal === "login"}
      name="login"
      onSubmit={handleSubmit}
      handleOrButton={handleOrButton}
      orButtonText="Sign up"
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          name="email"
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          name="password"
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
