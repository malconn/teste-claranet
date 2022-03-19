import { form } from "../utils";
export default function Submit() {
  try {
    form.addEventListener("submit", HandleSubmit);
  } catch (error) {
    console.error(error);
  }
}

const HandleSubmit = (event) => {
  event.preventDefault();
  window.location.href = "https://claranet.com.br";
};
