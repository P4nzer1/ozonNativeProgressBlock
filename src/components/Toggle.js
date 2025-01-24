export function Toggle({ label, isChecked, onChange }) {
    return `
      <label class="toggle">
        <input type="checkbox" ${isChecked ? "checked" : ""} onchange="${onChange}" />
        <span class="slider"></span>
        <span class="label">${label}</span>
      </label>
    `;
}