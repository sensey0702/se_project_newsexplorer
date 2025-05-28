import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  activeModal,
  onClose,
  handleOrButton,
  handleRegister,
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [registerError, setRegisterError] = useState("");
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
    setRegisterError("");
    setErrors({
      email: "",
    });
    // adding this for error testing with test user and no functioning backend
    if (data.email === "test@test.com") {
      return;
    }

    const emailInput = e.target.elements.email;

    if (!emailInput.validity.valid) {
      setErrors({
        email: "Invalid email address",
      });
      return;
    }

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
        setRegisterError(err.message || "An error occurred during login");
      });
  };

  const isRegisterFormValid =
    data.email.trim() !== "" &&
    data.password.trim() !== "" &&
    data.username.trim() !== "";

  useEffect(() => {
    setRegisterError("");
    setErrors({ email: "" });
  }, [data]);

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
      isRegisterFormValid={isRegisterFormValid}
    >
      <label
        htmlFor="register-email"
        className={`modal__label ${
          errors.email ? "modal__label--with-errors" : ""
        }`}
      >
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
        {errors.email && <span className="modal__error">{errors.email}</span>}
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
      <label
        htmlFor="register-username"
        // this class is only set this way vs restisterError due to the backend not existing
        className={`modal__label ${
          data.email === "test@test.com" ? "modal__label--with-errors" : ""
        }`}
      >
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
      {registerError && (
        <span className="modal__error modal__register-error">
          {registerError}
        </span>
      )}
      {data.email === "test@test.com" && (
        <span className="modal__error modal__register-error">
          {"This email is not available"}
        </span>
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;
