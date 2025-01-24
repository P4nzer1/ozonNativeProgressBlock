export function Input({ value, onInput }) {
    return `
      <label class="input">
        <input type="number" min="0" max="100" value="${value}" onchange="${onInput}" />
        <span class="label">Value</span>
      </label>
    `;
}