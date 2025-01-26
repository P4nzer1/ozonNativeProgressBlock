export class Input {
  constructor(element, onChange, progress) {
    this.element = element;
    this.onChange = onChange;
    this.progress = progress;
    this.init();
  }

  resetInput(e) {
    e.target.value = '';
    this.progress.setProgress(0); 
    this.onChange(0);
  }

  init() {
    this.element.innerHTML = `
      <label class="input">
        <input  type="number" min="0" max="100" value="0" />
        <span>Value</span>
      </label>
    `;
  
    this.element.querySelector("input").addEventListener("input", (e) => {
      const reg = /^(100|[0-9]?[0-9])$/;
      const value = e.target.value;
      
      if (value === '' || !reg.test(value) || parseInt(value, 10) > 100) {
        this.resetInput(e);
      } else {
        const numericValue = parseInt(value, 10);
        this.onChange(numericValue);
        this.progress.setProgress(numericValue);
      }
    });
  }
}