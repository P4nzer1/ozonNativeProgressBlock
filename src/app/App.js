import { Progress } from '../components/Progress.js';
import { Toggle } from '../components/Toggle.js';

export default function App() {
    return `
    <div class="app">
      <div class="progress-container">
        ${Progress({ value: 40 })} 
      </div>
      <div class="controls">
        ${Toggle({ label: 'Value', isChecked: true })}
        ${Toggle({ label: 'Animate', isChecked: false })}
        ${Toggle({ label: 'Hide', isChecked: false })}
      </div>
    </div>
  `;
}

document.getElementById('root').innerHTML = App();