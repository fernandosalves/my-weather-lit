import { LitElement, html } from 'lit';

export class WeatherTemperature extends LitElement {

  render() {
    return html`
      <h1> Weather Temperature </h1>
    `;
  }
}

customElements.define('weather-temperature', WeatherTemperature);
