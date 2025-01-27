import { Progress } from "./components/Progress/Progress.js";
import { Input } from "./components/Input/Input.js";
import { Toggle } from "./components/Toggle/Toggle.js";

export default function initApp(rootBlockId) {
  const root = document.getElementById(rootBlockId);

  const progressElement = root.querySelector("#progress");
  const inputElement = root.querySelector("#input");
  const animateToggleElement = root.querySelector("#animate_toggle");
  const hideToggleElement = root.querySelector("#hide_toggle");

  const progress = new Progress(progressElement);
  new Input(inputElement, (value) => progress.setProgress(value));
  new Toggle(animateToggleElement, "Animate", (checked) => progress.setAnimated(checked));
  new Toggle(hideToggleElement, "Hide", (checked) => progress.setHidden(checked));
}

document.addEventListener("DOMContentLoaded", () => {
    initApp("root");
});