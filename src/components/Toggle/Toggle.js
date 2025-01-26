export class Toggle {
  constructor(element, label, onChange) {
    this.element = element;
    this.label = label;
    this.onChange = onChange;
    this.checked = false;
    this.init();
  }

  init() {
    this.element.innerHTML = `
      <label class="toggle">
        <input type="checkbox" />
        <span class="slider"></span>
        <span class="label">${this.label}</span>
      </label>
    `;
    
    this.element.querySelector("input").addEventListener("change", (e) => {
      this.checked = e.target.checked;
      this.onChange(this.checked);
    });
  }
}