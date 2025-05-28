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
      isOpen={activeModal === "registerSuccess"}
      name="registerSuccess"
      handleSignInButton={handleSignInButton}
    />
  );
}

export default RegistrationSuccessModal;
