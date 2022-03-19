import { labelForget, labelTheme, logon, selectTheme, title } from "../utils";

export default function SelectTheme() {
  selectTheme.addEventListener("click", HandleSelectTheme);
}
const HandleSelectTheme = () => {
  selectTheme.value === "dark" ? darkTheme.label() : lightTheme.label();
  selectTheme.value === "dark" ? darkTheme.bg() : lightTheme.bg();
  selectTheme.value === "dark" ? darkTheme.title() : lightTheme.title();
  selectTheme.value === "dark"
    ? darkTheme.labelTheme()
    : lightTheme.labelTheme();
};
const darkTheme = {
  label() {
    return labelForget.classList.add("dark");
  },
  bg() {
    return logon.classList.add("dark");
  },
  title() {
    return title.classList.add("dark");
  },
  labelTheme() {
    return labelTheme.classList.add("dark");
  },
};
const lightTheme = {
  label() {
    return labelForget.classList.remove("dark");
  },
  bg() {
    return logon.classList.remove("dark");
  },
  title() {
    return title.classList.remove("dark");
  },
  labelTheme() {
    return labelTheme.classList.remove("dark");
  },
};
