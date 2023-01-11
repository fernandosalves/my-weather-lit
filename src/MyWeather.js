import { html, LitElement } from 'lit';

import './components/weather-details.js';
import './components/weather-temperature.js';
import './components/weather-location.js';

export class MyWeather extends LitElement {

  render() {
    return html`
      <weather-temperature></weather-temperature>
      <weather-location></weather-location>
      <weather-details></weather-details>
    `;
  }
}
