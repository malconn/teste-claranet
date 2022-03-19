import { inputTogglePassword, inputPassword } from "../utils";
export default function togglePassword() {
  try {
    inputTogglePassword.addEventListener("click", HandleTogglePassword);
  } catch (error) {
    console.error(error);
  }
}
const HandleTogglePassword = (event) => {
  const changeTextTogglebtn = {
    hide() {
      return (event.target.innerText = "Mostrar");
    },
    show() {
      return (event.target.innerText = "Esconder");
    },
  };
  const changeAttributeToggle = {
    text() {
      return inputPassword.setAttribute("type", "text");
    },
    password() {
      return inputPassword.setAttribute("type", "password");
    },
  };
  inputPassword.getAttribute("type") === "password"
    ? changeAttributeToggle.text()
    : changeAttributeToggle.password();

  inputPassword.getAttribute("type") === "password"
    ? changeTextTogglebtn.hide()
    : changeTextTogglebtn.show();
};
