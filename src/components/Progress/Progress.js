export class Progress {
  constructor(element) {
    this.element = element;
    this.value = 0;
    this.isAnimated = false;
    this.isHidden = false;
    this.init();
  }

  init() {
    this.element.innerHTML = `
      <svg class="progress_ring" viewBox="0 0 36 36">
        <circle class="progress_ring-bg" cx="18" cy="18" r="16"></circle>
        <circle class="progress_ring-value" cx="18" cy="18" r="16"></circle>
      </svg>
    `;
    this.update();
  }

  setProgress(value) {
    this.value = Math.max(0, Math.min(100, value));
    this.update();
  }

  setAnimated(animated) {
    this.isAnimated = animated;
    this.update();
  }

  setHidden(hidden) {
    this.isHidden = hidden;
    this.update();
  }

  update() {
    const progressValue = this.element.querySelector(".progress_ring-value");
    const dashArrayValue = (this.value / 100) * (2 * Math.PI * 16);

    progressValue.style.strokeDasharray = `${dashArrayValue} ${2 * Math.PI * 16}`;

    if (this.value > 0 && this.isAnimated) {
      this.element.classList.add("animate");
    } else {
      this.element.classList.remove("animate");
    }
    
    this.element.classList.toggle("animate", this.isAnimated);
    this.element.classList.toggle("hidden", this.isHidden);

  }
}
