import { MOCK_USER } from "./constants";

// Token validation function
export const validateToken = (token) => {
  if (!token || typeof token !== "string") return false;
  return token.startsWith("Bearer");
};

// Simulates network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockLogin = async (email, password) => {
  await delay(800); // Simulate network delay

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const token = "Bearer " + Math.random();
    return {
      success: true,
      token,
      user: { email: MOCK_USER.email, name: MOCK_USER.name },
    };
  } else {
    throw new Error("Incorrect email or password");
  }
};

export const mockRegister = async (email, password, name) => {
  await delay(800);

  // Simulate email already exists error
  if (email === MOCK_USER.email) {
    throw new Error("This email is not available");
  }

  return {
    success: true,
    message: "Registration successful",
  };
};
