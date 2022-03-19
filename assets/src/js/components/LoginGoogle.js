import { googleBtn } from "../utils";
export default function LoginGoogle() {
  googleBtn.addEventListener("click", HandleGoogleClick);
}

const HandleGoogleClick = () => {
  return (window.location.href = "https://claranet.com.br");
};
