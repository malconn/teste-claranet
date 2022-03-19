import { inputTogglePassword, inputPassword } from "../utils";
export default function TogglePassword() {
  try {
    inputTogglePassword.addEventListener("click", HandleTogglePassword);
  } catch (error) {
    console.error(error);
  }
}
const HandleTogglePassword = (event) => {
  const changeTextTogglebtn = {
    hide() {
      return (event.target.innerHTML = "Mostrar");
    },
    show() {
      return (event.target.innerHTML = "Esconder");
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
