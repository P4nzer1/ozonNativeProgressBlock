export function Progress({ value }) {
    return `
      <div class="progress">
        <svg viewBox="0 0 36 36" class="progress-ring">
          <circle class="progress-ring-bg" cx="18" cy="18" r="16"></circle>
          <circle class="progress-ring-value" 
            cx="18" cy="18" r="16" 
            stroke-dasharray="${value}, 100"></circle>
        </svg>
        <div class="progress-value">${value}%</div>
      </div>
    `;
}
  