export class Toggle {
  constructor(element, labelText = 'Value', onChange) {
    this.element = element;
    this.labelText = labelText;
    this.onChange = onChange;
    this.checked = false;
    this.init();
  }

  init() {
    this.element.innerHTML = `
      <label class="toggle">
        <input type="checkbox" />
        <span class="slider"></span>
        <span class="label">${this.labelText}</span>
      </label>
    `;
    
    this.element.querySelector("input").addEventListener("change", (e) => {
      this.checked = e.target.checked;
      this.onChange(this.checked);
    });
  }
}