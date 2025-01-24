export function Toggle({ label, isChecked }) {
    return `
      <label class="toggle">
        <input type="checkbox" ${isChecked ? "checked" : ""} />
        <span class="slider"></span>
        <span class="label">${label}</span>
      </label>
    `;
}
