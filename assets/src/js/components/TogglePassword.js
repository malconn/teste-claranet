import { inputTogglePassword } from "../utils";
import { inputPassword } from "../utils";
export default function togglePassword() {
  try {
    inputTogglePassword.addEventListener("click", HandleTogglePassword);
  } catch (error) {
    console.error(error);
  }
}
const HandleTogglePassword = () => {
  return inputPassword.getAttribute("type") === "password"
    ? inputPassword.setAttribute("type", "text")
    : inputPassword.setAttribute("type", "password");
};
