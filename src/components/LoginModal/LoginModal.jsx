import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ activeModal, onClose, handleOrButton, handleLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const [errors, setErrors] = useState({ email: "" });

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
    });
    setLoginError("");
    if (!data.email) {
      setErrors({
        email: !data.email ? "Email is required" : "",
      });
      return;
    }
    const emailInput = e.target.elements.email;

    if (!emailInput.validity.valid) {
      setErrors({
        email: "Invalid email address",
      });
      return;
    }

    handleLogin(data.email, data.password)
      .then(() => {
        setData({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message || "An error occurred during login");
      });
  };

  const isLoginFormValid =
    data.email.trim() !== "" && data.password.trim() !== "";

  useEffect(() => {
    setErrors({ email: "" });
    setLoginError("");
  }, [data]);

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
      isLoginFormValid={isLoginFormValid}
    >
      <label
        htmlFor="login-email"
        className={`modal__label ${
          errors.email ? "modal__label--with-errors" : ""
        }`}
      >
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
      <label
        htmlFor="login-password"
        className={`modal__label ${
          loginError ? "modal__label--with-errors" : ""
        }`}
      >
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
      </label>
      {loginError && (
        <span className="modal__error modal__login-error">{loginError}</span>
      )}
    </ModalWithForm>
  );
}

export default LoginModal;
