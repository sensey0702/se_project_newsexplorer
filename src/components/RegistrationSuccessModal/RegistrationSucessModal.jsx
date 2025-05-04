import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegistrationSuccessModal({
  activeModal,
  onClose,
  handleSignInButton,
}) {
  return (
    <ModalWithForm
      signInButtonText="Sign in"
      title="Registration successfully completed!"
      onClose={onClose}
      isOpen={activeModal === "loginSuccess"}
      name="loginSuccess"
      handleSignInButton={handleSignInButton}
    />
  );
}

export default RegistrationSuccessModal;
