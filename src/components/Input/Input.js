export class Input {
  constructor(element, onChange, minValue = 0, maxValue = 100, labelText = 'Value') {
    this.element = element;
    this.onChange = onChange;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.labelText = labelText;
    this.init();
  }

  resetInput(e) {
    e.target.value = '';
    this.onChange(0);
  }

  init() {
    this.element.innerHTML = `
      <label class="input">
        <input type="number" min="${this.minValue}" max="${this.maxValue}" value="${this.labelText}" />
        <span>${this.labelText}</span>
      </label>
    `;

    this.element.querySelector("input").addEventListener("input", (e) => {
      const value = e.target.value;
      const numValue = parseInt(value, 10);

      if (value === '' || isNaN(numValue) || numValue < this.minValue) {
        this.resetInput(e);
      } else {
        const finalValue = Math.min(numValue, this.maxValue);
        e.target.value = finalValue;
        this.onChange(finalValue);
      }
    });
  }
}
